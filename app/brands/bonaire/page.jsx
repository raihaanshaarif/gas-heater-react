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
    "Bonaire Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Bonaire gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, certified technicians, genuine parts. Same-day service available. Call 0405133761 now!",
  keywords:
    "Bonaire repair Melbourne, Bonaire gas heater service, Bonaire installation Melbourne, Bonaire maintenance, Bonaire emergency repair, gas heater repair Melbourne, Bonaire technician Melbourne",
  canonical: "https://gasheaterservicemelbourne.com.au/brands/bonaire/",
};

//Page Layout
export default function BonairePage() {
  return (
    <>
      <PageTitle dataTitle="Bonaire Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Why is Bonaire heating popular in Australia?", acceptedAnswer: { "@type": "Answer", text: "Bonaire is Australian-owned and trusted for decades. Known for reliable, affordable heating with straightforward design, easy maintenance, and good parts availability." } },
                { "@type": "Question", name: "What are common Bonaire heating problems?", acceptedAnswer: { "@type": "Answer", text: "Common issues include pilot light failures, ignition module problems, heat exchanger blockages, and thermostat malfunctions. Our certified technicians have expertise with all Bonaire systems and resolve issues quickly." } },
                { "@type": "Question", name: "Are Bonaire parts easy to find?", acceptedAnswer: { "@type": "Answer", text: "Yes, very. Bonaire is well-supported with parts readily available. We stock common components. Most repairs completed same-day or next-day." } },
                { "@type": "Question", name: "Is my old Bonaire heater still worth repairing?", acceptedAnswer: { "@type": "Answer", text: "Usually yes. Bonaire systems are built tough. If repair cost is under 50% of replacement, repair is best option." } },
                { "@type": "Question", name: "What's the typical lifespan of a Bonaire?", acceptedAnswer: { "@type": "Answer", text: "Bonaire systems typically last 12-18 years with regular maintenance. Some well-maintained units run 20+ years." } },
                { "@type": "Question", name: "Can you help with Bonaire warranty claims?", acceptedAnswer: { "@type": "Answer", text: "Yes. If your Bonaire is under warranty, we'll work with the manufacturer. If warranty expired, we provide transparent pricing." } }
              ]
            }),
          }}
        />
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="bonaire repair service melbourne"
                  dataTitle="Professional Bonaire Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="bonaire gas heater repair service melbourne"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  Melbourne&apos;s leading Bonaire gas heater repair and service
                  specialists. Our certified technicians provide 24/7 emergency
                  repairs, professional installation, comprehensive maintenance,
                  and expert service for all Bonaire gas heater models across
                  Melbourne. With genuine parts, upfront pricing, and same-day
                  service available, we&apos;re your trusted Bonaire repair
                  experts.
                </p>

                <p className="indent__top">
                  Don&apos;t let a broken Bonaire gas heater leave you cold. Our
                  emergency repair service operates 24/7 across all Melbourne
                  suburbs with certified technicians, genuine Bonaire parts, and
                  guaranteed repairs. From urgent breakdowns to scheduled
                  maintenance, we keep your Bonaire heating system running
                  efficiently.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Bonaire Repair Service - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day emergency repairs</li>
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Certified Bonaire technicians</li>
                        <li>✓ Genuine parts always in stock</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Upfront pricing - no surprises</li>
                        <li>✓ 12-month repair warranty</li>
                        <li>✓ Insurance claims assistance</li>
                        <li>✓ Senior discounts available</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY BONAIRE REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      Don&apos;t freeze tonight - call now for immediate
                      assistance
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Bonaire Gas Heater Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Bonaire repair service across Melbourne. No
                      heating? Strange noises? Gas leaks? We fix it fast with
                      genuine parts.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Heat exchanger repairs</li>
                      <li>• Ignition system fixes</li>
                      <li>• Thermostat replacement</li>
                      <li>• Gas valve repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Bonaire installation by licensed gas fitters. Full
                      compliance certificates and manufacturer warranty
                      protection included.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed gas fitting</li>
                      <li>• Ductwork installation</li>
                      <li>• Electrical connections</li>
                      <li>• Safety testing</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Bonaire maintenance service to prevent
                      breakdowns, maintain efficiency, and extend system
                      lifespan.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Complete safety inspection</li>
                      <li>• Cleaning & tune-up</li>
                      <li>• Filter replacement</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & Warranty Service
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Bonaire parts and warranty repairs. We handle all
                      warranty claims and provide authentic replacement
                      components.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine Bonaire parts</li>
                      <li>• Warranty claim processing</li>
                      <li>• Parts availability guarantee</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Bonaire Gas Heater Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Heating Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• No heat or insufficient heating</li>
                        <li>• Uneven heating throughout home</li>
                        <li>• System won&apos;t start or ignite</li>
                        <li>• Frequent cycling on and off</li>
                        <li>• Cold air blowing from vents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Safety & Performance:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Strange noises or vibrations</li>
                        <li>• Gas smell or safety concerns</li>
                        <li>• High energy bills</li>
                        <li>• Pilot light issues</li>
                        <li>• Error codes on display</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Melbourne Areas We Service for Bonaire Repairs
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our certified Bonaire technicians provide repair, service,
                  installation, and maintenance across all Melbourne
                  metropolitan areas. We cover inner Melbourne, eastern suburbs,
                  western suburbs, northern suburbs, southeastern suburbs, and
                  the Mornington Peninsula.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-blue-900 mb-[8px]">
                    Melbourne Suburbs We Cover:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-blue-800">
                    <div>
                      <p className="font-semibold mb-[5px]">Inner Melbourne:</p>
                      <p>
                        Carlton, Fitzroy, South Yarra, Toorak, Richmond,
                        Hawthorn
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">Eastern Suburbs:</p>
                      <p>
                        Box Hill, Glen Waverley, Ringwood, Blackburn, Camberwell
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">All Other Areas:</p>
                      <p>
                        Western, Northern, South Eastern suburbs + Mornington
                        Peninsula
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Bonaire Gas Heater FAQs</h3>
                <div className="space-y-3 my-8">
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Why is Bonaire heating popular in Australia?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Bonaire is an Australian-owned brand trusted for decades. Known for reliable, affordable heating with straightforward design, easy maintenance, and good spare parts availability. Great value for budget-conscious homeowners without compromising quality.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What are common Bonaire heating problems?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Common issues include pilot light failures, ignition module problems, heat exchanger blockages, and thermostat malfunctions. Our certified technicians have expertise with all Bonaire systems and resolve issues quickly.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Are Bonaire parts easy to find?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, very. Bonaire is still well-supported with parts readily available from suppliers. We stock common components like ignition modules, thermostats, and pilots. Most repairs completed same-day or next-day.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Is my old Bonaire heater still worth repairing?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Bonaire systems are built tough with good spare parts availability. Our technicians evaluate your system and provide expert advice on repair vs. replacement based on system age and condition.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What's the typical lifespan of a Bonaire?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Bonaire systems typically last 12-18 years with regular maintenance. Some well-maintained units run 20+ years. Annual servicing and prompt repairs extend system life significantly.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you help with Bonaire warranty claims?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes. If your Bonaire is still under warranty, we'll work with the manufacturer to claim covered repairs. Our licensed technicians handle all warranty paperwork and ensure proper resolution.</p></div>
                  </details>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Bonaire vs Other Brands Comparison</h3>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2 text-left font-bold">Feature</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Bonaire</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Brivis</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Rinnai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Price Point</td>
                        <td className="border border-gray-300 p-2">Budget-friendly ✓</td>
                        <td className="border border-gray-300 p-2">Affordable</td>
                        <td className="border border-gray-300 p-2">Premium</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Australian Made</td>
                        <td className="border border-gray-300 p-2">Originally ✓</td>
                        <td className="border border-gray-300 p-2">No</td>
                        <td className="border border-gray-300 p-2">No</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Repair Cost</td>
                        <td className="border border-gray-300 p-2">Very affordable ✓</td>
                        <td className="border border-gray-300 p-2">Affordable</td>
                        <td className="border border-gray-300 p-2">Higher</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Reliability</td>
                        <td className="border border-gray-300 p-2">Proven ✓</td>
                        <td className="border border-gray-300 p-2">Proven</td>
                        <td className="border border-gray-300 p-2">Excellent</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Spare Parts</td>
                        <td className="border border-gray-300 p-2">Readily available ✓</td>
                        <td className="border border-gray-300 p-2">Available</td>
                        <td className="border border-gray-300 p-2">Available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Bonaire Repair Services</h3>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Common Repairs We Provide</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li><strong>Pilot Light/Ignition Repair</strong></li>
                      <li><strong>Ignition Module Replacement</strong></li>
                      <li><strong>Heat Exchanger Service</strong></li>
                      <li><strong>Thermostat Repair & Replacement</strong></li>
                      <li><strong>Gas Valve Service & Repair</strong></li>
                      <li><strong>24/7 Emergency Service</strong></li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-3">Installation & Maintenance</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li><strong>New System Installation</strong></li>
                      <li><strong>System Replacement Services</strong></li>
                      <li><strong>System Upgrade & Optimization</strong></li>
                      <li><strong>Annual Service & Inspection</strong></li>
                      <li><strong>Burner Inspection & Cleaning</strong></li>
                      <li><strong>Professional,  Licensed Technicians</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Advanced Bonaire Troubleshooting</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Bonaire Pilot Light Issues</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Check:</strong> Pilot flame should be steady, blue cone (1-1.5 inches). If yellow/orange or flickering, pilot orifice needs cleaning.</p>
                      <p className="text-sm text-yellow-800"><strong>Fix needed:</strong> Pilot orifice cleaning or thermocouple inspection. Don't delay – pilot failures prevent heating.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Bonaire Noisy Operation</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Common noises:</strong> Banging, whistling, or grinding usually indicates scale buildup, airlock, or loose components.</p>
                      <p className="text-sm text-yellow-800"><strong>Solution:</strong> Heat exchanger flush or component inspection. Get it checked to prevent damage.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Bonaire Not Reaching Temperature</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>First steps:</strong> Check filter cleanliness, thermostat setting, and whether burner flame is blue.</p>
                      <p className="text-sm text-yellow-800"><strong>If still weak:</strong> May need gas pressure adjustment, burner cleaning, or heat exchanger service. Call us for diagnosis.</p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Emergency Bonaire gas heater repair Melbourne! Available 24/7 with certified technicians, genuine parts, and same-day service. Don't freeze - call now!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Bonaire Repair Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-red-900 mb-[10px]">
                    Emergency Bonaire Repair
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-red-800">
                    <div>
                      <strong>Available:</strong> 24/7 Every Day
                    </div>
                    <div>
                      <strong>Response:</strong> Same Day Service
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Warranty:</strong> 12 Months
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Bonaire
                    </div>
                    <div>
                      <strong>Pricing:</strong> Upfront & Fair
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Bonaire Repair Experts!"
                  dataText="Certified technicians & genuine parts"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Bonaire Service"}
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
              dataSubtitle="melbourne bonaire specialists"
              dataTitle="Professional Bonaire Gas Heater Service Team"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
