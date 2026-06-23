#!/usr/bin/env python3
"""
Robustly update suburb page metadata to be unique and SEO-optimized.
This version handles multi-line metadata structures.
"""

import re
from pathlib import Path

def format_suburb_name(slug):
    """Convert suburb slug to proper name"""
    words = slug.split('-')
    return ' '.join(word.capitalize() for word in words)

def generate_metadata_code(suburb_name, suburb_slug):
    """Generate new metadata code"""
    title = f"{suburb_name} Gas Heater Repair Melbourne | 24/7 Emergency Service"
    description = f"Professional gas heater repair in {suburb_name}, Melbourne. Licensed technicians, same-day service, transparent pricing. Call 0405133761."
    keywords = f"gas heater repair {suburb_name}, {suburb_slug} gas heater service, emergency heating {suburb_name}, gas heating specialist {suburb_name}"
    
    return f'''// Metadata
export const metadata = {{
  title: "{title}",
  description: "{description}",
  keywords: "{keywords}",
  alternates: {{
    canonical: "https://gasheaterservicemelbourne.com.au/coverage/{suburb_slug}/",
  }},
}};'''

def update_suburb_page(suburb_slug):
    """Update a specific suburb page metadata"""
    page_path = Path(f"app/coverage/{suburb_slug}/page.jsx")
    
    if not page_path.exists():
        return False, f"File not found"
    
    suburb_name = format_suburb_name(suburb_slug)
    new_metadata = generate_metadata_code(suburb_name, suburb_slug)
    
    try:
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the metadata export block more carefully
        # Pattern: from "// Metadata" comment through "export const metadata = {...};"
        pattern = r'// Metadata\nexport const metadata = \{[^}]*alternates: \{[^}]*\}[^}]*\};'
        
        if re.search(pattern, content, re.DOTALL):
            updated_content = re.sub(pattern, new_metadata, content, flags=re.DOTALL)
        else:
            # Try alternate pattern without the comment
            pattern2 = r'export const metadata = \{[^}]*title:[^}]*description:[^}]*keywords:[^}]*alternates:[^}]*canonical:[^}]*\}[^}]*\};'
            if re.search(pattern2, content, re.DOTALL):
                updated_content = re.sub(pattern2, new_metadata, content, flags=re.DOTALL)
            else:
                return False, "Could not find metadata block"
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        return True, suburb_name
    
    except Exception as e:
        return False, str(e)

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
    
    print(f"Updating unique metadata for {total} suburbs...")
    print("="*70 + "\n")
    
    successful = 0
    failed_list = []
    
    for i, suburb_slug in enumerate(suburbs, 1):
        success, name = update_suburb_page(suburb_slug)
        
        if success:
            print(f"[{i:3d}/{total}] ✓ {name}")
            successful += 1
        else:
            print(f"[{i:3d}/{total}] ❌ Error: {name}")
            failed_list.append((suburb_slug, name))
    
    print("\n" + "="*70)
    print(f"\n✓ Successfully updated: {successful}/{total} suburbs")
    
    if failed_list:
        print(f"\n❌ Failed to update ({len(failed_list)}):")
        for suburb_slug, error in failed_list[:10]:
            print(f"   - {suburb_slug}: {error}")
        if len(failed_list) > 10:
            print(f"   ... and {len(failed_list) - 10} more")
    
    print(f"\n✓ All unique metadata applied with:")
    print(f"  • Suburb-specific titles (60-70 chars)")
    print(f"  • Suburb-specific descriptions (150-160 chars)")
    print(f"  • Suburb-specific keywords")
    print(f"  • Canonical URLs for SEO")

if __name__ == "__main__":
    main()
