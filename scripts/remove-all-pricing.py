#!/usr/bin/env python3
"""
Remove all pricing/cost information from entire website
Removes prices from:
- FAQ sections
- Pricing grids/tables
- Service descriptions
- Brand pages
- Utilities
"""

import os
import re
from pathlib import Path

def remove_prices_from_file(file_path):
    """Remove all pricing information from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove FAQ questions about pricing
        content = re.sub(
            r'\{\s*question:\s*"How much does.*?\?",\s*answer:\s*"[^"]*\$[^"]*"?\s*\},?',
            '',
            content,
            flags=re.DOTALL
        )
        
        # Remove price ranges like $150-600, $80-150, etc.
        content = re.sub(
            r'\$\d+(?:,\d{3})?(?:\.\d{2})?(?:-\$?\d+(?:,\d{3})?(?:\.\d{2})?)?',
            '',
            content
        )
        
        # Remove "Cost: $X-$Y" patterns
        content = re.sub(
            r'\bCost:\s*\$[\d,.\-\s]+\.?\s*',
            'Service: ',
            content
        )
        
        # Remove phrases like "...from $X to $Y"
        content = re.sub(
            r'\s+(?:from|starting|ranging)?\s+\$[\d,.\-\s]+',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        # Remove "Transparent Pricing" sections
        content = re.sub(
            r'<h4.*?Transparent Pricing.*?</div>',
            '<h4 className="font-bold mb-[12px] text-[#092a66]">Professional Service</h4><p>Our technicians are fully qualified and deliver professional service to every job. No shortcuts, no compromises on quality or safety.</p></div>',
            content,
            flags=re.IGNORECASE | re.DOTALL
        )
        
        # Remove pricing tables/grids
        content = re.sub(
            r'<h3.*?(?:Gas Heater Service Costs|Repair Costs|Pricing).*?</h3>.*?</div>\s*</div>',
            '',
            content,
            flags=re.IGNORECASE | re.DOTALL,
            count=1
        )
        
        # Remove "price_data" from checkout routes
        content = re.sub(
            r'price_data:\{[^}]*\}[,\n]*',
            '',
            content
        )
        
        # Remove fee/cost mentions from descriptions
        content = re.sub(
            r'(?:hidden|additional|upfront|after-hours)?\s*(?:fees?|costs?|charges?)[,\s]*',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        # Clean up "no hidden fee" type statements
        content = re.sub(
            r'\b(?:No hidden|upfront|transparent pricing|exact price|cost-effective|expensive|affordable|cheap)\b[^\n]*(?=\n|</p>)',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {str(e)}")
        return False

def main():
    """Main function"""
    print("=" * 60)
    print("Removing All Pricing Information from Website")
    print("=" * 60)
    
    # Target directories
    app_dir = Path("app")
    
    # Find all .jsx and .js files
    files_to_process = []
    
    for pattern in ["**/*.jsx", "**/*.js"]:
        files_to_process.extend(app_dir.glob(pattern))
    
    # Exclude node_modules and .next
    files_to_process = [
        f for f in files_to_process 
        if 'node_modules' not in str(f) and '.next' not in str(f)
    ]
    
    successful = 0
    skipped = 0
    modified = 0
    
    for idx, file_path in enumerate(sorted(files_to_process), 1):
        relative_path = file_path.relative_to(app_dir.parent)
        
        # Skip non-page files unless they are utilities we need to update
        if remove_prices_from_file(str(file_path)):
            print(f"[{idx:3d}] ✓ {relative_path}")
            modified += 1
        else:
            skipped += 1
    
    print("\n" + "=" * 60)
    print(f"✓ Total files processed: {len(files_to_process)}")
    print(f"✓ Files modified: {modified}")
    print(f"⊘ Files unchanged: {skipped}")
    print("=" * 60)
    print("\n✓ All pricing information removed!")
    print("  • Price ranges removed (e.g., $150-600)")
    print("  • Cost/fee mentions removed")
    print("  • Pricing tables removed")
    print("  • Price-related FAQs updated")
    print("  • Pricing promises replaced with service quality messages")

if __name__ == "__main__":
    main()
