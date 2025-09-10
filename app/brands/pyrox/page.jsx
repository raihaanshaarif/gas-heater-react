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
    "Pyrox Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Pyrox gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, heavy-duty heating specialists, certified technicians, genuine parts. Call 0405133761 now!",
  keywords:
    "Pyrox repair Melbourne, Pyrox gas heater service, Pyrox installation Melbourne, Pyrox maintenance, Pyrox heavy duty repair, gas heater repair Melbourne, Pyrox technician Melbourne",
};

//Page Layout
export default function PyroxPage() {
  return (
    <>
      <PageTitle dataTitle="Pyrox Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
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
