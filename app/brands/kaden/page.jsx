//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
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
    "Professional Kaden gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, smart heating specialists, certified technicians, genuine parts. Call 0405133761 now!",
  keywords:
    "Kaden repair Melbourne, Kaden gas heater service, Kaden installation Melbourne, Kaden maintenance, Kaden smart heating repair, gas heater repair Melbourne, Kaden technician Melbourne",
};

//Page Layout
export default function KadenPage() {
  return (
    <>
      <PageTitle dataTitle="Kaden Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
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
