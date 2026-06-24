const fs = require('fs');
const path = require('path');

const coverageDir = path.join(process.cwd(), 'app', 'coverage');

// Get all suburb directories
const suburbs = fs.readdirSync(coverageDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);

let filesModified = 0;
let filesWithoutPricing = 0;

suburbs.forEach(suburb => {
  const pagePath = path.join(coverageDir, suburb, 'page.jsx');
  
  if (!fs.existsSync(pagePath)) {
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf-8');
  
  // Check if pricing section exists
  if (!content.includes('Gas Heater Service Costs in')) {
    filesWithoutPricing++;
    return;
  }

  // Remove the Local Pricing Grid section
  const pricingRegex = /\s*{\/\* Local Pricing Grid \*\/}\s*<div className="mt-\[40px\]">\s*<h3 className="ttitle text-\[24px\] md:text-\[32px\] mb-\[24px\]">Gas Heater Service Costs in .+?<\/div>\s*<\/div>/s;
  
  content = content.replace(pricingRegex, '');

  fs.writeFileSync(pagePath, content, 'utf-8');
  filesModified++;
  console.log(`✓ Removed pricing from ${suburb}`);
});

console.log(`\n✓ Modified ${filesModified} files`);
console.log(`✓ ${filesWithoutPricing} files already without pricing section`);
console.log(`✓ Total: ${filesModified + filesWithoutPricing} suburbs processed`);
