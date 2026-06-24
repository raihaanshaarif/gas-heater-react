//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import Script from "next/script";
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
    "Rinnai Gas Heater Repair Melbourne | 24/7 Service",
  description:
    "Professional Rinnai gas heater repair, service & installation in Melbourne. Instant heat systems, 24/7 emergency repairs, certified technicians, genuine parts. Call 0405133761 now!",
  canonical: "https://gasheaterservicemelbourne.com.au/brands/rinnai/",
  keywords:
    "Rinnai repair Melbourne, Rinnai gas heater service, Rinnai installation Melbourne, Rinnai maintenance, Rinnai instant heat repair, gas heater repair Melbourne, Rinnai technician Melbourne",
};

//Page Layout
export default function RinnaiPage() {
  return (
    <>
      <Script
        id="rinnai-rating-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            "name": "Rinnai Gas Heater",
            "manufacturer": {
              "@type": "Organization",
              "name": "Rinnai",
              "url": "https://rinnai.com.au"
            },
            "review": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "description": "Professional Rinnai gas heater repair, installation and maintenance services in Melbourne"
          })
        }}
      />
      <PageTitle dataTitle="Rinnai Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What is continuous flow heating?", acceptedAnswer: { "@type": "Answer", text: "Rinnai continuous flow provides hot water on-demand without a storage tank. Water is heated instantly as you use it, saving space and energy compared to traditional storage systems." } },
                { "@type": "Question", name: "What are common Rinnai ignition problems?", acceptedAnswer: { "@type": "Answer", text: "Common ignition issues include no instant heat activation, delayed heating response, or continuous operation failures. Our certified technicians diagnose and repair all Rinnai ignition systems quickly." } },
                { "@type": "Question", name: "Why is my Rinnai making strange noises?", acceptedAnswer: { "@type": "Answer", text: "Grinding, whistling, or banging sounds indicate problems. Common causes: air in pipes, burner scaling, or heat exchanger issues. Call us for diagnosis." } },
                { "@type": "Question", name: "How long does a Rinnai system last?", acceptedAnswer: { "@type": "Answer", text: "Well-maintained Rinnai systems typically last 12-18 years. Some reach 20+ years. Annual servicing is key to longevity." } },
                { "@type": "Question", name: "Can you repair my older Rinnai model?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service all Rinnai models from 10+ years old to latest releases. Our technicians have parts and expertise for every Rinnai generation." } },
                { "@type": "Question", name: "What does an annual Rinnai service include?", acceptedAnswer: { "@type": "Answer", text: "Annual service includes safety inspection, heat exchanger flush, burner cleaning, temperature calibration, pressure testing, and full system check." } }
              ]
            }),
          }}
        />
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="rinnai repair service melbourne"
                  dataTitle="Professional Rinnai Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="rinnai gas heaters melbourne installation service"
                    loading={`eager`}
                  />
                </div>

                <p className={``}>
                  Melbourne&apos;s instant heat specialists for Rinnai gas
                  heater repair and service. Our certified technicians provide
                  24/7 emergency repairs, professional installation,
                  comprehensive maintenance, and expert service for all Rinnai
                  continuous operation heating systems across Melbourne. With
                  genuine parts and same-day service available, we&apos;re your trusted Rinnai repair experts.
                </p>

                <p className="indent__top">
                  Rinnai&apos;s instant heat technology requires specialized
                  expertise. Our emergency repair service operates 24/7 across
                  Melbourne with certified technicians, genuine Rinnai parts,
                  and guaranteed repairs. From ignition problems to continuous
                  operation issues, we keep your Rinnai heating delivering
                  instant warmth.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Rinnai Gas Heater Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Rinnai repair service across Melbourne. No
                      instant heat? Continuous operation problems? We fix it
                      fast with genuine parts.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Instant heat system repairs</li>
                      <li>• Continuous flow troubleshooting</li>
                      <li>• Temperature control fixes</li>
                      <li>• Ignition system repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Rinnai installation by licensed gas fitters with
                      complete system commissioning and instant heat
                      optimization.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed gas fitting</li>
                      <li>• Continuous flow setup</li>
                      <li>• Temperature calibration</li>
                      <li>• Safety testing</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Rinnai maintenance service to ensure
                      continuous operation and prevent unexpected breakdowns.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Heat exchanger cleaning</li>
                      <li>• Continuous flow testing</li>
                      <li>• Temperature sensor calibration</li>
                      <li>• Efficiency optimization</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & Warranty Service
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Rinnai parts and complete warranty repairs for all
                      instant heat and continuous operation systems.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine Rinnai parts</li>
                      <li>• Warranty claim processing</li>
                      <li>• Parts availability guarantee</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Rinnai Gas Heater Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Instant Heat Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• No instant heat activation</li>
                        <li>• Delayed heat response</li>
                        <li>• Temperature fluctuations</li>
                        <li>• Continuous operation problems</li>
                        <li>• Heat exchanger blockages</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        System Performance:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Reduced heating efficiency</li>
                        <li>• Gas consumption issues</li>
                        <li>• Control system malfunctions</li>
                        <li>• Safety sensor problems</li>
                        <li>• Error codes and diagnostics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Rinnai Repair Service - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day emergency repairs</li>
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Certified Rinnai technicians</li>
                        <li>✓ Genuine parts always in stock</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Instant heat specialists</li>
                        <li>✓ 12-month repair warranty</li>
                        <li>✓ Upfront pricing guarantee</li>
                        <li>✓ Senior discounts available</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY RINNAI REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      No instant heat? Continuous operation failed? Call now!
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Rinnai Instant Heat FAQs</h3>
                <div className="space-y-3 my-8">
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What is continuous flow heating?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Rinnai continuous flow (or tankless) heating provides hot water on-demand without a storage tank. Water is heated instantly as you use it, saving space and energy compared to traditional storage systems. Ideal for homes wanting efficiency and unlimited hot water.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What are common Rinnai ignition problems?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Common ignition issues include: no instant heat, delayed heating response, continuous operation failures, or error codes. Our certified technicians have expertise with every Rinnai ignition system and resolve issues quickly. Contact us for same-day diagnosis.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Why is my Rinnai making strange noises?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Rinnai systems may make harmless ignition clicks, but grinding, whistling, or banging sounds indicate problems. Common causes: air in pipes (simple fix), burner scaling, or heat exchanger issues. Don't ignore unusual noises – call us for diagnosis.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How long does a Rinnai system last?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Well-maintained Rinnai continuous flow systems typically last 12-18 years. Some models reach 20+ years. Annual servicing is key to longevity. Regular flushing of the heat exchanger extends system life significantly.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you repair my older Rinnai model?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, we service all Rinnai models from 10+ years old to the latest releases. Even if parts are harder to source, we find solutions. Our technicians have extensive experience with every Rinnai generation.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What does an annual Rinnai service include?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Annual service includes: safety inspection, heat exchanger flush, burner cleaning, temperature calibration, pressure testing, and full system check. Regular servicing prevents breakdowns and maintains efficiency and safety.</p></div>
                  </details>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Rinnai vs Other Brands Comparison</h3>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2 text-left font-bold">Feature</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Rinnai</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Braemar</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Rheem</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Instant Heat</td>
                        <td className="border border-gray-300 p-2">Market leader ✓</td>
                        <td className="border border-gray-300 p-2">Excellent</td>
                        <td className="border border-gray-300 p-2">Good</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Tank-free Systems</td>
                        <td className="border border-gray-300 p-2">Wide range ✓</td>
                        <td className="border border-gray-300 p-2">Limited</td>
                        <td className="border border-gray-300 p-2">Moderate</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Service Availability</td>
                        <td className="border border-gray-300 p-2">Widely available ✓</td>
                        <td className="border border-gray-300 p-2">Available</td>
                        <td className="border border-gray-300 p-2">Available</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Typical Lifespan</td>
                        <td className="border border-gray-300 p-2">12-18 years</td>
                        <td className="border border-gray-300 p-2">15-20 years ✓</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Energy Savings</td>
                        <td className="border border-gray-300 p-2">Excellent ✓</td>
                        <td className="border border-gray-300 p-2">Very Good</td>
                        <td className="border border-gray-300 p-2">Good</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Our Rinnai Service Guarantee</h3>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Professional Repairs</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li>✓ Rinnai certified technicians</li>
                      <li>✓ Genuine Rinnai parts always used</li>
                      <li>✓ Same-day service available</li>
                      <li>✓ 12-month workmanship warranty</li>
                      <li>✓ All repairs tested before handover</li>
                      <li>✓ Free follow-up support included</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-3">Complete Service</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li>✓ Installation by licensed gas fitters</li>
                      <li>✓ Full system commissioning included</li>
                      <li>✓ Annual maintenance programs available</li>
                      <li>✓ Emergency 24/7 response service</li>
                      <li>✓ All Melbourne suburbs covered</li>
                      <li>✓ Customer satisfaction guaranteed</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Advanced Rinnai Troubleshooting</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Rinnai Not Providing Hot Water</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>First check:</strong> Is gas supply on? Are valves open? Is water connected? Check error codes on display panel if present.</p>
                      <p className="text-sm text-yellow-800"><strong>Common causes:</strong> Dirty water filter, airlock, thermistor failure, or ignition module issue. Our technicians diagnose and resolve quickly.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Rinnai Temperature Fluctuates</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Likely cause:</strong> Water filter needs cleaning, thermistor sensor malfunction, or diverter valve issue. Fluctuating temps mean the system is struggling to regulate.</p>
                      <p className="text-sm text-yellow-800"><strong>Solution:</strong> Usually fixable with filter cleaning or sensor replacement. Call for quick diagnosis.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Rinnai Won't Ignite</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Safety first:</strong> Check for gas smell. If yes, don't use – call emergency services. If no gas smell, likely ignition module or electrode issue.</p>
                      <p className="text-sm text-yellow-800"><strong>Action:</strong> We can diagnose via phone call or quick visit. Most ignition issues fixed same-day with part replacement.</p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Get a free Rinnai gas heater quote with professional installation and comprehensive warranty coverage!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={` lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Rinnai Repair Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-red-900 mb-[10px]">
                    Emergency Rinnai Repair
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-red-800">
                    <div>
                      <strong>Available:</strong> 24/7 Every Day
                    </div>
                    <div>
                      <strong>Response:</strong> Same Day Service
                    </div>
                    <div>
                      <strong>Specialty:</strong> Instant Heat Systems
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Warranty:</strong> 12 Months
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Rinnai
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Rinnai Specialists!"
                  dataText="Instant heat experts & certified technicians"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Rinnai Service"}
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
              dataSubtitle="authorized rinnai dealer"
              dataTitle="Melbourne's Trusted Rinnai Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
