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
    "Kaden Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Kaden gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, certified technicians, genuine parts, fast response times. Call 0405133761 now!",
  canonical: "https://gasheaterservicemelbourne.com.au/brands/kaden/",
  keywords:
    "Kaden repair Melbourne, Kaden gas heater service, Kaden installation Melbourne, Kaden maintenance, Kaden smart heating repair, gas heater repair Melbourne, Kaden technician Melbourne",
};

//Page Layout
export default function KadenPage() {
  return (
    <>
      <PageTitle dataTitle="Kaden Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Is Kaden a reliable heating brand?", acceptedAnswer: { "@type": "Answer", text: "Kaden offers good value heating systems with solid reliability record. Budget-focused with straightforward design and durability." } },
                { "@type": "Question", name: "What are common Kaden heater problems?", acceptedAnswer: { "@type": "Answer", text: "Common issues include pilot light failures, thermostat problems, ignition module failure, and gas valve issues. Our certified technicians specialize in Kaden repairs with genuine parts available." } },
                { "@type": "Question", name: "How long will my Kaden system last?", acceptedAnswer: { "@type": "Answer", text: "Properly maintained Kaden systems typically last 10-15 years. Well-cared-for units can reach 18-20 years." } },
                { "@type": "Question", name: "Are Kaden parts available?", acceptedAnswer: { "@type": "Answer", text: "Yes. While Kaden is no longer manufactured, parts remain available. Common components readily sourced." } },
                { "@type": "Question", name: "Should I repair or replace my Kaden?", acceptedAnswer: { "@type": "Answer", text: "If repair cost is under 50% of replacement, repair is worth it. For systems 15+ years old with multiple issues, replacement may be more economical." } },
                { "@type": "Question", name: "Can you service Kaden models?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service all Kaden models. Our technicians have extensive experience and technical knowledge for all models." } }
              ]
            }),
          }}
        />
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="kaden repair service melbourne"
                  dataTitle="Professional Kaden Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="kaden gas heaters melbourne installation service"
                    loading={`eager`}
                  />
                </div>

                <p className={``}>
                  Melbourne&apos;s smart heating specialists for Kaden gas
                  heater repair and service. Our certified technicians provide
                  24/7 emergency repairs, professional installation,
                  comprehensive maintenance, and expert service for all Kaden
                  smart heating systems across Melbourne. With genuine parts,
                  upfront pricing, and same-day service available, we&apos;re
                  your trusted Kaden repair experts.
                </p>

                <p className="indent__top">
                  Kaden&apos;s smart heating technology requires specialized
                  expertise. Our emergency repair service operates 24/7 across
                  Melbourne with certified technicians, genuine Kaden parts, and
                  guaranteed repairs. From smart thermostat issues to complete
                  system breakdowns, we keep your Kaden heating running
                  efficiently.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Kaden Smart Heating Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Smart System Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Kaden smart heating repairs across
                      Melbourne. App not working? Smart thermostat failed? We
                      fix it fast.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Smart thermostat repairs</li>
                      <li>• App connectivity troubleshooting</li>
                      <li>• Energy monitoring system fixes</li>
                      <li>• Compact unit service</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Kaden smart heating installation with complete app
                      setup, smart controls configuration, and user training.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed gas fitting</li>
                      <li>• Smart control setup</li>
                      <li>• App configuration & training</li>
                      <li>• Energy monitoring setup</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Smart System Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Kaden smart heating maintenance including
                      software updates and performance optimization.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Smart system diagnostics</li>
                      <li>• Software updates & calibration</li>
                      <li>• Energy efficiency optimization</li>
                      <li>• App performance testing</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & Smart Support
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Kaden smart heating parts and complete technical
                      support for all smart control systems.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine smart components</li>
                      <li>• Thermostat replacements</li>
                      <li>• App technical support</li>
                      <li>• 10-year warranty service</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Kaden Smart Heating Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Smart Control Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Smart thermostat not responding</li>
                        <li>• App control connectivity problems</li>
                        <li>• Energy monitoring malfunctions</li>
                        <li>• Smart scheduling errors</li>
                        <li>• Temperature sensor failures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        System Performance:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Reduced heating efficiency</li>
                        <li>• Compact unit overheating</li>
                        <li>• Control system software issues</li>
                        <li>• Energy consumption problems</li>
                        <li>• Smart feature malfunctions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Kaden Smart Heating Repair - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day smart heating repairs</li>
                        <li>✓ App troubleshooting experts</li>
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Genuine Kaden parts in stock</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Smart technology specialists</li>
                        <li>✓ 10-year warranty support</li>
                        <li>✓ Energy efficiency experts</li>
                        <li>✓ Upfront pricing guarantee</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY KADEN REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      Smart heating problems? App not working? Call now!
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Kaden Gas Heater FAQs</h3>
                <div className="space-y-3 my-8">
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Is Kaden a reliable heating brand?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Kaden offers reliable heating systems with solid performance. Straightforward design and durability make Kaden a popular choice. Many systems run 15-20 years with proper maintenance.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What are common Kaden heater problems?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Common issues include pilot light failures, thermostat problems, ignition module failure, and gas valve issues. Our certified technicians specialize in Kaden repairs with genuine parts available for same-day service.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How long will my Kaden system last?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Properly maintained Kaden systems typically last 10-15 years. Well-cared-for units can reach 18-20 years. Annual servicing and prompt repairs are key to longevity.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Are Kaden parts available?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes. While Kaden is no longer manufactured, parts remain available through suppliers. Common components like ignition modules and thermostats are readily sourced. We can fix any Kaden system same-day or next-day.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Should I repair or replace my Kaden?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">For systems under 12 years old, repair is usually the best option. For systems 15+ years old with multiple issues, replacement may be necessary. Our technicians provide honest recommendations on repair vs. replacement.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you service Kaden models?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, we service all Kaden models. Our technicians have extensive experience with Kaden systems and maintain technical knowledge for all models. We can diagnose and fix virtually any Kaden heating issue.</p></div>
                  </details>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Kaden vs Other Brands Comparison</h3>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2 text-left font-bold">Feature</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Kaden</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Pyrox</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Brivis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Budget Option</td>
                        <td className="border border-gray-300 p-2">Very affordable ✓</td>
                        <td className="border border-gray-300 p-2">Very affordable</td>
                        <td className="border border-gray-300 p-2">Affordable</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Still Manufactured</td>
                        <td className="border border-gray-300 p-2">No</td>
                        <td className="border border-gray-300 p-2">No</td>
                        <td className="border border-gray-300 p-2">Yes ✓</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Legacy Support</td>
                        <td className="border border-gray-300 p-2">Yes ✓</td>
                        <td className="border border-gray-300 p-2">Yes ✓</td>
                        <td className="border border-gray-300 p-2">N/A</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Repair Affordability</td>
                        <td className="border border-gray-300 p-2">Very good ✓</td>
                        <td className="border border-gray-300 p-2">Very good ✓</td>
                        <td className="border border-gray-300 p-2">Good</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Typical Lifespan</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Kaden Repair Services</h3>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Common Repairs We Handle</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li><strong>Pilot/Ignition Repair</strong></li>
                      <li><strong>Ignition Module Replacement</strong></li>
                      <li><strong>Thermostat Repair & Replacement</strong></li>
                      <li><strong>Gas Valve Service</strong></li>
                      <li><strong>Heat Exchanger Inspection</strong></li>
                      <li><strong>24/7 Emergency Service Available</strong></li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-3">Maintenance Services</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li><strong>Annual Service & Inspection</strong></li>
                      <li><strong>Burner Cleaning & Optimization</strong></li>
                      <li><strong>Filter Replacement Service</strong></li>
                      <li><strong>Safety Inspections</strong></li>
                      <li><strong>System Diagnostics</strong></li>
                      <li><strong>Professional Technicians - All  Licensed</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Advanced Kaden Troubleshooting</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Kaden Won't Light Up</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Check:</strong> Gas supply on? Pilot light on? Try ignition button 5-6 times, wait 30 seconds.</p>
                      <p className="text-sm text-yellow-800"><strong>If still no light:</strong> Ignition module or spark electrode likely faulty ($130-220). Quick diagnosis by phone or visit.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Kaden Pilot Light Keeps Extinguishing</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Common causes:</strong> Dirty orifice, weak thermocouple, or draft problems. Blue flame is normal – yellow/orange means orifice needs cleaning.</p>
                      <p className="text-sm text-yellow-800"><strong>Fix:</strong> Orifice cleaning or thermocouple inspection. Our technicians resolve this promptly.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Kaden Not Heating Properly</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Check first:</strong> Is filter clean? Is burner flame blue? Is thermostat adjusted? Low gas pressure reduces output.</p>
                      <p className="text-sm text-yellow-800"><strong>Service:</strong> Gas pressure adjustment, burner cleaning, or flame adjustment. Call for quick diagnosis.</p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Get a free Kaden gas heater quote with professional installation and comprehensive warranty coverage!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={` lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Kaden Smart Heating Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[10px]">
                    Smart Heating Specialists
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-blue-800">
                    <div>
                      <strong>Available:</strong> 24/7 Emergency
                    </div>
                    <div>
                      <strong>Specialty:</strong> Smart Control Systems
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Warranty:</strong> Up to 10 Years
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Kaden
                    </div>
                    <div>
                      <strong>Support:</strong> App Troubleshooting
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Kaden Specialists!"
                  dataText="Smart heating experts & app support"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Kaden Service"}
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
              dataSubtitle="authorized kaden dealer"
              dataTitle="Melbourne's Trusted Kaden Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
