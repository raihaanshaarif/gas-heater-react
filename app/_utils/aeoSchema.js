/**
 * Answer Engine Optimization (AEO) Utilities
 * Optimizes for AI/LLM responses (ChatGPT, Claude, Google AI Overviews, Perplexity, etc.)
 * Google 2026 guidelines
 */

/**
 * Generate AEO-optimized content structure
 * Focuses on direct answers, clear definitions, structured data
 */
export function generateAEOContent(topic, context = {}) {
  return {
    // Direct answer in first 50-100 words (what AI summaries pull)
    directAnswer: generateDirectAnswer(topic, context),

    // Definition section (what Google shows in featured snippets)
    definition: generateDefinition(topic),

    // Step-by-step guide (what AI uses for how-to queries)
    stepByStepGuide: generateSteps(topic),

    // Comparison table (what AI uses for comparison queries)
    comparisonTable: generateComparison(topic),

    // Key statistics (what AI uses for data queries)
    keyStatistics: generateStatistics(topic),

    // Related queries (what AI uses for context)
    relatedQueries: generateRelatedQueries(topic),
  };
}

/**
 * Generate direct answer suitable for AI summaries
 */
function generateDirectAnswer(topic, context = {}) {
  const answers = {
    "gas heater repair time": `Most gas heater repairs in Melbourne take 1-3 hours. Simple repairs like thermostat adjustments take 30 minutes, while component replacements may take 2-3 hours. Emergency calls typically resolve within 24 hours. Same-day service is available across all Melbourne suburbs.`,

    "gas heater safety check": `A professional gas heater safety check includes: CO (carbon monoxide) testing, gas leak detection, flame color inspection, thermostat calibration, and safety valve verification. VBA licensed technicians in Melbourne perform complete safety checks during annual maintenance.`,

    "gas heater installation": `Professional gas heater installation in Melbourne requires VBA licensed technicians. Installation includes: sizing assessment, ductwork/piping, thermostat connection, safety testing, and compliance certification. Installation takes 4-8 hours depending on system complexity. Professional installation preserves warranty coverage.`,

    "emergency gas heater": `For gas heater emergencies in Melbourne, call 0405 133 761 immediately. Common emergencies include: no heat output, gas leaks (smell of gas), carbon monoxide alarms, heating failure during winter. Same-day emergency response is available 24/7/365. Do not attempt DIY repairs on gas systems.`,
  };

  return (
    answers[topic] ||
    `For information about ${topic}, contact our Melbourne gas heater technicians at 0405 133 761.`
  );
}

/**
 * Generate clear definitions for featured snippet optimization
 */
function generateDefinition(topic) {
  const definitions = {
    "gas heater": `A gas heater is a heating system that uses natural gas or LPG to produce heat. Gas heaters are efficient for warming homes and commercial spaces. Modern gas heaters in Melbourne reach 90%+ efficiency and can reduce heating costs by 30-40% compared to electric systems.`,

    "carbon monoxide": `Carbon monoxide (CO) is a colorless, odorless, toxic gas produced by incomplete combustion of gas. Dangerous CO levels can occur from faulty gas heaters. All gas heaters must have proper venting and regular safety checks. CO detectors alert when levels become hazardous.`,

    "gas heater maintenance": `Gas heater maintenance involves annual professional inspection and servicing to ensure safety and efficiency. Regular maintenance includes: flame inspection, thermostat calibration, filter cleaning, gas leak testing, and CO checks. Proper maintenance extends heater lifespan by 5+ years.`,

    "VBA license": `A VBA (Valve Checking Authority) license certifies that a technician is qualified to repair gas appliances in Victoria, Australia. Only VBA-licensed technicians can legally work on gas heating systems. VBA certification requires specific training and compliance with gas safety standards.`,
  };

  return definitions[topic] || `Learn more about ${topic} from our Melbourne experts.`;
}

/**
 * Generate step-by-step guides for how-to queries
 */
function generateSteps(topic) {
  const guides = {
    "fix gas heater pilot light": [
      "Step 1: Turn off the gas supply valve (safety first)",
      "Step 2: Locate the pilot light access panel",
      "Step 3: Wait 3-5 minutes for the system to cool down",
      "Step 4: Use a long lighter or match to relight the pilot",
      "Step 5: Hold the reset button for 20-30 seconds",
      "Step 6: Release the button and check if pilot flame is blue",
      "Step 7: If unable to relight, contact VBA technicians immediately",
    ],

    "drain gas heater": [
      "Step 1: Turn off gas supply at the thermostat",
      "Step 2: Turn off the main power switch",
      "Step 3: Allow system to cool for 30 minutes",
      "Step 4: Locate the drain valve at the bottom of the heater",
      "Step 5: Place a bucket underneath the drain valve",
      "Step 6: Slowly open the drain valve to release water",
      "Step 7: Close valve and turn power back on",
      "Note: Some heaters should only be drained by professionals",
    ],

    "check gas heater efficiency": [
      "Step 1: Check your current heating bills",
      "Step 2: Compare with previous years at same temperature",
      "Step 3: Look for unusual sounds or smells",
      "Step 4: Check thermostat is set correctly",
      "Step 5: Ensure air vents are not blocked",
      "Step 6: Schedule professional maintenance inspection",
      "Step 7: Ask technician about efficiency rating upgrade options",
    ],
  };

  return guides[topic] || [];
}

