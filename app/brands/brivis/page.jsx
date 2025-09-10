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
