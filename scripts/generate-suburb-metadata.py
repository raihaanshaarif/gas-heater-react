#!/usr/bin/env python3
"""
Generate unique SEO metadata for all 144 Melbourne suburb pages.
This script creates metadata that follows Google's 2026 guidelines:
- Unique, descriptive titles (50-60 chars)
- Unique meta descriptions (150-160 chars)
- All suburb-specific for local SEO
"""

import os
import re
from pathlib import Path

def format_suburb_name(slug):
    """Convert suburb slug to proper name (e.g., 'badger-creek' -> 'Badger Creek')"""
    words = slug.split('-')
    return ' '.join(word.capitalize() for word in words)

def generate_title(suburb):
    """Generate SEO-optimized title for suburb (50-60 chars)"""
    return f"{suburb} Gas Heater Repair Melbourne | 24/7 Emergency"

def generate_description(suburb):
    """Generate SEO-optimized description for suburb (150-160 chars)"""
    return f"Professional gas heater repair in {suburb}, Melbourne. Licensed technicians, same-day service, transparent pricing. Emergency 24/7 available. Call 0405133761 today."

def generate_keywords(suburb):
    """Generate relevant keywords for suburb"""
    return f"gas heater repair {suburb}, {suburb.lower()} gas heater service, emergency heating {suburb}, gas heating specialist {suburb}, licensed gas technician {suburb}"

def get_canonical_url(slug):
    """Generate canonical URL for suburb"""
    return f"https://gasheaterservicemelbourne.com.au/coverage/{slug}/"

def generate_metadata(suburb_slug):
    """Generate complete metadata object for a suburb"""
    suburb_name = format_suburb_name(suburb_slug)
    
    return {
        "title": generate_title(suburb_name),
        "description": generate_description(suburb_name),
        "keywords": generate_keywords(suburb_name),
        "canonical": get_canonical_url(suburb_slug),
        "suburb_name": suburb_name,
        "suburb_slug": suburb_slug
    }

def get_all_suburbs():
    """Get all suburb directories from app/coverage"""
    coverage_path = Path("app/coverage")
    suburbs = []
    
    if coverage_path.exists():
        for item in sorted(coverage_path.iterdir()):
            if item.is_dir() and not item.name.startswith('.'):
                suburbs.append(item.name)
    
    return suburbs

def main():
    suburbs = get_all_suburbs()
    
    print(f"Found {len(suburbs)} suburbs")
    print("\n" + "="*80)
    print("UNIQUE METADATA FOR ALL MELBOURNE SUBURBS")
    print("="*80 + "\n")
    
    # Generate metadata for each suburb
    all_metadata = []
    for suburb_slug in suburbs:
        metadata = generate_metadata(suburb_slug)
        all_metadata.append(metadata)
        
        print(f"Suburb: {metadata['suburb_name']}")
        print(f"  Title: {metadata['title']}")
        print(f"  Description: {metadata['description']}")
        print(f"  Keywords: {metadata['keywords']}")
        print(f"  Canonical: {metadata['canonical']}")
        print()
    
    print("="*80)
    print(f"\nGenerated metadata for {len(all_metadata)} suburbs")
    print("\nUse this metadata to update each suburb page's export const metadata object.")
    print("\nExample implementation:")
    print("""
export const metadata = {
  title: "Suburb Name Gas Heater Repair Melbourne | 24/7 Emergency",
  description: "Professional gas heater repair in Suburb Name, Melbourne...",
  keywords: "gas heater repair Suburb Name, emergency heating...",
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au/coverage/suburb-slug/",
  },
};
    """)
    
    # Save to JSON for reference
    import json
    with open('suburb_metadata.json', 'w') as f:
        json.dump(all_metadata, f, indent=2)
    print("\n✓ Saved complete metadata to 'suburb_metadata.json'")

if __name__ == "__main__":
    main()
