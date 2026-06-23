/**
 * FAQ Schema Generator
 * Optimizes for Answer Engine Optimization (AEO)
 * Google 2026 compatibility
 */

export function generateFAQSchema(faqs) {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
}

/**
 * Common Gas Heater FAQs for Melbourne
 */
export const commonGasHeaterFAQs = [
  {
    question: "How long does a gas heater repair typically take in Melbourne?",
    answer:
      "Most gas heater repairs take 1-3 hours depending on the issue. Simple repairs like thermostat adjustments take 30 minutes, while component replacements may take 2-3 hours. We offer same-day emergency service across all Melbourne suburbs, with most emergency calls resolved within 24 hours.",
  },
  {
    question: "Is emergency gas heater repair available in Melbourne?",
    answer:
      "Yes, we provide 24/7 emergency gas heater repair service across all Melbourne suburbs. Emergency calls receive same-day response, with most issues resolved immediately. We dispatch licensed VBA technicians for urgent repairs. Contact our emergency line at 0405 133 761 for immediate assistance.",
  },
  {
    question: "Is my gas heater covered by warranty in Melbourne?",
    answer:
      "Most gas heaters come with 2-5 year manufacturer warranties covering parts but not labor. Our repairs include a 12-month workmanship guarantee. We service all major brands: Braemar, Rinnai, Brivis, Bonaire, Pyrox, Kaden, and Vulcan across Melbourne suburbs.",
  },
  {
    question: "How often should I service my gas heater in Melbourne?",
    answer:
      "We recommend annual gas heater servicing in Melbourne, ideally before winter (April-May). Regular maintenance prevents breakdowns, improves efficiency by 20%, and extends system lifespan. VBA licensed technicians can inspect safety features and identify issues early.",
  },
  {
    question: "What suburbs in Melbourne do you service for gas heater repair?",
    answer:
      "We provide gas heater repair and maintenance services across all 144 Melbourne suburbs including Brighton, Caulfield, St Kilda, South Yarra, Glen Waverley, Essendon, and surrounding areas. We offer same-day emergency service and competitive rates for all suburbs.",
  },
  {
    question: "How do I know if my gas heater needs repair in Melbourne?",
    answer:
      "Signs your gas heater needs repair include: no heat output, strange noises, yellow/sooty flame, gas smell, high fuel bills, or unusual vibrations. Carbon monoxide alarms or safety shutoffs indicate urgent repair needed. Contact our Melbourne technicians for immediate assistance.",
  },
];

/**
 * Service-specific FAQs
 */
export const residentialFAQs = [
  {
    question: "What size gas heater do I need for my Melbourne home?",
    answer:
      "Gas heater size depends on home square footage, insulation, and climate zone. Most Melbourne homes need 40,000-100,000 BTU heaters. A 1500 sq ft home typically needs 60,000 BTU. Our VBA licensed technicians provide free sizing assessments for Melbourne properties.",
  },
  {
    question: "Can I install a gas heater myself or do I need a professional?",
    answer:
      "Gas heater installation must be performed by VBA-licensed technicians in Melbourne. DIY installation voids warranties, risks carbon monoxide leaks, and violates gas safety regulations. We provide professional installation with compliance certification for all Melbourne suburbs.",
  },
];

export const commercialFAQs = [
  {
    question: "What commercial businesses benefit from gas heating in Melbourne?",
    answer:
      "Commercial gas heaters serve offices, retail spaces, warehouses, gyms, hospitals, and manufacturing facilities across Melbourne. Gas heating provides cost-effective climate control for large areas with quick response times.",
  },
  {
    question: "How quickly can you respond to commercial emergency heating failures?",
    answer:
      "We guarantee same-day response to commercial emergency calls across all Melbourne locations. Critical infrastructure (hospitals, aged care) receive priority 2-hour response times. We maintain emergency parts inventory for rapid repairs.",
  },
];

export const emergencyFAQs = [
  {
    question: "What should I do if I smell gas from my heater in Melbourne?",
    answer:
      "If you smell gas: 1) Evacuate immediately, 2) Do not use electrical switches, 3) Call emergency services (000), 4) Call our 24/7 emergency line (0405 133 761). Do not attempt to locate the leak. Our licensed technicians respond within 2 hours across Melbourne.",
  },
  {
    question: "Is my carbon monoxide alarm going off? Should I call emergency services?",
    answer:
      "If your CO alarm sounds: 1) Evacuate immediately, 2) Call 000 (emergency services) first, 3) Then call us (0405 133 761) for heating system inspection. CO leaks are life-threatening. We provide emergency CO testing and repairs 24/7.",
  },
];
