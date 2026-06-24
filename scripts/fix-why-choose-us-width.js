const fs = require('fs');
const path = require('path');

const coverageDir = path.join(process.cwd(), 'app', 'coverage');

// Get all suburb directories
const suburbs = fs.readdirSync(coverageDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);

let filesModified = 0;

suburbs.forEach(suburb => {
  const pagePath = path.join(coverageDir, suburb, 'page.jsx');
  
  if (!fs.existsSync(pagePath)) {
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf-8');
  
  // Replace the Why Choose Us section opening div to add width constraints
  const oldPattern = /{\/\* Why Choose Us Section \*\/}\n        <div className="mt-\[40px\] mb-\[40px\]">/;
  const newPattern = `{/* Why Choose Us Section */}
        <div className="mt-[40px] mb-[40px] max-w-6xl mx-auto px-[20px]">`;

  const beforeLength = content.length;
  content = content.replace(oldPattern, newPattern);
  
  if (content.length === beforeLength) {
    console.log(`⚠ Skipped ${suburb} - pattern didn't match`);
    return;
  }

  fs.writeFileSync(pagePath, content, 'utf-8');
  filesModified++;
  console.log(`✓ Updated ${suburb}`);
});

console.log(`\n✓ Successfully updated width on ${filesModified} coverage suburb pages`);
