/**
 * Internal Linking Strategy Utilities
 * Generates strategic internal links for SEO optimization
 * Follows Google 2026 guidelines for PageRank distribution
 */

/**
 * Generate related suburb links for a specific suburb
 * Returns neighboring suburbs and related service area links
 */
export function getRelatedSuburbLinks(currentSuburb) {
  // Suburb proximity mapping (neighbors)
  const suburbNeighbors = {
    brighton: ['bentleigh', 'brighton-east', 'caulfield', 'highett'],
    caulfield: ['brighton', 'oakleigh', 'glen-waverley', 'malvern'],
    essendon: ['north-melbourne', 'moonee-ponds', 'brunswick', 'ascot-vale'],
    st-kilda: ['brighton', 'elsternwick', 'balaclava', 'south-yarra'],
    southbank: ['melbourne-cbd', 'st-kilda', 'south-yarra', 'docklands'],
    melbourne-cbd: ['southbank', 'docklands', 'north-melbourne', 'collingwood'],
  };
  
  return suburbNeighbors[currentSuburb] || [];
}

/**
 * Generate related service links for relevant content
 */
export function getRelatedServiceLinks(pageType, category) {
  const relatedServices = {
    residential: [
      { text: 'Emergency Repair Service', href: '/services/services__emergency/' },
      { text: 'Maintenance & Service', href: '/services/services__residential/' },
      { text: 'Installation', href: '/services/services__residential/' },
    ],
    commercial: [
      { text: 'Residential Service', href: '/services/services__residential/' },
      { text: '24/7 Emergency Support', href: '/services/services__emergency/' },
    ],
    emergency: [
      { text: 'Residential Services', href: '/services/services__residential/' },
      { text: 'Commercial Services', href: '/services/services__commercial/' },
      { text: 'View All Services', href: '/services/' },
    ],
  };
  
  return relatedServices[pageType] || [];
}

/**
 * Generate related blog post links
 */
export function getRelatedBlogLinks(currentCategory) {
  const relatedPosts = {
    'Safety': [
      { text: 'Essential Gas Heater Safety Tips', postId: 9 },
      { text: 'Complete Maintenance Guide', postId: 8 },
    ],
    'Maintenance': [
      { text: 'Complete Gas Heater Maintenance Guide', postId: 8 },
      { text: 'Common Problems and Solutions', postId: 11 },
    ],
    'Repair': [
      { text: 'Repair vs Replace Decision', postId: 10 },
      { text: 'Common Gas Heater Problems', postId: 11 },
    ],
    'Installation': [
      { text: 'Professional Installation Guide', postId: 12 },
      { text: 'Maintenance After Installation', postId: 8 },
    ],
  };
  
  return relatedPosts[currentCategory] || [];
}

/**
 * Generate brand-specific links
 */
export function getRelatedBrandLinks(currentBrand) {
  const allBrands = [
    { name: 'Braemar', slug: 'braemar' },
    { name: 'Rinnai', slug: 'rinnai' },
    { name: 'Brivis', slug: 'brivis' },
    { name: 'Bonaire', slug: 'bonaire' },
    { name: 'Pyrox', slug: 'pyrox' },
    { name: 'Kaden', slug: 'kaden' },
    { name: 'Vulcan', slug: 'vulcan' },
  ];
  
  // Return other brands (exclude current)
  return allBrands.filter(b => b.slug !== currentBrand);
}

/**
 * Generate featured suburb links (high-traffic suburbs for internal PageRank distribution)
 */
export function getFeaturedSuburbLinks() {
  // High-traffic Melbourne suburbs
  return [
    { name: 'Brighton', slug: 'brighton' },
    { name: 'South Yarra', slug: 'south-yarra' },
    { name: 'St Kilda', slug: 'st-kilda' },
    { name: 'Caulfield', slug: 'caulfield' },
    { name: 'Glen Waverley', slug: 'glen-waverley' },
    { name: 'Essendon', slug: 'essendon' },
    { name: 'Southbank', slug: 'southbank' },
    { name: 'Melbourne CBD', slug: 'melbourne-cbd' },
  ];
}

/**
 * HTML snippet for related suburb links
 * Can be inserted into suburb page templates
 */
export function getSuburbLinksHTML(currentSuburb, suburbName) {
  const neighbors = getRelatedSuburbLinks(currentSuburb);
  
  if (neighbors.length === 0) return null;
  
  const links = neighbors.slice(0, 3).map(neighbor => {
    const neighborName = neighbor.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `<a href="/coverage/${neighbor}/" className="text-blue-600 hover:text-blue-800 underline">
      Gas Heater Service in ${neighborName}
    </a>`;
  }).join(' | ');
  
  return `
    <div className="mt-8 pt-6 border-t">
      <h4 className="font-semibold mb-3">Nearby Service Areas</h4>
      <p className="text-sm text-gray-700">
        We also serve neighborhoods near ${suburbName}: ${links}
      </p>
    </div>
  `;
}
