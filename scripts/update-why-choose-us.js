const fs = require('fs');
const path = require('path');

const coverageDir = path.join(process.cwd(), 'app', 'coverage');

// Get all suburb directories
const suburbs = fs.readdirSync(coverageDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);

let filesModified = 0;
let duplicatesRemoved = 0;

suburbs.forEach(suburb => {
  const pagePath = path.join(coverageDir, suburb, 'page.jsx');
  
  if (!fs.existsSync(pagePath)) {
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf-8');
  
  // First, remove any duplicate "Why Choose Us" sections (keep only the first one)
  const whyChooseUsRegex = /{\/\*\s*Service Area Details\s*\*\/}[\s\S]*?<div className="grid md:grid-cols-2 gap-\[20px\] text-\[14px\]">[\s\S]*?<\/div>\s*<\/div>/g;
  const matches = content.match(whyChooseUsRegex);
  
  if (matches && matches.length > 1) {
    // Remove duplicates, keeping only the first match
    content = content.replace(whyChooseUsRegex, matches[0]);
    duplicatesRemoved++;
  }
  
  // Format suburb name for display (e.g., "badger-creek" -> "Badger Creek")
  const displaySuburb = suburb
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Replace the old "Why Choose Us" section with a new, improved one
  const oldPattern = /{\/\*\s*Service Area Details\s*\*\/}\s*<div className="mt-\[40px\]">\s*<h3 className="ttitle text-\[24px\] md:text-\[32px\] mb-\[24px\]">Why Choose Us for [^<]+ Gas Heating<\/h3>\s*<div className="grid md:grid-cols-2 gap-\[20px\] text-\[14px\]">[\s\S]*?<\/div>\s*<\/div>/;

  const newPattern = `{/* Why Choose Us Section */}
        <div className="mt-[40px] mb-[40px]">
          <div className="mb-[32px]">
            <SectionTitle
              dataSubtitle="why choose us"
              dataTitle={\`Why Choose Us for ${displaySuburb} Gas Heating\`}
              dataMaxWidth="480px"
            />
            <p className="mt-[16px] text-[15px] text-[#344a70]">
              Our team of licensed  technicians brings expertise, reliability, and local knowledge to every job in ${displaySuburb}. We're committed to delivering the fastest response times and most transparent pricing in Melbourne.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-[24px]">
            <div className="border border-[#e2e8f4] rounded-[12px] p-[24px] bg-gradient-to-br from-[#f8faff] to-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-[16px]">
                <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-[#e8f0ff] flex items-center justify-center text-[24px]">🏘️</div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#092a66] mb-[8px]">Local Expertise</h4>
                  <p className="text-[14px] text-[#344a70] leading-relaxed">We know ${displaySuburb} neighborhoods and respond quickly to your heating needs. Our local presence ensures fast service and personal attention.</p>
                </div>
              </div>
            </div>
            <div className="border border-[#e2e8f4] rounded-[12px] p-[24px] bg-gradient-to-br from-[#f8faff] to-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-[16px]">
                <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-[#e8f0ff] flex items-center justify-center text-[24px]">✅</div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#092a66] mb-[8px]">Licensed &amp; Certified</h4>
                  <p className="text-[14px] text-[#344a70] leading-relaxed">All our technicians are fully licensed  gas fitters. Every job is backed by proper certification and complies with Victorian safety standards.</p>
                </div>
              </div>
            </div>
            <div className="border border-[#e2e8f4] rounded-[12px] p-[24px] bg-gradient-to-br from-[#f8faff] to-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-[16px]">
                <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-[#e8f0ff] flex items-center justify-center text-[24px]">⭐</div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#092a66] mb-[8px]">Professional Service</h4>
                  <p className="text-[14px] text-[#344a70] leading-relaxed">Our technicians are fully qualified and deliver professional service to every job. No shortcuts, no compromises on quality or safety.</p>
                </div>
              </div>
            </div>
            <div className="border border-[#e2e8f4] rounded-[12px] p-[24px] bg-gradient-to-br from-[#f8faff] to-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-[16px]">
                <div className="flex-shrink-0 w-[48px] h-[48px] rounded-lg bg-[#e8f0ff] flex items-center justify-center text-[24px]">🚨</div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#092a66] mb-[8px]">24/7 Emergency Service</h4>
                  <p className="text-[14px] text-[#344a70] leading-relaxed">When your heating fails in winter, we're here to help. Emergency response available any time, including weekends and holidays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  const beforeLength = content.length;
  content = content.replace(oldPattern, newPattern);
  
  if (content.length === beforeLength && !matches) {
    console.log(`⚠ Skipped ${suburb} - pattern didn't match`);
    return;
  }

  fs.writeFileSync(pagePath, content, 'utf-8');
  filesModified++;
  console.log(`✓ Updated ${suburb}`);
});

console.log(`\n✓ Successfully updated ${filesModified} coverage suburb pages`);
if (duplicatesRemoved > 0) {
  console.log(`✓ Removed duplicates from ${duplicatesRemoved} pages`);
}
