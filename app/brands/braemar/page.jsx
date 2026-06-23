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
    "Braemar Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Braemar gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, WiFi MyClimate support, certified technicians, genuine parts. Call 0405133761 now!",
  keywords:
    "Braemar repair Melbourne, Braemar gas heater service, Braemar installation Melbourne, Braemar maintenance, Braemar MyClimate repair, WiFi heater repair Melbourne, Braemar technician Melbourne",
};

//Page Layout
export default function BraemarPage() {
  return (
    <>
      <PageTitle dataTitle="Braemar Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does MyClimate WiFi mean?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Braemar MyClimate is a WiFi-enabled smart heating control system. You can monitor and adjust your heating remotely via smartphone app, set temperature schedules, and receive alerts from anywhere."
                  }
                },
                {
                  "@type": "Question",
                  name: "How much does Braemar WiFi module repair cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "WiFi Module Repair: $150-250 (diagnostic + repair). WiFi Module Replacement: $300-450 (includes new module + installation + app setup). Emergency after-hours: Add $50-100 callout fee."
                  }
                },
                {
                  "@type": "Question",
                  name: "Why isn't MyClimate app connecting?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common causes: WiFi module offline, network issues, app needs update, WiFi password changed, or module hardware failure. We diagnose the issue quickly and fix it. Most connectivity problems resolved same-day."
                  }
                },
                {
                  "@type": "Question",
                  name: "Can you repair my Braemar if warranty is expired?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, absolutely. We repair all Braemar systems regardless of warranty status. We'll provide transparent pricing upfront. If warranty can still cover parts, we'll help you claim it."
                  }
                },
                {
                  "@type": "Question",
                  name: "What's the lifespan of a Braemar WiFi heating system?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Braemar systems typically last 15-20 years with proper maintenance. WiFi modules may need replacement after 8-10 years. Regular annual servicing extends system life significantly."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you service all Braemar models?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we service all Braemar models including MyClimate WiFi, older non-WiFi models, and commercial systems. Our technicians have expertise with every model."
                  }
                }
              ]
            }),
          }}
        />
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="braemar repair service melbourne"
                  dataTitle="Professional Braemar Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="braemar gas heater repair service melbourne"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  Melbourne&apos;s smart heating specialists for Braemar gas
                  heater repair and service. Our certified technicians provide
                  24/7 emergency repairs, WiFi MyClimate troubleshooting,
                  professional installation, and comprehensive maintenance for
                  all Braemar smart heating systems across Melbourne. Expert
                  service for WiFi-enabled heating with genuine parts and
                  same-day repairs available.
                </p>

                <p className="indent__top">
                  Braemar&apos;s WiFi-enabled MyClimate systems require
                  specialized expertise. Our smart heating technicians provide
                  emergency repair service 24/7 across Melbourne with WiFi
                  troubleshooting, app connectivity fixes, and complete system
                  repairs using genuine Braemar parts and advanced diagnostic
                  tools.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Braemar WiFi Repair Service - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day smart heating repairs</li>
                        <li>✓ WiFi connectivity troubleshooting</li>
                        <li>✓ MyClimate app support</li>
                        <li>✓ Genuine Braemar parts in stock</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Smart heating specialists</li>
                        <li>✓ 12-month repair warranty</li>
                        <li>✓ Upfront pricing guarantee</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY BRAEMAR REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      WiFi heating problems? MyClimate not working? Call now!
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Braemar Smart Heating Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      WiFi & MyClimate Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency WiFi heating repairs across Melbourne. App
                      not connecting? WiFi module failed? We fix smart heating
                      fast.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• WiFi module replacement</li>
                      <li>• MyClimate app troubleshooting</li>
                      <li>• Network connectivity fixes</li>
                      <li>• Smart thermostat repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Braemar smart heating installation with complete
                      WiFi setup, MyClimate configuration, and network
                      optimization.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed gas fitting</li>
                      <li>• WiFi network configuration</li>
                      <li>• MyClimate app setup</li>
                      <li>• Smart control training</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Smart System Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Braemar smart heating maintenance including
                      WiFi diagnostics, software updates, and system
                      optimization.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• WiFi connectivity testing</li>
                      <li>• Software updates</li>
                      <li>• Smart sensor calibration</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & WiFi Support
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Braemar smart heating parts and complete WiFi
                      technical support for all MyClimate systems.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine WiFi modules</li>
                      <li>• Smart thermostat parts</li>
                      <li>• MyClimate technical support</li>
                      <li>• Warranty service</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Braemar Smart Heating Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        WiFi & App Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• MyClimate app won&apos;t connect</li>
                        <li>• WiFi module not responding</li>
                        <li>• Network connectivity problems</li>
                        <li>• App shows system offline</li>
                        <li>• Remote control not working</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Smart System Problems:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Smart thermostat malfunctioning</li>
                        <li>• Temperature scheduling errors</li>
                        <li>• Sensor reading problems</li>
                        <li>• System won&apos;t respond to app</li>
                        <li>• Software update failures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Braemar MyClimate WiFi Troubleshooting Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our smart heating specialists provide comprehensive MyClimate
                  WiFi troubleshooting and repair services across Melbourne.
                  From network connectivity issues to app malfunctions, we
                  diagnose and fix all Braemar smart heating problems with
                  specialized tools and genuine parts.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-blue-900 mb-[8px]">
                    Smart Heating Services:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-blue-800">
                    <div>
                      <p className="font-semibold mb-[5px]">WiFi Repairs:</p>
                      <p>
                        Module replacement, network fixes, connectivity
                        restoration
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">App Support:</p>
                      <p>
                        MyClimate troubleshooting, setup assistance, training
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">Smart Controls:</p>
                      <p>
                        Thermostat repairs, sensor calibration, automation fixes
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Melbourne Areas We Service for Braemar Smart Heating
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our certified Braemar smart heating technicians provide WiFi
                  repair, MyClimate service, installation, and maintenance
                  across all Melbourne metropolitan areas with same-day
                  emergency service available.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-green-900 mb-[8px]">
                    Melbourne Smart Heating Coverage:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-green-800">
                    <div>
                      <p className="font-semibold mb-[5px]">Inner Melbourne:</p>
                      <p>CBD, Carlton, Fitzroy, Richmond, South Yarra</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">Eastern Suburbs:</p>
                      <p>Hawthorn, Glen Waverley, Box Hill, Ringwood</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">All Melbourne:</p>
                      <p>Western, Northern, Southern suburbs + Peninsula</p>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Braemar WiFi Heating FAQs</h3>
                <div className="space-y-3 my-8">
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What does MyClimate WiFi mean?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Braemar MyClimate is a WiFi-enabled smart heating control system. You can monitor and adjust your heating remotely via smartphone app, set temperature schedules, and receive alerts from anywhere. It's a premium feature that provides convenience and energy savings.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How much does Braemar WiFi module repair cost?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700"><strong>WiFi Module Repair:</strong> $150-250 (diagnostic + repair). <strong>WiFi Module Replacement:</strong> $300-450 (includes new module + installation + app setup). <strong>Emergency after-hours:</strong> Add $50-100 callout fee. We provide quotes before work starts.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Why isn't MyClimate app connecting?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Common causes: WiFi module offline, network issues, app needs update, WiFi password changed, or module hardware failure. We diagnose the issue quickly and fix it. Most connectivity problems are resolved same-day with a technician visit or remote support.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you repair my Braemar if warranty is expired?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, absolutely. We repair all Braemar systems regardless of warranty status. We'll provide transparent pricing upfront. If warranty can still cover parts, we'll help you claim it with the manufacturer.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What's the lifespan of a Braemar WiFi heating system?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Braemar heating systems typically last 15-20 years with proper maintenance. WiFi modules may need replacement after 8-10 years. Regular annual servicing extends system life significantly and prevents breakdowns.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Do you service all Braemar models?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, we service all Braemar models including MyClimate WiFi, older non-WiFi models, and commercial systems. Whether it's instant heat, continuous flow, or storage systems, our technicians have expertise with every model.</p></div>
                  </details>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Braemar vs Other Brands Comparison</h3>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2 text-left font-bold">Feature</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Braemar</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Rinnai</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Brivis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">WiFi Control</td>
                        <td className="border border-gray-300 p-2">MyClimate app ✓</td>
                        <td className="border border-gray-300 p-2">Limited options</td>
                        <td className="border border-gray-300 p-2">Basic control</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Smart Scheduling</td>
                        <td className="border border-gray-300 p-2">Advanced ✓</td>
                        <td className="border border-gray-300 p-2">Basic</td>
                        <td className="border border-gray-300 p-2">Basic</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Typical Lifespan</td>
                        <td className="border border-gray-300 p-2">15-20 years ✓</td>
                        <td className="border border-gray-300 p-2">12-18 years</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Energy Efficiency</td>
                        <td className="border border-gray-300 p-2">Excellent ✓</td>
                        <td className="border border-gray-300 p-2">Very Good</td>
                        <td className="border border-gray-300 p-2">Good</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Repair Availability</td>
                        <td className="border border-gray-300 p-2">Widely available ✓</td>
                        <td className="border border-gray-300 p-2">Available</td>
                        <td className="border border-gray-300 p-2">Available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Braemar Repair Costs & Pricing</h3>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Common Repairs</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li><strong>Pilot Light Issue:</strong> $120-180</li>
                      <li><strong>Ignition Module:</strong> $180-280</li>
                      <li><strong>WiFi Module Repair:</strong> $150-250</li>
                      <li><strong>Thermostat Replacement:</strong> $200-350</li>
                      <li><strong>Gas Valve Repair:</strong> $250-400</li>
                      <li><strong>Emergency Callout Fee:</strong> $50-100 (after-hours)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-3">Installation Services</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li><strong>New System Installation:</strong> $1,500-3,000</li>
                      <li><strong>WiFi Module Add-on:</strong> $400-600</li>
                      <li><strong>System Upgrade:</strong> $800-1,500</li>
                      <li><strong>Annual Service:</strong> $150-250</li>
                      <li><strong>Filter/Part Replacement:</strong> $50-150</li>
                      <li><strong>All prices include labor + parts</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Advanced Braemar Troubleshooting</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Braemar Won't Light</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Diagnosis:</strong> Check pilot light (should be steady blue flame). If out, press ignition button 5-6 times. If still out after 30 seconds, stop and call us.</p>
                      <p className="text-sm text-yellow-800"><strong>Common causes:</strong> Dirty pilot orifice, faulty ignition module, or gas supply issue. We fix most within one visit.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">MyClimate App Disconnects Frequently</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>First step:</strong> Restart your WiFi router (turn off 30 seconds, turn back on). Move router closer to heating system if possible.</p>
                      <p className="text-sm text-yellow-800"><strong>If problem persists:</strong> WiFi module may need update or replacement. Our technicians can diagnose and fix remotely or with a visit.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">System Cycles On/Off Constantly</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Likely issues:</strong> Thermostat malfunction, airlock in system, or gas pressure problem. Don't ignore this – it wastes energy and stresses the system.</p>
                      <p className="text-sm text-yellow-800"><strong>Action:</strong> Call us for immediate diagnosis. Most cycling issues are fixable same-day.</p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Emergency Braemar smart heating repair Melbourne! WiFi problems? MyClimate not working? Available 24/7 with smart heating specialists. Call now!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Braemar Smart Heating Services
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
                      <strong>Specialty:</strong> WiFi Heating Systems
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Support:</strong> MyClimate App
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Braemar
                    </div>
                    <div>
                      <strong>Service:</strong> Same Day Available
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Smart Heating Experts!"
                  dataText="WiFi troubleshooting & MyClimate support"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Braemar Service"}
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
              dataSubtitle="melbourne smart heating specialists"
              dataTitle="Professional Braemar WiFi Heating Service Team"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
