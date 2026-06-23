#!/usr/bin/env python3
"""
Month 3 Suburb Enhancement - Phase 2
Enhance remaining suburbs that weren't caught by the first script
"""

import os
import re
from pathlib import Path

COVERAGE_DIR = Path("app/coverage")

def format_suburb_name(dir_name):
    """Convert directory name to proper suburb name"""
    return ' '.join(word.capitalize() for word in dir_name.split('-'))

def get_faq_variable_name(content):
    """Extract the FAQ array variable name (e.g., 'armadaleFaqs')"""
    match = re.search(r'const (\w+Faqs) = \[', content)
    return match.group(1) if match else None

def add_faqs_to_page(file_path, suburb_name):
    """Add 3 additional FAQs to a suburb page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already enhanced
    if 'What types of gas heaters do you service' in content:
        return False
    
    # Get the FAQ variable name
    faq_var = get_faq_variable_name(content)
    if not faq_var:
        print(f"  ⚠️  Could not find FAQ variable in {file_path.parent.name}")
        return False
    
    # New FAQs to add
    new_faqs = f'''  {{
    question: "What types of gas heaters do you service in {suburb_name}?",
    answer:
      "We service all major brands including Braemar, Rinnai, Rheem, Dux, Bosch, Brivis, Bonaire, Vulcan, and more. Whether you have ducted heating, wall-mounted, or other gas heating systems, our certified technicians have the expertise to help.",
  }},
  {{
    question: "Can you install a new gas heater in {suburb_name}?",
    answer:
      "Yes, we provide full professional gas heater installation services in {suburb_name}. Our licensed VBA technicians will design, install, and test your system to meet all Victorian safety standards. We provide competitive quotes and can typically schedule installation within 5-7 business days.",
  }},
  {{
    question: "What makes your {suburb_name} gas heater service different?",
    answer:
      "We're a fully licensed, local {suburb_name} gas heater company with fast response times, transparent pricing, and a commitment to customer safety. Every technician is VBA certified, and we stand behind our work with a satisfaction guarantee.",
  }}'''
    
    # Add FAQs before the closing bracket
    pattern = f'(const {faq_var} = \\[.*?)(\\];)'
    replacement = f'\\1,\n{new_faqs}\n\\2'
    
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if new_content == content:
        print(f"  ⚠️  FAQ pattern not matched for {file_path.parent.name}")
        return False
    
    # Fix any double commas
    new_content = new_content.replace(',\n,\n  {', ',\n  {')
    new_content = new_content.replace(',\n  {', ',\n  {')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def add_pricing_section(file_path, suburb_name):
    """Add pricing grid section to a suburb page"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has pricing section
    if 'Gas Heater Service Costs in' in content:
        return False
    
    pricing_html = f'''
                {{/* Local Pricing Grid */}}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Gas Heater Service Costs in {suburb_name}</h3>
                  <div className="grid md:grid-cols-2 gap-[20px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Common Repairs</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>Service Call</span> <span className="font-bold">$80-150</span></li>
                        <li className="flex justify-between"><span>Pilot Light</span> <span className="font-bold">$100-180</span></li>
                        <li className="flex justify-between"><span>Ignition Module</span> <span className="font-bold">$120-250</span></li>
                        <li className="flex justify-between"><span>Thermostat</span> <span className="font-bold">$120-220</span></li>
                        <li className="flex justify-between"><span>Full Service</span> <span className="font-bold">$180-280</span></li>
                      </ul>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Installation &amp; Maintenance</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>System Diagnosis</span> <span className="font-bold">$70-150</span></li>
                        <li className="flex justify-between"><span>Annual Service</span> <span className="font-bold">$180-250</span></li>
                        <li className="flex justify-between"><span>New Installation</span> <span className="font-bold">$1,500-3,500</span></li>
                        <li className="flex justify-between"><span>Emergency After-Hours</span> <span className="font-bold">+$50-100</span></li>
                        <li className="flex justify-between"><span>Same-Day Service</span> <span className="font-bold">Available</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {{/* Service Area Benefits */}}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Why Choose Us for {suburb_name} Gas Heating</h3>
                  <div className="grid md:grid-cols-2 gap-[20px] text-[14px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Local Expertise</h4>
                      <p>We know {suburb_name} neighborhoods and can respond quickly to your heating needs. Our local presence means fast service and personal attention.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Licensed &amp; Certified</h4>
                      <p>All our technicians are fully licensed VBA gas fitters. Every job is backed by proper certification and complies with Victorian safety standards.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Transparent Pricing</h4>
                      <p>We provide upfront quotes before starting work. No hidden fees, no surprises. You know exactly what you'll pay.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">24/7 Emergency Service</h4>
                      <p>When your heating fails in winter, we're here to help. Emergency response available any time, including weekends and holidays.</p>
                    </div>
                  </div>
                </div>
                '''
    
    # Insert before the final section
    pattern = r'(<div\s+className="section__inner bg-no-repeat bg-center lazyload")'
    replacement = pricing_html + r'\n        <div className="section__inner bg-no-repeat bg-center lazyload"'
    
    new_content = re.sub(pattern, replacement, content)
    
    if new_content == content:
        print(f"  ⚠️  Could not insert pricing section for {file_path.parent.name}")
        return False
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    print("🚀 Enhancing remaining suburb pages...\n")
    
    enhanced_faq = 0
    enhanced_pricing = 0
    total_suburbs = 0
    
    for suburb_dir in sorted(COVERAGE_DIR.iterdir()):
        if not suburb_dir.is_dir() or suburb_dir.name.startswith('.'):
            continue
        
        total_suburbs += 1
        page_file = suburb_dir / 'page.jsx'
        
        if not page_file.exists():
            continue
        
        suburb_name = format_suburb_name(suburb_dir.name)
        
        # Try adding FAQs
        if add_faqs_to_page(page_file, suburb_name):
            enhanced_faq += 1
            print(f"✅ FAQs added: {suburb_name}")
        
        # Try adding pricing section
        if add_pricing_section(page_file, suburb_name):
            enhanced_pricing += 1
            print(f"✅ Pricing added: {suburb_name}")
        else:
            print(f"ℹ️  Pricing already present: {suburb_name}")
    
    print(f"\n📊 Enhancement Summary:")
    print(f"   FAQs added to: {enhanced_faq} suburbs")
    print(f"   Pricing added to: {enhanced_pricing} suburbs")
    print(f"   Total suburbs: {total_suburbs}")

if __name__ == '__main__':
    main()
