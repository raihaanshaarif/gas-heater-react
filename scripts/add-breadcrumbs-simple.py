#!/usr/bin/env python3
"""
Simple direct approach: Add BreadcrumbList schema to all suburb pages.
Injects the schema script directly into the JSX return.
"""

import re
from pathlib import Path

def format_suburb_name(slug):
    """Convert suburb slug to proper name"""
    return ' '.join(word.capitalize() for word in slug.split('-'))

def add_breadcrumb_simple(suburb_slug):
    """Add breadcrumb schema using direct string injection"""
    page_path = Path(f"app/coverage/{suburb_slug}/page.jsx")
    
    if not page_path.exists():
        return False
    
    try:
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # If breadcrumb already exists, skip
        if 'BreadcrumbList' in content:
            return False
        
        suburb_name = format_suburb_name(suburb_slug)
        
        # Create breadcrumb Script component string
        breadcrumb_script = f'''      <Script
        id="{suburb_slug}-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://gasheaterservicemelbourne.com.au"
              }},
              {{
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://gasheaterservicemelbourne.com.au/coverage/"
              }},
              {{
                "@type": "ListItem",
                "position": 3,
                "name": "{suburb_name}",
                "item": "https://gasheaterservicemelbourne.com.au/coverage/{suburb_slug}/"
              }}
            ]
          }})
        }}}}
      />'''
        
        # Find the location to insert - right after the opening return <> tag
        # Look for return (<> or return (^
        # Insert after <PageTitle...
        
        # Find the first Script tag after return and add before it
        # Or find <PageTitle and add the breadcrumb script right before <main
        
        if '<main id="tt-pageContent">' in content:
            # Insert breadcrumb script just before <main
            content = content.replace(
                '<main id="tt-pageContent">',
                f'{breadcrumb_script}\n      <main id="tt-pageContent">'
            )
        elif '<main' in content:
            # Find first occurrence of <main
            pattern = r'(<main[^>]*>)'
            content = re.sub(
                pattern,
                f'{breadcrumb_script}\n      \\1',
                content,
                count=1
            )
        else:
            # Fallback: add before the first <PageTitle
            if '<PageTitle' in content:
                content = content.replace(
                    '<PageTitle',
                    f'{breadcrumb_script}\n      <PageTitle',
                    1
                )
            else:
                return False
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    
    except Exception as e:
        print(f"Error: {e}")
        return False

def get_all_suburbs():
    """Get all suburb directories"""
    coverage_path = Path("app/coverage")
    suburbs = []
    
    if coverage_path.exists():
        for item in sorted(coverage_path.iterdir()):
            if item.is_dir() and (item / "page.jsx").exists():
                suburbs.append(item.name)
    
    return suburbs

def main():
    suburbs = get_all_suburbs()
    total = len(suburbs)
    
    print(f"Adding Breadcrumb schema to {total} suburb pages...")
    print("="*70)
    
    successful = 0
    failed = 0
    
    for i, suburb_slug in enumerate(suburbs, 1):
        if add_breadcrumb_simple(suburb_slug):
            print(f"[{i:3d}/{total}] ✓ {format_suburb_name(suburb_slug)}")
            successful += 1
        else:
            failed += 1
    
    print("="*70)
    print(f"\n✓ Successfully added: {successful}/{total}")
    if failed > 0:
        print(f"❌ Failed or skipped: {failed}")

if __name__ == "__main__":
    main()
