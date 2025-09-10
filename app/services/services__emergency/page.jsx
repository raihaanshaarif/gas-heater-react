//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import FormAside from "../../_components/ServicesSubPages/FormAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { EmergencyListData } from "../../_components/ServicesEmergency/EmergencyListData";
import imageLayout from "../../../public/images/services/services_img02.jpg";

export const metadata = {
  title:
    "Emergency Gas Heater Repair Melbourne | 24/7 Service | Call 0405133761",
  description:
    "🚨 Emergency Gas Heater Repair Melbourne - 24/7 Service Available! Gas leaks, heating failures, carbon monoxide alarms. Same-day emergency response. Call 0405133761 now!",
  keywords:
    "emergency gas heater repair melbourne, 24/7 gas heater repair, gas leak repair melbourne, emergency heating service, carbon monoxide alarm response, urgent gas heater repairs, no heating emergency melbourne",
  alternates: {
    canonical:
      "https://gasheaterservicemelbourne.com.au/services/services__emergency",
  },
};

//Page Layout
export default function ServicesEmergency() {
  return (
    <>
      <PageTitle dataTitle="Emergency Gas Heater Services" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency services"
                  dataTitle="24/7 Emergency Gas Heater Services Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    loading={`eager`}
                    alt="emergency gas heater services"
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your gas heater breaks down unexpectedly, you need
                  immediate professional help. Our certified gas technicians are
                  available 24/7 to handle all types of gas heating emergencies
                  across Melbourne. From complete heating failures to dangerous
                  gas leaks, we provide rapid response emergency services to
                  keep your family safe and warm.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  No Heating Emergencies
                </h4>
                <p>
                  A broken gas heater in the middle of winter can be more than
                  just uncomfortable - it can be dangerous for vulnerable family
                  members. Our emergency technicians respond quickly to restore
                  heating in your home, diagnosing and repairing faults in
                  ducted gas systems, wall furnaces, and central heating units.
                  We carry common replacement parts to get your heating working
                  the same day.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Gas Leak Detection & Emergency Repairs
                </h4>
                <p>
                  Gas leaks are serious safety hazards that require immediate
                  professional attention. Our emergency gas technicians use
                  advanced leak detection equipment to quickly locate and safely
                  repair gas leaks in heating systems. We respond within the
                  hour to gas leak emergencies and work with your gas utility
                  company to ensure your property is safe before restoring gas
                  supply.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Carbon Monoxide Alarm Response
                </h4>
                <p>
                  If your carbon monoxide alarm has activated, don&apos;t ignore
                  it. Our emergency technicians provide immediate response to
                  carbon monoxide alarms, conducting thorough safety inspections
                  of your gas heating system. We identify the source of carbon
                  monoxide and perform necessary repairs to ensure your
                  family&apos;s safety.
                </p>
                <p className="indent__top">
                  Carbon monoxide is a silent killer. Our certified technicians
                  carry professional CO detection equipment and follow strict
                  safety protocols to identify leaks, test flue systems, and
                  verify proper ventilation. We won&apos;t leave until your home
                  is safe.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Urgent Gas Heater Repairs
                </h4>
                <p>
                  When your gas heater stops working, our emergency repair
                  service gets you warm again fast. We handle pilot light
                  failures, faulty thermostats, ignition problems, and heating
                  system breakdowns. Our technicians are equipped with
                  diagnostic tools and common spare parts to complete most
                  repairs on the spot.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Emergency Gas Heater Shutdowns
                </h4>
                <p>
                  Sometimes a gas heater needs to be safely shut down
                  immediately due to safety concerns. Our emergency technicians
                  can safely isolate faulty gas heating equipment, conduct
                  safety assessments, and provide temporary heating solutions
                  while permanent repairs are arranged.
                </p>
                <PromoLayout
                  dataText="Don't risk your family's safety with gas heating emergencies. Call our 24/7 emergency gas technicians now for immediate assistance!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Emergency Services</div>
                  <div className={`${styles.aside__content}`}>
                    <ServicesListAside dataList={EmergencyListData} />
                  </div>
                </div>
                <div>
                  <div className={`ttsubtitle`}>Ask Question</div>
                  <div className={`${styles.aside__content}`}>
                    <FormAside />
                  </div>
                </div>
                <PromoAside
                  dataTitle="Emergency Gas Technician!"
                  dataText="24/7 Emergency Response Available"
                  dataTelefon="0405133761"
                />
                <BoxListAside
                  dataTitle={"6 Different Reasons \n You Should Hire Us"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="../images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="we work with"
              dataTitle="Our Partners"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px]  only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
