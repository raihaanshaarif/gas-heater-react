#!/usr/bin/env node
/**
 * Month 3 Enhancement Script: Bulk enhance all suburb pages
 * - Expand FAQs from 3 to 6 per suburb
 * - Add local pricing grid
 * - Add service area details
 */

const fs = require('fs');
const path = require('path');

const COVERAGE_DIR = path.join(__dirname, '../app/coverage');

// Additional FAQs to add to each suburb page
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
  },`;

// Local pricing section
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

// Process a single suburb page
function enhancePage(suburbDir) {
  const pagePath = path.join(suburbDir, 'page.jsx');
  
  if (!fs.existsSync(pagePath)) return false;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Extract suburb name from directory
  const suburb = path.basename(suburbDir)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Check if already enhanced (look for "Types of gas heaters")
  if (content.includes("What types of gas heaters do you service")) {
    return false; // Already enhanced
  }
  
  // Find the armadaleFaqs array and add more FAQs
  const faqArrayPattern = /const [a-z]+Faqs = \[\s*([\s\S]*?)\s*\];/;
  const match = content.match(faqArrayPattern);
  
  if (match) {
    const oldFaqArray = match[0];
    const newFaqArray = oldFaqArray.replace(
      /\];$/,
      `,\n${getAdditionalFaqs(suburb)}\n];`
    );
    content = content.replace(oldFaqArray, newFaqArray);
  }
  
  // Add pricing and service area sections before LogoPartners
  const logoPartnersPattern = /<div\s+className="section__inner bg-no-repeat bg-center lazyload"/;
  if (logoPartnersPattern.test(content)) {
    const pricingContent = getPricingSection(suburb);
    content = content.replace(
      logoPartnersPattern,
      `${pricingContent}\n        <div className="section__inner bg-no-repeat bg-center lazyload"`
    );
  }
  
  fs.writeFileSync(pagePath, content, 'utf8');
  return true;
}

// Main execution
function main() {
  const coverageEntries = fs.readdirSync(COVERAGE_DIR, { withFileTypes: true });
  const suburbDirs = coverageEntries
    .filter(entry => entry.isDirectory() && entry.name !== '..' && entry.name !== '.')
    .map(entry => path.join(COVERAGE_DIR, entry.name));
  
  let enhanced = 0;
  let skipped = 0;
  
  console.log(`🚀 Starting enhancement of ${suburbDirs.length} suburb pages...\n`);
  
  suburbDirs.forEach(dir => {
    const result = enhancePage(dir);
    if (result) {
      enhanced++;
      const suburb = path.basename(dir);
      console.log(`✅ Enhanced: ${suburb}`);
    } else {
      skipped++;
    }
  });
  
  console.log(`\n📊 Enhancement complete!`);
  console.log(`   Enhanced: ${enhanced} pages`);
  console.log(`   Already enhanced/skipped: ${skipped} pages`);
  console.log(`   Total: ${suburbDirs.length} pages`);
}

main();
