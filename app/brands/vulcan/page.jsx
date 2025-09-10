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
    "Vulcan Gas Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Vulcan gas heater repair, service & installation in Melbourne. 24/7 emergency repairs, commercial heating specialists, certified technicians, genuine parts. Call 0405133761 now!",
  keywords:
    "Vulcan repair Melbourne, Vulcan gas heater service, Vulcan installation Melbourne, Vulcan maintenance, Vulcan commercial repair, industrial heater repair Melbourne, Vulcan technician Melbourne",
};

//Page Layout
export default function VulcanPage() {
  return (
    <>
      <PageTitle dataTitle="Vulcan Gas Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="vulcan repair service melbourne"
                  dataTitle="Professional Vulcan Gas Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="vulcan gas heater repair service melbourne"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  Melbourne&apos;s commercial and industrial heating specialists
                  for Vulcan gas heater repair and service. Our certified
                  technicians provide 24/7 emergency repairs, professional
                  installation, comprehensive maintenance, and expert service
                  for all Vulcan heavy-duty heating systems across Melbourne.
                  Specializing in commercial applications with genuine parts and
                  same-day service.
                </p>

                <p className="indent__top">
                  Vulcan&apos;s robust commercial heating systems require
                  specialized expertise. Our industrial heating technicians
                  provide emergency repair service 24/7 across Melbourne with
                  heavy-duty repairs, commercial installations, and complete
                  system maintenance using genuine Vulcan parts and
                  professional-grade tools.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Vulcan Commercial Repair Service - Available
                    24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day commercial repairs</li>
                        <li>✓ Industrial heating specialists</li>
                        <li>✓ Heavy-duty system expertise</li>
                        <li>✓ Genuine Vulcan parts in stock</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ All Melbourne commercial areas</li>
                        <li>✓ Licensed commercial technicians</li>
                        <li>✓ 12-month repair warranty</li>
                        <li>✓ Emergency business priority</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY VULCAN REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      Commercial heating emergency? Business priority service!
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Vulcan Commercial Heating Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Emergency Commercial Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Vulcan commercial heating repairs across
                      Melbourne. Business heating failed? Industrial system
                      down? We respond fast.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Heavy-duty heat exchanger repairs</li>
                      <li>• Commercial gas valve service</li>
                      <li>• Industrial ignition systems</li>
                      <li>• High-capacity system repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Commercial Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Vulcan commercial heating installation by licensed
                      commercial gas fitters with full compliance certification.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed commercial gas fitting</li>
                      <li>• Industrial ductwork design</li>
                      <li>• Commercial electrical connections</li>
                      <li>• Compliance testing & certification</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Commercial Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Vulcan commercial heating maintenance
                      programs to minimize downtime and maintain peak
                      performance.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Scheduled commercial service</li>
                      <li>• Preventive maintenance programs</li>
                      <li>• Heavy-duty system cleaning</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Commercial Parts & Support
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Vulcan commercial heating parts and complete
                      technical support for all industrial heating applications.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine Vulcan components</li>
                      <li>• Heavy-duty replacement parts</li>
                      <li>• Commercial warranty service</li>
                      <li>• Technical support & training</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Vulcan Commercial Heating Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Commercial System Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Inadequate heating capacity</li>
                        <li>• Commercial ignition failures</li>
                        <li>• Heavy-duty component wear</li>
                        <li>• Industrial thermostat problems</li>
                        <li>• High-volume airflow issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Industrial Performance:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• System efficiency decline</li>
                        <li>• Commercial gas consumption issues</li>
                        <li>• Heavy-duty motor problems</li>
                        <li>• Industrial control malfunctions</li>
                        <li>• Commercial safety concerns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Vulcan Commercial & Industrial Applications Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our commercial heating specialists service Vulcan systems
                  across all Melbourne business and industrial applications.
                  From office buildings to warehouses, factories to retail
                  spaces, we provide expert Vulcan heating service with minimal
                  business disruption.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-orange-900 mb-[8px]">
                    Commercial Applications We Service:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-orange-800">
                    <div>
                      <p className="font-semibold mb-[5px]">
                        Office Buildings:
                      </p>
                      <p>
                        Commercial towers, corporate offices, business centers
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">
                        Industrial Sites:
                      </p>
                      <p>Warehouses, factories, manufacturing facilities</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">
                        Retail & Hospitality:
                      </p>
                      <p>Shopping centers, restaurants, hotels, venues</p>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Melbourne Areas We Service for Vulcan Commercial Repairs
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our certified Vulcan commercial heating technicians provide
                  repair, service, installation, and maintenance across all
                  Melbourne commercial and industrial areas with priority
                  emergency service for business continuity.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-red-900 mb-[8px]">
                    Commercial Service Coverage:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-red-800">
                    <div>
                      <p className="font-semibold mb-[5px]">
                        CBD & Inner City:
                      </p>
                      <p>Melbourne CBD, South Melbourne, Richmond</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">
                        Industrial Areas:
                      </p>
                      <p>West Melbourne, Port Melbourne, Dandenong</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">All Melbourne:</p>
                      <p>
                        Commercial districts, industrial estates, business parks
                      </p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Emergency Vulcan commercial heating repair Melbourne! Business priority service with heavy-duty specialists. Available 24/7 for commercial applications. Call now!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Vulcan Commercial Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-orange-900 mb-[10px]">
                    Commercial Heating Specialists
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-orange-800">
                    <div>
                      <strong>Available:</strong> 24/7 Business Priority
                    </div>
                    <div>
                      <strong>Specialty:</strong> Heavy-Duty Systems
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne Commercial
                    </div>
                    <div>
                      <strong>License:</strong> Commercial Gas Fitting
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Vulcan
                    </div>
                    <div>
                      <strong>Service:</strong> Same Day Emergency
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Commercial Experts!"
                  dataText="Heavy-duty systems & industrial heating"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Vulcan Service"}
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
              dataSubtitle="melbourne commercial heating specialists"
              dataTitle="Professional Vulcan Industrial Heating Service Team"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
