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
    "Brivis Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Brivis gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, certified technicians, genuine parts. Reliable heating service. Call 0405133761 now!",
  keywords:
    "Brivis repair Melbourne, Brivis gas heater service, Brivis installation Melbourne, Brivis maintenance, Brivis emergency repair, gas heater repair Melbourne, Brivis technician Melbourne",
};

//Page Layout
export default function BrivisPage() {
  return (
    <>
      <PageTitle dataTitle="Brivis Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="brivis repair service melbourne"
                  dataTitle="Professional Brivis Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="brivis gas heater repair service melbourne"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  Melbourne&apos;s trusted Brivis gas heater repair and service
                  specialists. Our certified technicians provide 24/7 emergency
                  repairs, professional installation, comprehensive maintenance,
                  and expert service for all Brivis gas heater models across
                  Melbourne. With over 30 years of Brivis expertise, genuine
                  parts, and reliable service, we keep your heating running
                  smoothly.
                </p>

                <p className="indent__top">
                  Brivis gas heaters are known for their reliability, but when
                  they need service, trust the experts. Our emergency repair
                  service operates 24/7 across Melbourne with certified
                  technicians, genuine Brivis parts, and guaranteed repairs.
                  From pilot light issues to complete system overhauls, we
                  service it all.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Brivis Repair Service - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day emergency repairs</li>
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Certified Brivis technicians</li>
                        <li>✓ Genuine parts guaranteed</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ 30+ years Brivis experience</li>
                        <li>✓ 12-month repair warranty</li>
                        <li>✓ Upfront pricing guarantee</li>
                        <li>✓ Senior citizen discounts</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY BRIVIS REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      Heating emergency? Don&apos;t wait - call now for
                      immediate help
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Brivis Gas Heater Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Brivis repair service across Melbourne. No
                      heat? Pilot light out? Strange noises? We diagnose and fix
                      fast.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Pilot light & ignition repairs</li>
                      <li>• Heat exchanger service</li>
                      <li>• Thermostat replacements</li>
                      <li>• Gas valve repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Brivis installation by licensed gas fitters.
                      Complete system setup with full compliance and warranty
                      protection.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed gas fitting service</li>
                      <li>• Ductwork design & installation</li>
                      <li>• Electrical connections</li>
                      <li>• Safety testing & certification</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Brivis maintenance service to keep your
                      system running efficiently and prevent unexpected
                      breakdowns.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Complete safety inspection</li>
                      <li>• Burner cleaning & adjustment</li>
                      <li>• Filter replacement service</li>
                      <li>• Performance efficiency testing</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & Warranty Service
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Brivis parts and complete warranty service. We
                      handle all warranty claims and provide authentic
                      replacement parts.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine Brivis components</li>
                      <li>• Warranty claim assistance</li>
                      <li>• Parts availability guarantee</li>
                      <li>• Technical support included</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Brivis Gas Heater Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Heating & Ignition Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Pilot light won&apos;t stay lit</li>
                        <li>• No ignition or delayed start</li>
                        <li>• Insufficient heating output</li>
                        <li>• Uneven heating throughout home</li>
                        <li>• System cycling on and off</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Performance & Safety:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Strange noises during operation</li>
                        <li>• Gas smells or safety concerns</li>
                        <li>• Higher than normal gas bills</li>
                        <li>• Thermostat not responding</li>
                        <li>• Continuous pilot maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Brivis Continuous Pilot & Electronic Ignition Service
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Brivis gas heaters feature both continuous pilot and
                  electronic ignition systems. Our technicians are experts in
                  servicing both types, from traditional pilot light maintenance
                  to modern electronic ignition troubleshooting and repair
                  across all Brivis models.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-green-900 mb-[8px]">
                    Brivis System Types We Service:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-green-800">
                    <div>
                      <p className="font-semibold mb-[5px]">
                        Continuous Pilot:
                      </p>
                      <p>
                        Traditional systems, pilot light service, gas valve
                        repairs
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">
                        Electronic Ignition:
                      </p>
                      <p>
                        Modern systems, ignition board repairs, sensor service
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">All Models:</p>
                      <p>Classic, Modern, Compact & Commercial Brivis units</p>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Melbourne Areas We Service for Brivis Repairs
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our certified Brivis technicians provide repair, service,
                  installation, and maintenance across all Melbourne
                  metropolitan areas with same-day service available for
                  emergency heating repairs.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-blue-900 mb-[8px]">
                    Melbourne Brivis Service Coverage:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-blue-800">
                    <div>
                      <p className="font-semibold mb-[5px]">Inner Melbourne:</p>
                      <p>CBD, Carlton, Fitzroy, Richmond, South Melbourne</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">Eastern Suburbs:</p>
                      <p>Hawthorn, Camberwell, Glen Waverley, Box Hill</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">All Melbourne:</p>
                      <p>Western, Northern, Southern suburbs + Peninsula</p>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Brivis Gas Heater FAQs</h3>
                <div className="space-y-3 my-8">
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What makes Brivis heaters reliable?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Brivis has decades of reputation for durable, cost-effective heating systems. Their robust build quality, proven ignition systems, and straightforward design make them one of Australia's most reliable brands. Many Brivis systems run 20+ years with proper maintenance.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">How much does Brivis repair typically cost?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700"><strong>Pilot Light/Ignition:</strong> $120-220. <strong>Heat Exchanger Service:</strong> $150-250. <strong>Thermostat:</strong> $150-280. <strong>Gas Valve:</strong> $200-350. <strong>Emergency after-hours:</strong> +$50-100. We always quote before starting work.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Is my old Brivis still worth repairing?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Usually yes. Brivis systems are built to last, and parts are affordable. If repair cost is less than 50% of replacement, repair is typically worthwhile. We'll advise honestly on repair vs. replacement options.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Do you have genuine Brivis parts in stock?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes. We stock common Brivis parts including ignition modules, thermostats, gas valves, and thermistors. For less common components, we order from suppliers with typical 24-48 hour delivery. Emergency repairs often completed same-day.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">What's included in annual Brivis service?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Annual service includes: Safety inspection, ignition check, heat exchanger cleaning, burner inspection, gas pressure test, temperature calibration, and full system checkout. Cost: $120-200. Extends system life and prevents failures.</p></div>
                  </details>
                  <details className="group border border-gray-300 rounded-lg">
                    <summary className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center">Can you install a new Brivis system?<span className="text-xl">+</span></summary>
                    <div className="p-4 bg-white border-t border-gray-300"><p className="text-gray-700">Yes, we're licensed to install Brivis systems. Full installation includes: system selection, ductwork design, gas line installation, electrical connection, safety testing, and compliance certification. We guide you on the right system for your home size and budget.</p></div>
                  </details>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Brivis vs Other Brands Comparison</h3>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 p-2 text-left font-bold">Feature</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Brivis</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Rinnai</th>
                        <th className="border border-gray-300 p-2 text-left font-bold">Braemar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Price</td>
                        <td className="border border-gray-300 p-2">Most affordable ✓</td>
                        <td className="border border-gray-300 p-2">Higher</td>
                        <td className="border border-gray-300 p-2">Mid-range</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Reliability</td>
                        <td className="border border-gray-300 p-2">Proven track record ✓</td>
                        <td className="border border-gray-300 p-2">Excellent</td>
                        <td className="border border-gray-300 p-2">Excellent</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Service Parts Cost</td>
                        <td className="border border-gray-300 p-2">Budget-friendly ✓</td>
                        <td className="border border-gray-300 p-2">Moderate</td>
                        <td className="border border-gray-300 p-2">Moderate</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Typical Lifespan</td>
                        <td className="border border-gray-300 p-2">10-15 years</td>
                        <td className="border border-gray-300 p-2">12-18 years</td>
                        <td className="border border-gray-300 p-2">15-20 years ✓</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 font-semibold">Parts Availability</td>
                        <td className="border border-gray-300 p-2">Easy to find ✓</td>
                        <td className="border border-gray-300 p-2">Available</td>
                        <td className="border border-gray-300 p-2">Available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Brivis Repair Costs & Pricing</h3>
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-3">Common Repairs</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li><strong>Pilot Light/Ignition:</strong> $120-220</li>
                      <li><strong>Ignition Module:</strong> $150-250</li>
                      <li><strong>Heat Exchanger Service:</strong> $150-250</li>
                      <li><strong>Thermostat Replacement:</strong> $150-280</li>
                      <li><strong>Gas Valve Repair:</strong> $200-350</li>
                      <li><strong>Emergency Callout:</strong> $50-100 (after-hours)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-3">Installation Services</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li><strong>New System Installation:</strong> $1,200-2,200</li>
                      <li><strong>System Replacement:</strong> $1,500-2,500</li>
                      <li><strong>System Upgrade:</strong> $800-1,400</li>
                      <li><strong>Annual Service:</strong> $120-200</li>
                      <li><strong>Burner Cleaning:</strong> $80-150</li>
                      <li><strong>All prices include labor + parts</strong></li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">Advanced Brivis Troubleshooting</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Brivis Pilot Light Won't Stay Lit</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Common causes:</strong> Dirty pilot orifice, faulty thermocouple, or weak ignition spark. Check if flame is steady blue – if it's yellow/orange, orifice needs cleaning.</p>
                      <p className="text-sm text-yellow-800"><strong>Action:</strong> We clean the orifice or replace thermocouple. Usually $120-180. Don't let this persist – it prevents heating.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Brivis Making Whistling or Whistling Sound</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>This indicates:</strong> Air in the heat exchanger, scale buildup, or airlock in gas line. Not an emergency but needs attention soon.</p>
                      <p className="text-sm text-yellow-800"><strong>Solution:</strong> Heat exchanger flush or airlock bleed. Cost $80-150. Prevents reduced heating efficiency.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Brivis Not Heating Enough</h4>
                      <p className="text-sm text-yellow-800 mb-2"><strong>Check first:</strong> Is thermostat set correctly? Is air filter clean? Is burner flame blue (not orange)?</p>
                      <p className="text-sm text-yellow-800"><strong>If still weak:</strong> Heat exchanger may need cleaning or burner adjustment. Call us for quick diagnosis – usually a simple service ($80-150).</p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Emergency Brivis gas heater repair Melbourne! Reliable service with 30+ years experience. Available 24/7 with certified technicians and genuine parts. Call now!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Brivis Repair Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-green-900 mb-[10px]">
                    Reliable Brivis Service
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-green-800">
                    <div>
                      <strong>Available:</strong> 24/7 Emergency
                    </div>
                    <div>
                      <strong>Experience:</strong> 30+ Years
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Warranty:</strong> 12 Months
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Brivis
                    </div>
                    <div>
                      <strong>Service:</strong> Same Day Available
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Brivis Specialists!"
                  dataText="30+ years reliable heating service"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Brivis Service"}
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
              dataSubtitle="melbourne brivis specialists"
              dataTitle="Professional Brivis Gas Heater Service Team"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