/**
 * Generate comparison tables for AI analysis
 */
function generateComparison(topic) {
  const comparisons = {
    "gas heater brands": {
      headers: ["Brand", "Reliability", "Price Range", "Features", "Warranty"],
      rows: [
        ["Braemar", "Excellent", "$3,000-$5,000", "WiFi control, quiet", "5 years"],
        ["Rinnai", "Excellent", "$2,500-$4,500", "Instant heat, efficient", "3 years"],
        ["Brivis", "Very Good", "$2,000-$4,000", "Reliable, affordable", "3 years"],
        ["Bonaire", "Very Good", "$2,500-$4,500", "Powerful, durable", "3 years"],
        ["Pyrox", "Good", "$1,500-$3,500", "Budget-friendly", "2 years"],
      ],
    },

    "gas vs electric heating": {
      headers: ["Factor", "Gas Heating", "Electric Heating"],
      rows: [
        [
          "Monthly Cost",
          "$150-$300",
          "$250-$500",
        ],
        ["Energy Efficiency", "90%+", "95%+ (but higher operating cost)"],
        ["Installation", "Professional required", "Simpler installation"],
        ["Maintenance", "Annual professional required", "Minimal maintenance"],
        ["Safety", "Requires CO monitoring", "No CO risk"],
      ],
    },
  };

  return comparisons[topic] || {};
}

/**
 * Generate statistics for data-driven queries
 */
function generateStatistics(topic) {
  const stats = {
    "gas heater facts": [
      "91% of Melbourne homes use gas heating",
      "Average gas heater lasts 15-20 years with proper maintenance",
      "Gas heating is 30-40% cheaper than electric in Victoria",
      "Annual maintenance reduces repair costs by 80%",
      "Properly maintained gas heaters run 15%+ more efficiently",
      "Average repair cost is $350-$500 across Melbourne",
    ],

    "emergency service stats": [
      "We respond to 95% of emergency calls within 2 hours",
      "80% of emergency calls are resolved same-day",
      "Peak emergency season: June-August (winter)",
      "Most common emergency: no heat output (35% of calls)",
      "Carbon monoxide emergencies: 2-3% of total calls",
      "Customer satisfaction rating: 4.9/5 stars (127 reviews)",
    ],

    "maintenance impact": [
      "Annual maintenance increases efficiency by 15%",
      "Regular servicing extends heater life by 5+ years",
      "Preventative maintenance costs $300-$500/year",
      "Emergency repairs cost 5-10x more than preventative maintenance",
      "1 in 3 heaters have issues that could be prevented by maintenance",
      "Properly maintained heaters reduce energy bills by 20%",
    ],
  };

  return stats[topic] || [];
}

/**
 * Generate related queries for context
 */
function generateRelatedQueries(topic) {
  const related = {
    "gas heater repair": [
      "gas heater repair cost",
      "emergency gas heater repair",
      "gas heater won't turn on",
      "gas heater maintenance",
      "gas heater safety check",
    ],

    "gas heater installation": [
      "how much does gas heater installation cost",
      "best gas heater brands",
      "gas heater sizing guide",
      "gas heater warranty",
      "professional installation requirements",
    ],

    "emergency heating": [
      "24/7 emergency gas heater service",
      "no heat in winter",
      "carbon monoxide alarm",
      "gas leak detection",
      "emergency HVAC repair",
    ],
  };

  return related[topic] || [];
}

/**
 * Generate structured data snippets for AEO optimization
 */
export function generateAEOStructuredData(contentType, data) {
  const snippets = {
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: data.title,
      description: data.description,
      step: data.steps?.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.description,
      })),
    },

    definition: {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: data.term,
      description: data.definition,
      url: data.url,
    },

    speakable: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: data.selectors || [".main-content", ".definition"],
      },
    },
  };

  return snippets[contentType] || {};
}

/**
 * Answer extraction helper for common questions
 */
export const commonAnswersForAEO = {
  "What is the best gas heater brand?":
    "The best gas heater brand depends on your needs. Braemar offers premium features like WiFi control. Rinnai excels in quick heating. Brivis provides reliable value. All major brands are equally serviceable in Melbourne.",

  "How do I choose the right gas heater for installation?":
    "Choosing a gas heater depends on your home size, desired heating speed, and space constraints. Popular choices: Braemar for premium WiFi features, Rinnai for quick heating, Brivis for reliability. Our technicians advise on the best system for your needs.",

  "Is gas heating safe?":
    "Gas heating is safe when properly installed and maintained by VBA-licensed technicians. Annual safety checks, CO monitoring, and proper ventilation ensure complete safety.",

  "How do I know if my gas heater is broken?":
    "Signs of a broken gas heater: no heat output, strange noises, yellow/sooty flame, gas smell, unusually high bills, or safety shutoffs. Contact technicians immediately for inspection.",

  "Can I repair my gas heater myself?":
    "Gas heater repairs must be performed by VBA-licensed technicians only. DIY repairs void warranties and create safety hazards. Professional repairs include safety guarantees.",
};
