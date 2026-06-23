#!/usr/bin/env node
/**
 * Month 3 Enhancement Script V2: Fix syntax errors and enhance remaining suburbs
 * - Fixes the comma syntax error from V1
 * - Handles all formatting variations
 */

const fs = require('fs');
const path = require('path');

const COVERAGE_DIR = path.join(__dirname, '../app/coverage');

const getAdditionalFaqs = (suburb) => `  {
    question: "What types of gas heaters do you service in ${suburb}?",
    answer:
      "We service all major brands including Braemar, Rinnai, Rheem, Dux, Bosch, Brivis, Bonaire, Vulcan, and more. Whether you have ducted heating, wall-mounted, or other gas heating systems, our certified technicians have the expertise to help.",
  },
  {
    question: "Can you install a new gas heater in ${suburb}?",
    answer:
      "Yes, we provide full professional gas heater installation services in ${suburb}. Our licensed VBA technicians will design, install, and test your system to meet all Victorian safety standards. We provide competitive quotes and can typically schedule installation within 5-7 business days.",
  },
  {
    question: "What makes your ${suburb} gas heater service different?",
    answer:
      "We're a fully licensed, local ${suburb} gas heater company with fast response times, transparent pricing, and a commitment to customer safety. Every technician is VBA certified, and we stand behind our work with a satisfaction guarantee.",
  }`;

const getPricingSection = (suburb) => `
                {/* Local Pricing Grid */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Gas Heater Service Costs in ${suburb}</h3>
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

                {/* Service Area Details */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Why Choose Us for ${suburb} Gas Heating</h3>
                  <div className="grid md:grid-cols-2 gap-[20px] text-[14px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Local Expertise</h4>
                      <p>We know ${suburb} neighborhoods and can respond quickly to your heating needs. Our local presence means fast service and personal attention.</p>
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
                </div>`;

function enhancePage(suburbDir) {
  const pagePath = path.join(suburbDir, 'page.jsx');
  
  if (!fs.existsSync(pagePath)) return 'SKIP_NO_FILE';
  
  let content = fs.readFileSync(pagePath, 'utf8');
  const suburb = path.basename(suburbDir)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Check if already has pricing section
  if (content.includes('Gas Heater Service Costs in')) {
    return 'SKIP_ALREADY_ENHANCED';
  }
  
  // Fix syntax error: remove stray commas before new FAQs
  content = content.replace(/,\n  \{\n    question: "What types of gas heaters/g, '\n  {\n    question: "What types of gas heaters');
  
  // Ensure FAQs end without trailing comma before ]
  content = content.replace(/What makes your.*?" do you service different\?",\n    answer:\n      "[^"]*",\n  \},\n\];/s, 
    (match) => {
      // Keep the last FAQ without trailing comma
      return match.replace(/},\n\];$/, '}\n\];');
    });
  
  // Find FAQ array more robustly
  const faqPattern = /(const \w+Faqs = \[[\s\S]*?)\];/;
  const match = content.match(faqPattern);
  
  if (match) {
    const beforeArray = match[1];
    // Check if new FAQs already added
    if (!beforeArray.includes('What types of gas heaters')) {
      const additionalFaqs = getAdditionalFaqs(suburb);
      const newContent = beforeArray + `,\n${additionalFaqs}\n\n]`;
      content = content.replace(match[0], newContent);
    }
  }
  
  // Add pricing section
  const insertPattern = /(<div\s+className="section__inner bg-no-repeat bg-center lazyload")/;
  if (insertPattern.test(content)) {
    const pricingSection = getPricingSection(suburb);
    content = content.replace(
      insertPattern,
      `${pricingSection}\n        <div className="section__inner bg-no-repeat bg-center lazyload"`
    );
  }
  
  fs.writeFileSync(pagePath, content, 'utf8');
  return 'ENHANCED';
}

function main() {
  const coverageEntries = fs.readdirSync(COVERAGE_DIR, { withFileTypes: true });
  const suburbDirs = coverageEntries
    .filter(entry => entry.isDirectory() && entry.name !== '..' && entry.name !== '.')
    .map(entry => path.join(COVERAGE_DIR, entry.name));
  
  let enhanced = 0;
  let fixed = 0;
  let skipped = 0;
  let errors = 0;
  
  console.log(`🔧 Running enhancement fix script on ${suburbDirs.length} suburbs...\n`);
  
  suburbDirs.forEach(dir => {
    try {
      const result = enhancePage(dir);
      const suburb = path.basename(dir);
      
      if (result === 'ENHANCED') {
        enhanced++;
        console.log(`✅ Enhanced: ${suburb}`);
      } else if (result === 'SKIP_ALREADY_ENHANCED') {
        skipped++;
      } else {
        fixed++;
      }
    } catch (e) {
      errors++;
      console.log(`❌ Error with ${path.basename(dir)}: ${e.message}`);
    }
  });
  
  console.log(`\n📊 Fix complete!`);
  console.log(`   Enhanced: ${enhanced} pages`);
  console.log(`   Already good: ${skipped} pages`);
  console.log(`   Errors: ${errors} pages`);
  console.log(`   Total: ${suburbDirs.length} pages`);
}

main();
