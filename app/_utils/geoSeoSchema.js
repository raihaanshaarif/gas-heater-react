/**
 * Geographic SEO (GEO) Schema Generator
 * Optimizes for local search and geographic targeting
 * Google 2026 guidelines
 */

/**
 * Generate enhanced LocalBusiness schema with geographic specifics
 */
export function generateLocalBusinessSchema(suburb, slugName) {
  const suburbCoordinates = getSuburbCoordinates(slugName);
  const nearby = getNearbySuburbs(slugName);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://gasheaterservicemelbourne.com.au/coverage/${slugName}/#business`,
    "name": `Gas Heater Service Melbourne - ${suburb}`,
    "description": `Professional gas heater repair, installation and maintenance services in ${suburb}, Melbourne. VBA licensed technicians, same-day emergency service.`,
    "url": `https://gasheaterservicemelbourne.com.au/coverage/${slugName}/`,
    "telephone": "0405 133 761",
    "email": "nihaanexpertise@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Melbourne, Victoria",
      "addressLocality": suburb,
      "addressRegion": "Victoria",
      "postalCode": getSuburbPostcode(slugName),
      "addressCountry": "AU",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": suburbCoordinates.lat,
      "longitude": suburbCoordinates.lng,
    },
    "serviceArea": {
      "@type": "City",
      "name": suburb,
    },
    "areaServed": [
      {
        "@type": "City",
        "name": suburb,
      },
      ...nearby.map((n) => ({
        "@type": "City",
        "name": n,
      })),
    ],
    "priceRange": "$$",
    "openingHours": ["Mo-Su 00:00-23:59"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
    },
  };
}

/**
 * Generate Service Radius schema for geographic coverage
 */
export function generateServiceRadiusSchema(serviceArea = "Melbourne") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gas Heater Service Melbourne",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Gas Heater Service Melbourne",
    },
    "serviceArea": {
      "@type": "City",
      "name": "Melbourne",
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne, Victoria, Australia",
    },
    "description": "24/7 gas heater repair, installation, and maintenance services across all Melbourne suburbs",
  };
}

/**
 * Suburb coordinates for accurate geo-targeting
 */
function getSuburbCoordinates(slugName) {
  const coordinates = {
    brighton: { lat: "-37.9287", lng: "145.0063" },
    "brighton-east": { lat: "-37.9408", lng: "145.0193" },
    caulfield: { lat: "-37.8753", lng: "145.0483" },
    "glen-waverley": { lat: "-37.8376", lng: "145.1661" },
    essendon: { lat: "-37.7564", lng: "144.9272" },
    "st-kilda": { lat: "-37.8655", lng: "144.9738" },
    "south-yarra": { lat: "-37.8386", lng: "145.0141" },
    southbank: { lat: "-37.8224", lng: "144.9688" },
    "melbourne-cbd": { lat: "-37.8136", lng: "144.9631" },
    bentleigh: { lat: "-37.8963", lng: "145.0794" },
    "st-kilda-road": { lat: "-37.8429", lng: "144.9732" },
  };

  return coordinates[slugName] || { lat: "-37.8136", lng: "144.9631" };
}

/**
 * Suburb postcodes for local targeting
 */
function getSuburbPostcode(slugName) {
  const postcodes = {
    brighton: "3186",
    "brighton-east": "3187",
    caulfield: "3161",
    "glen-waverley": "3150",
    essendon: "3040",
    "st-kilda": "3182",
    "south-yarra": "3141",
    southbank: "3006",
    "melbourne-cbd": "3000",
    bentleigh: "3204",
    "st-kilda-road": "3004",
  };

  return postcodes[slugName] || "3000";
}

/**
 * Get nearby suburbs for geographic relationship building
 */
