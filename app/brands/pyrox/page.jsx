//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import Link from "next/link";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import imageLayout from "../../../public/images/services/services_img03.jpg";

// Metadata
export const metadata = {
  title:
    "Pyrox Gas Heater Repair Melbourne | 24/7 Service",
  description:
    "Professional Pyrox gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, heavy-duty heating specialists, certified technicians, genuine parts. Call 0405133761 now!",
  keywords:
    "Pyrox repair Melbourne, Pyrox gas heater service, Pyrox installation Melbourne, Pyrox maintenance, Pyrox heavy duty repair, gas heater repair Melbourne, Pyrox technician Melbourne",
  canonical: "https://gasheaterservicemelbourne.com.au/brands/pyrox/",
};

//Page Layout
export default function PyroxPage() {
  return (
    <>
      <PageTitle dataTitle="Pyrox Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Is Pyrox a good budget heater?", acceptedAnswer: { "@type": "Answer", text: "Yes, Pyrox offers excellent value for budget-conscious buyers. Reliable, straightforward, and cost-effective to repair." } },
                { "@type": "Question", name: "What are common Pyrox repair issues?", acceptedAnswer: { "@type": "Answer", text: "Common issues include pilot/ignition problems, thermostat failures, gas valve malfunctions, and ignition module issues. Our technicians specialize in Pyrox repairs and resolve issues quickly." } },
                { "@type": "Question", name: "How long should a Pyrox heater last?", acceptedAnswer: { "@type": "Answer", text: "With proper maintenance, Pyrox systems typically last 10-15 years. Some well-maintained units reach 18-20 years." } },
                { "@type": "Question", name: "Are Pyrox parts still available?", acceptedAnswer: { "@type": "Answer", text: "Yes. While Pyrox is no longer manufactured, parts remain available. Common components readily sourced." } },
                { "@type": "Question", name: "When should I replace vs repair my Pyrox?", acceptedAnswer: { "@type": "Answer", text: "For systems under 12 years old, repair is usually best. For systems 15+ years old with multiple issues, replacement may be necessary. Our technicians provide honest recommendations based on system age and condition." } },
                { "@type": "Question", name: "Can you service all Pyrox models?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service all Pyrox models. Our technicians have expertise and maintain technical knowledge for all models." } }
              ]
            }),
          }}
        />
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="pyrox repair service melbourne"
                  dataTitle="Professional Pyrox Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="pyrox gas heaters melbourne installation service"
                    loading={`eager`}
                  />
                </div>

                <p className={``}>
                  Melbourne&apos;s heavy-duty heating specialists for Pyrox gas
                  heater repair and service. Our certified technicians provide
                  24/7 emergency repairs, professional installation,
                  comprehensive maintenance, and expert service for all Pyrox
                  robust heating systems across Melbourne. With genuine parts,
                  upfront pricing, and same-day service available, we&apos;re
                  your trusted Pyrox repair experts.
                </p>

                <p className="indent__top">
                  Pyrox&apos;s heavy-duty construction requires specialized
                  expertise. Our emergency repair service operates 24/7 across
                  Melbourne with certified technicians, genuine Pyrox parts, and
                  guaranteed repairs. From heat exchanger issues to complete
                  system overhauls, we keep your Pyrox heating running at peak
                  performance.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Pyrox Gas Heater Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Pyrox repair service across Melbourne.
                      Heavy-duty system failed? Commercial heating down? We fix
                      it fast.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Heavy-duty heat exchanger repairs</li>
                      <li>• Commercial grade component service</li>
                      <li>• Industrial thermostat replacement</li>
                      <li>• High-capacity system repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Pyrox installation by licensed gas fitters with
                      complete heavy-duty system commissioning and warranty
                      protection.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed commercial gas fitting</li>
                      <li>• Heavy-duty ductwork installation</li>
                      <li>• Industrial electrical connections</li>
                      <li>• Compliance testing & certification</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Pyrox maintenance service for heavy-duty
                      systems to prevent breakdowns and maintain peak
                      performance.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Heavy-duty component inspection</li>
                      <li>• Commercial grade cleaning</li>
                      <li>• Industrial filter replacement</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & Warranty Service
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Pyrox heavy-duty parts and complete warranty
                      service for all commercial and residential applications.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine Pyrox components</li>
                      <li>• Heavy-duty replacement parts</li>
                      <li>• Extended warranty claims</li>
                      <li>• Technical support included</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Pyrox Gas Heater Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Heavy-Duty System Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Reduced heating capacity</li>
                        <li>• Heavy-duty component wear</li>
                        <li>• Commercial thermostat problems</li>
                        <li>• Heat exchanger blockages</li>
                        <li>• Industrial ignition failures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Performance & Efficiency:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• System efficiency decline</li>
                        <li>• Higher gas consumption</li>
                        <li>• Control system malfunctions</li>
                        <li>• Safety sensor problems</li>
                        <li>• Commercial ventilation issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Pyrox Repair Service - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day heavy-duty repairs</li>
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Certified Pyrox technicians</li>
                        <li>✓ Genuine parts guaranteed</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Heavy-duty specialists</li>
                        <li>✓ 20-year warranty support</li>
                        <li>✓ Commercial priority service</li>
                        <li>✓ Upfront pricing guarantee</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY PYROX REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      Heavy-duty heating emergency? Commercial breakdown? Call
                      now!
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Pyrox Gas Heater FAQs</h3>
                <div className="space-y-3 my-8">
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Is Pyrox a good budget heater?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, Pyrox offers excellent value for budget-conscious buyers. While not premium-feature-rich, Pyrox systems are reliable, straightforward to operate, and cost-effective to repair. Great for families looking for dependable heating without premium pricing.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What are common Pyrox repair issues?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Common issues include pilot/ignition problems, thermostat failures, gas valve malfunctions, and ignition module issues. Our technicians specialize in Pyrox repairs and resolve issues quickly.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How long should a Pyrox heater last?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">With proper maintenance, Pyrox systems typically last 10-15 years. Some well-maintained units reach 18-20 years. Annual servicing and prompt repairs significantly extend lifespan.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Are Pyrox parts still available?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes. While Pyrox is no longer manufactured, parts remain available through suppliers. Common components like ignition modules and thermostats are readily sourced. We can typically fix any Pyrox system same-day or next-day.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">When should I replace vs repair my Pyrox?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">For systems under 12 years old, repair is usually best. For systems 15+ years old with multiple issues, replacement may be necessary. Our technicians provide honest recommendations based on system age and condition.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you service all Pyrox models?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, we service all Pyrox models regardless of age. Our technicians have extensive experience with Pyrox systems and maintain knowledge of all models. We can diagnose and fix virtually any Pyrox heating issue.</p></div>
                  </details>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Pyrox vs Other Brands Comparison</h3>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2 text-left font-bold">Feature</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Pyrox</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Bonaire</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Brivis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Price</td>
                        <td className="border border-gray-300 p-2">Very budget ✓</td>
                        <td className="border border-gray-300 p-2">Budget</td>
                        <td className="border border-gray-300 p-2">Affordable</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Still Manufactured</td>
                        <td className="border border-gray-300 p-2">No</td>
                        <td className="border border-gray-300 p-2">Yes ✓</td>
                        <td className="border border-gray-300 p-2">Yes ✓</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Parts Availability</td>
                        <td className="border border-gray-300 p-2">Legacy support ✓</td>
                        <td className="border border-gray-300 p-2">Available</td>
                        <td className="border border-gray-300 p-2">Available</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Repair Cost</td>
                        <td className="border border-gray-300 p-2">Very affordable ✓</td>
                        <td className="border border-gray-300 p-2">Affordable</td>
                        <td className="border border-gray-300 p-2">Affordable</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Typical Lifespan</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                        <td className="border border-gray-300 p-2">12-18 years</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Our Pyrox Service Commitment</h3>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Professional Repairs</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li>✓ Pyrox certified technicians</li>
                      <li>✓ Genuine Pyrox parts</li>
                      <li>✓ Same-day service available</li>
                      <li>✓ Full diagnostic included</li>
                      <li>✓ 12-month warranty on repairs</li>
                      <li>✓ Emergency 24/7 service</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-3">Maintenance Services</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li>✓ Annual service programs</li>
                      <li>✓ Burner cleaning and inspection</li>
                      <li>✓ Safety testing included</li>
                      <li>✓ Filter replacement service</li>
                      <li>✓ Efficiency optimization</li>
                      <li>✓ All Melbourne suburbs covered</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Advanced Pyrox Troubleshooting</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Pyrox Won't Ignite</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Check first:</strong> Is gas supply on? Is pilot light lit? Press ignition button 5-6 times and wait 30 seconds.</p>
                      <p className="text-sm text-yellow-800"><strong>If still won't light:</strong> Likely ignition module or spark electrode issue. Call us for quick diagnosis.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Pyrox Pilot Light Keeps Going Out</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Common causes:</strong> Dirty pilot orifice, weak thermocouple, or draft issues. Check if flame is steady blue – if yellow/orange, needs cleaning.</p>
                      <p className="text-sm text-yellow-800"><strong>Solution:</strong> Orifice cleaning or thermocouple inspection. Our technicians resolve this quickly.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Pyrox Reduced Heating Output</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Check:</strong> Is filter clean? Burner flame blue? Thermostat set correctly? Low gas pressure can cause reduced output.</p>
                      <p className="text-sm text-yellow-800"><strong>Service needed:</strong> Gas pressure adjustment, burner cleaning, or flame electrode inspection. Call for quick diagnosis.</p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Get a free Pyrox gas heater quote with professional installation and comprehensive warranty coverage!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={` lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Pyrox Repair Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-orange-900 mb-[10px]">
                    Heavy-Duty Pyrox Service
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-orange-800">
                    <div>
                      <strong>Available:</strong> 24/7 Emergency
                    </div>
                    <div>
                      <strong>Specialty:</strong> Heavy-Duty Systems
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Warranty:</strong> Up to 20 Years
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Pyrox
                    </div>
                    <div>
                      <strong>Service:</strong> Commercial Priority
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Pyrox Specialists!"
                  dataText="Heavy-duty heating & commercial systems"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Pyrox Service"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="/images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="authorized pyrox dealer"
              dataTitle="Melbourne's Trusted Pyrox Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
