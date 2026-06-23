#!/usr/bin/env python3
"""
Remove all pricing information from all 144 suburb coverage pages
Specifically targets the pricing grid sections
"""

import os
import re
from pathlib import Path

def remove_pricing_from_suburb_page(file_path):
    """Remove pricing grid from a suburb coverage page"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Remove the entire Local Pricing Grid section
        # Pattern: Find {/* Local Pricing Grid */}...{/* Service Area Details */}
        content = re.sub(
            r'\s*{/\* Local Pricing Grid \*/}.*?{/\* Service Area Details \*/}',
            '\n                {/* Service Area Details */}',
            content,
            flags=re.DOTALL,
            count=1
        )
        
        # 2. Remove FAQ questions about "How much does a gas heater service cost"
        content = re.sub(
            r'\{\s*question:\s*"How much does a gas heater service cost in [^"]*\?",\s*answer:\s*"[^"]*\$[^"]*"?\s*\},?',
            '',
            content,
            flags=re.DOTALL
        )
        
        # 3. Replace "Transparent Pricing" section with something else
        content = re.sub(
            r'<h4 className="font-bold mb-\[12px\] text-\[#092a66\]">Transparent Pricing</h4>\s*<p>We provide upfront quotes before starting work\. No hidden fees, no surprises\. You know exactly what you\'ll pay\.</p>',
            '<h4 className="font-bold mb-[12px] text-[#092a66]">Professional Service</h4><p>Our technicians are fully qualified and deliver professional service to every job. No shortcuts, no compromises on quality or safety.</p>',
            content
        )
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"    ✗ Error: {str(e)}")
        return False

def main():
    """Main function"""
    print("=" * 70)
    print("Removing Pricing Information from All 144 Suburb Coverage Pages")
    print("=" * 70 + "\n")
    
    coverage_dir = Path("app/coverage")
    
    if not coverage_dir.exists():
        print("✗ app/coverage directory not found")
        return
    
    # Get all suburb directories
    suburb_dirs = [d for d in coverage_dir.iterdir() if d.is_dir()]
    suburb_dirs.sort()
    
    successful = 0
    skipped = 0
    modified = 0
    failed = 0
    
    for idx, suburb_dir in enumerate(suburb_dirs, 1):
        page_file = suburb_dir / "page.jsx"
        
        if not page_file.exists():
            skipped += 1
            continue
        
        suburb_name = suburb_dir.name.replace("-", " ").title()
        
        try:
            if remove_pricing_from_suburb_page(str(page_file)):
                print(f"[{idx:3d}/144] ✓ {suburb_name:30s} - pricing removed")
                modified += 1
            else:
                print(f"[{idx:3d}/144] ⊘ {suburb_name:30s} - no changes needed")
                successful += 1
        except Exception as e:
            print(f"[{idx:3d}/144] ✗ {suburb_name:30s} - error: {str(e)}")
            failed += 1
    
    print("\n" + "=" * 70)
    print(f"Processing Complete:")
    print(f"  ✓ Pages modified: {modified}")
    print(f"  ⊘ No changes needed: {successful}")
    print(f"  ✗ Failed: {failed}")
    print(f"  Total suburbs: {len(suburb_dirs)}")
    print("=" * 70)

if __name__ == "__main__":
    main()
