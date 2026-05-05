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
    "Rinnai Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Rinnai gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, instant heat specialists, certified technicians, genuine parts. Call 0405133761 now!",
  keywords:
    "Rinnai repair Melbourne, Rinnai gas heater service, Rinnai installation Melbourne, Rinnai maintenance, Rinnai instant heat repair, gas heater repair Melbourne, Rinnai technician Melbourne",
};

//Page Layout
export default function RinnaiPage() {
  return (
    <>
      <PageTitle dataTitle="Rinnai Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
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
                  genuine parts, upfront pricing, and same-day service
                  available, we&apos;re your trusted Rinnai repair experts.
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