function getNearbySuburbs(slugName) {
  const nearby = {
    brighton: ["Bentleigh", "Brighton-East", "Caulfield", "Highett"],
    "brighton-east": ["Brighton", "Bentleigh", "Caulfield", "Sandringham"],
    caulfield: ["Brighton", "Glen-Waverley", "Malvern", "Oakleigh"],
    "glen-waverley": ["Caulfield", "Oakleigh", "Wheelers-Hill", "Mountwaverley"],
    essendon: ["North-Melbourne", "Moonee-Ponds", "Brunswick", "Ascot-Vale"],
    "st-kilda": ["Brighton", "Elsternwick", "Balaclava", "Fitzroy-Street"],
    "south-yarra": ["Prahran", "St-Kilda-Road", "Melbourne-CBD", "Toorak"],
    southbank: ["Melbourne-CBD", "St-Kilda", "South-Yarra", "Docklands"],
    "melbourne-cbd": ["Southbank", "Docklands", "Collingwood", "Fitzroy"],
  };

  return nearby[slugName] || [];
}

/**
 * Generate geographic hierarchy schema for better local targeting
 */
export function generateGeoHierarchySchema(suburb, postcode = "3000") {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `https://gasheaterservicemelbourne.com.au/geo/${suburb.toLowerCase()}`,
    "name": suburb,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": suburb,
      "addressRegion": "Victoria",
      "postalCode": postcode,
      "addressCountry": "AU",
    },
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": getSuburbCoordinates(suburb.toLowerCase().replace(/\s+/g, "-")).lat,
        "longitude": getSuburbCoordinates(suburb.toLowerCase().replace(/\s+/g, "-")).lng,
      },
      "geoRadius": "2000", // 2km service radius
    },
  };
}

/**
 * Service coverage area with multiple locations
 */
export function generateMultiLocationBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gas Heater Service Melbourne",
    "url": "https://gasheaterservicemelbourne.com.au",
    "telephone": "0405 133 761",
    "sameAs": [
      "https://www.facebook.com/gasheaterservicemelbourne",
      "https://www.google.com/maps/place/Gas+Heater+Service+Melbourne",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "Victoria",
      "addressCountry": "AU",
    },
    "serviceArea": [
      {
        "@type": "City",
        "name": "Melbourne",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Victoria",
      },
    ],
    "description": "24/7 gas heater repair, installation, and maintenance services across all 144 Melbourne suburbs",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
    },
  };
}

/**
 * Generate geo-specific content structure for AEO
 */
export function generateGeoAnswerContent(suburb) {
  return {
    title: `Gas Heater Service in ${suburb}, Melbourne`,
    description: `Find professional gas heater repair, installation, and maintenance in ${suburb}. VBA licensed technicians, same-day service. Call 0405 133 761.`,
    
    // Key answer phrases for AI engines
    answerPhrases: [
      `In ${suburb}, we provide 24/7 emergency gas heater repair service.`,
      `Our ${suburb} technicians are VBA licensed and available same-day.`,
      `Gas heater repair in ${suburb} costs from $150-$600 depending on the issue.`,
      `We service all major brands in ${suburb} including Braemar, Rinnai, Brivis, Bonaire, Pyrox, Kaden, and Vulcan.`,
      `${suburb} residents can expect 1-3 hour repair times for most issues.`,
      `Annual gas heater servicing in ${suburb} prevents winter breakdowns.`,
    ],

    // FAQ structure for search engines
    faqItems: [
      {
        q: `What are common gas heater problems in ${suburb}?`,
        a: `Common gas heater issues in ${suburb} include no heat, pilot light failures, strange noises, and temperature fluctuations. Our licensed technicians diagnose and repair all issues quickly.`,
      },
      {
        q: `Do you offer same-day emergency service in ${suburb}?`,
        a: `Yes, we provide 24/7 emergency gas heater repair in ${suburb} with same-day response. Call 0405 133 761 for urgent assistance.`,
      },
      {
        q: `What brands do you repair in ${suburb}?`,
        a: `We repair all major brands in ${suburb}: Braemar, Rinnai, Brivis, Bonaire, Pyrox, Kaden, and Vulcan.`,
      },
    ],
  };
}
