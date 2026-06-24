import PageTitle from "../_components/Common/PageTitle";

export const metadata = {
  title:
    "Gas Water Heater Repair & Installation Melbourne | Same-Day Service | Licensed",
  description:
    "Expert gas water heater repair, service & installation across Melbourne. 24/7 emergency repairs, licensed technicians, no hidden fees. Rinnai, Bosch, Rheem & all brands. Call 0405133761 now!",
  keywords:
    "gas water heater repair melbourne, hot water system repair, gas water heater installation, hot water tank repair, water heater service melbourne, emergency hot water repair",
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au/hot-water-systems/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GasWaterHeaterServices() {
  return (
    <>
      <PageTitle dataTitle="Gas Water Heater Repair & Installation Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What are common gas water heater problems?", acceptedAnswer: { "@type": "Answer", text: "Common issues include: no hot water, pilot light going out, strange noises, leaking tanks, and temperature fluctuations. Our licensed technicians diagnose and fix all water heater problems." } },
                { "@type": "Question", name: "What's the lifespan of a gas water heater?", acceptedAnswer: { "@type": "Answer", text: "Properly maintained units typically last 10-15 years. Some reach 20 years. Regular servicing and prompt repairs extend lifespan significantly." } },
                { "@type": "Question", name: "Can you repair all water heater brands?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service all brands including Rinnai, Bosch, Rheem, Dux, Aqua Max, Thermann, Vulcan, Kaden, Pyrox, Braemar, Brivis, Bonaire, and others." } },
                { "@type": "Question", name: "What's included in water heater installation?", acceptedAnswer: { "@type": "Answer", text: "Full installation includes system selection, gas line installation, electrical connection, safety testing, compliance certification, and complete system check." } },
                { "@type": "Question", name: "Do you provide emergency water heater service?", acceptedAnswer: { "@type": "Answer", text: "Yes, we provide 24/7 emergency service for water heater failures across all Melbourne. Same-day repairs often possible." } },
                { "@type": "Question", name: "When should I replace vs repair my water heater?", acceptedAnswer: { "@type": "Answer", text: "If system is under 12 years old and repair is feasible, repair makes sense. Systems 15+ years old with multiple issues should be replaced. Our technicians provide expert recommendations." } }
              ]
            }),
          }}
        />
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <h2 className="text-2xl font-bold mb-4">Professional Gas Water Heater Repair, Service & Installation</h2>
                <p className="mb-4 text-gray-700">
                  No hot water is more than an inconvenience—it's a serious problem in Melbourne's cold winters. At Gas Heater Service Melbourne, we're experts in gas water heater repair, emergency service, and professional installation. Whether your tank is leaking, your pilot light won't stay lit, or you need a complete system replacement, our licensed  Gas Fitters deliver fast, reliable solutions.
                </p>
                <p className="mb-6 text-gray-700">
                  We service <strong>all major brands</strong>: Rinnai, Bosch, Rheem, Dux, Aqua Max, Thermann, Vulcan, Kaden, Pyrox, Braemar, and Brivis. Available 24/7 for emergencies across all Melbourne suburbs with same-day response in most areas.
                </p>

                <div className="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h3 className="font-bold mb-3">Why Choose Us for Water Heater Service?</h3>
                  <ul className="space-y-2">
                    <li>✓ Licensed  Gas Fitters – All installations meet Victorian safety standards</li>
                    <li>✓ 24/7 Emergency Service – No hot water? We're available day or night</li>
                    <li>✓ Same-Day Response – Most suburbs served within 30–45 minutes</li>
                    <li>✓ Professional Service – Expert technicians on every job</li>
                    <li>✓ All Brands Serviced – Rinnai, Bosch, Rheem, Dux, and all major makes</li>
                    <li>✓ 100% Satisfaction Guarantee – Your satisfaction is our promise</li>
                  </ul>
                </div>

                <div className="my-8">
                  <h3 className="text-xl font-bold mb-4">Common Gas Water Heater Problems We Fix</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-bold mb-2">No Hot Water</h4>
                      <p className="text-sm text-gray-700">Pilot light out, thermostat failure, or sediment buildup. We diagnose and fix quickly.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-bold mb-2">Leaking Tank</h4>
                      <p className="text-sm text-gray-700">Minor leaks may be fixable; major leaks require replacement. We advise on best option.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-bold mb-2">Strange Noises</h4>
                      <p className="text-sm text-gray-700">Popping, hissing, or banging usually means sediment buildup or failing components.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-bold mb-2">Gas Smell / Safety Issues</h4>
                      <p className="text-sm text-gray-700">Never ignore gas odors. This is an emergency. Call immediately: <strong>0405 133 761</strong></p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-bold mb-2">Rust or Corrosion</h4>
                      <p className="text-sm text-gray-700">Visible rust signals age or poor maintenance. Get an inspection soon.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h4 className="font-bold mb-2">Reduced Water Pressure</h4>
                      <p className="text-sm text-gray-700">Mineral deposits or valve issues reduce flow. Flushing often solves this.</p>
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <h3 className="text-xl font-bold mb-4">Water Heater Installation Options</h3>
                  <p className="mb-4 text-gray-700">
                    Choosing the right system for your Melbourne home depends on your hot water needs, space, and budget. We help you compare options:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span><strong>Storage Tank Systems:</strong> Most common. Tank maintains hot water; efficient for families.</span></li>
                    <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span><strong>Instant (Tankless) Systems:</strong> Compact, energy-efficient. Lower operating costs but higher upfront price.</span></li>
                    <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span><strong>Solar-Assisted Systems:</strong> Lower running costs; government rebates available.</span></li>
                    <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span><strong>Heat Pump Systems:</strong> Ultra-efficient; ideal for homes with space.</span></li>
                  </ul>
                </div>

                <div className="my-8">
                  <h3 className="text-xl font-bold mb-4">Our Installation Process</h3>
                  <ol className="space-y-2">
                    <li><strong>1. Site Assessment:</strong> We inspect your home and recommend the right system for your needs.</li>
                    <li><strong>2. System Selection:</strong> We compare options, pricing, and provide a transparent quote.</li>
                    <li><strong>3. Schedule Installation:</strong> We work around your schedule for minimal disruption.</li>
                    <li><strong>4. Professional Installation:</strong> Licensed  Fitters handle the complete installation safely.</li>
                    <li><strong>5. Testing & Compliance:</strong> We test the system and issue your Certificate of Compliance.</li>
                    <li><strong>6. Handover & Warranty:</strong> We explain operation and warranty coverage.</li>
                  </ol>
                </div>

                <div className="my-8">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What signs indicate water heater repair is needed?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Watch for: lukewarm or no hot water, strange noises (popping/banging), water leaks around the tank, rust stains, and gas smell. Any of these warrant professional inspection. Never ignore gas leaks or odors.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What are signs my gas hot water system needs repair?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Watch for: lukewarm or no hot water, strange noises (popping/banging), water leaks around the tank, rust stains, and gas smell. Any of these warrant professional inspection. Never ignore gas leaks or odors.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How often should I service my gas water heater?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Energy Safe Victoria recommends annual servicing. Regular maintenance extends system life, improves efficiency (saving money), and catches issues early before they become expensive emergencies.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can I replace my gas water heater myself?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">No. Gas water heater installation requires a licensed  Gas Fitter in Victoria. Improper installation creates gas leak risks and voids warranties. We handle it professionally.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What's the average lifespan of a gas water heater?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Most gas water heaters last 8–12 years with proper maintenance. After 10 years, repairs become frequent and expensive. If repair costs exceed replacement cost, upgrading is often smarter.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What brands of gas water heaters do you service?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">We service and install all major brands: Rinnai, Bosch, Rheem, Dux, Aqua Max, Thermann, Vulcan, Kaden, Pyrox, Braemar, Brivis, and more.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Is my water heater repair covered by warranty?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Most repairs are covered under 1–5 year warranties if properly installed and maintained. We'll check your warranty before starting work and maximize coverage.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How long does a gas water heater repair take?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Most repairs take 1–2 hours. Full tank replacements take 2–4 hours. We provide time estimates on arrival and update you throughout the job.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Do you offer emergency gas water heater repairs?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Absolutely—24/7 emergency service available. Call <strong>0405 133 761</strong> anytime. Same-day service in most Melbourne suburbs.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What's the difference between gas and electric water heaters?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Gas heaters are faster and reliable with lower operating efficiency. Electric heaters are simpler but slower at heating. Both have their advantages depending on your home setup and needs.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What factors should I consider when choosing a gas water heater?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Consider: household size (affects capacity), energy efficiency, brand reputation, available space, and gas supply configuration. Our technicians provide expert advice on the best system for your needs.</p></div>
                    </details>
                    <details className="group border border-gray-300 rounded-lg">
                      <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you install a water heater in my apartment?<span className="text-xl">+</span></summary>
                      <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, if your apartment has gas supply and ventilation. Body corporate approval may be needed. We handle permits, installation, compliance, and all paperwork with strata.</p></div>
                    </details>
                  </div>
                </div>

                <div className="my-8 p-6 bg-green-50 border border-green-200 rounded">
                  <h3 className="text-xl font-bold mb-3">Service Area – All Melbourne Suburbs</h3>
                  <p className="text-gray-700 mb-3">
                    We service all Melbourne suburbs and surrounding areas. Same-day response available in metro areas. Serving from the CBD, Eastern suburbs (Rosanna, Cranbourne, Ferntree Gully), Western suburbs (Sunshine, Hoppers Crossing, Keilor), Southern suburbs (Frankston, Seaford, Sandringham), Northern suburbs (Bundoora, Epping, Greensborough), and beyond.
                  </p>
                  <p className="font-semibold text-blue-600 text-lg">
                    📞 Call for emergency service: <strong>0405 133 761</strong>
                  </p>
                </div>
              </div>

              <aside className="lg:basis-1/3 md:basis-5/12">
                <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3">Get Help Now</h3>
                  <p className="mb-4">No hot water or emergency? Call for immediate assistance:</p>
                  <p className="text-2xl font-bold mb-4">0405 133 761</p>
                  <p className="text-sm">Available 24/7 for emergencies across all Melbourne suburbs.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">Why Gas Heater Service Melbourne?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Licensed  technicians</li>
                    <li>✓ 15+ years experience</li>
                    <li>✓ All brands serviced</li>
                    <li>✓ Transparent pricing</li>
                    <li>✓ Same-day available</li>
                    <li>✓ Warranty honored</li>
                    <li>✓ Guaranteed satisfaction</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
