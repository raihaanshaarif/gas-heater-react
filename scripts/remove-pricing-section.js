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
  if (!content.includes('{/* Local Pricing Grid */}')) {
    filesWithoutPricing++;
    return;
  }

  // More precise regex to match the pricing section
  // Matches from {/* Local Pricing Grid */} to the closing </div> of that section
  const pricingRegex = /\n\s*{\/\* Local Pricing Grid \*\/}\s*\n\s*<div className="mt-\[40px\]">[\s\S]*?<\/div>\s*\n\s*(?={\/\* Service Area Details \*\/})/;
  
  const originalLength = content.length;
  content = content.replace(pricingRegex, '');
  
  if (content.length === originalLength) {
    console.log(`⚠ Failed to remove pricing from ${suburb} - regex didn't match`);
    return;
  }

  fs.writeFileSync(pagePath, content, 'utf-8');
  filesModified++;
  console.log(`✓ Removed pricing from ${suburb}`);
});

console.log(`\n✓ Modified ${filesModified} files`);
console.log(`✓ ${filesWithoutPricing} files already without pricing section`);
console.log(`✓ Total: ${filesModified + filesWithoutPricing} suburbs processed`);
