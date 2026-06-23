//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import FormAside from "../../_components/ServicesSubPages/FormAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Layout
import Script from "next/script";
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
    <>      <Script
        id="emergency-rating-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "24/7 Emergency Gas Heater Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gas Heater Service Melbourne",
              "url": "https://gasheaterservicemelbourne.com.au",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "telephone": "+61 405 133 761",
              "areaServed": { "@type": "City", "name": "Melbourne" }
            },
            "description": "24/7 emergency gas heater repair service. Same-day emergency response, carbon monoxide testing, gas safety inspections."
          })
        }}
      />      <PageTitle dataTitle="Emergency Gas Heater Services" />
      <main id="tt-pageContent" className="overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <div className="relative overflow-hidden rounded-[22px] border border-[#dbe5fb] bg-white/95 p-[24px] md:p-[30px] shadow-[0_22px_55px_rgba(14,47,116,0.12)] backdrop-blur-sm">
                  <span className="absolute -right-[55px] -top-[55px] h-[150px] w-[150px] rounded-full bg-[#0f4fb3]/10" />
                  <span className="absolute -left-[30px] -bottom-[65px] h-[130px] w-[130px] rounded-full bg-[#ff4917]/10" />
                  <SectionTitle
                    dataSubtitle="emergency services"
                    dataTitle="24/7 Emergency Gas Heater Services Melbourne"
                    dataMaxWidth="630px"
                  />
                  <div className="mt-[4px] grid gap-[10px] sm:grid-cols-3">
                    {[
                      { label: "Availability", value: "24 / 7" },
                      { label: "Critical Faults", value: "Priority Response" },
                      { label: "Safety Focus", value: "Gas + CO" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[12px] border border-[#dfe8fb] bg-[#f6f9ff] px-[12px] py-[11px]"
                      >
                        <p className="mb-[2px] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#46628f]">
                          {item.label}
                        </p>
                        <p className="mb-0 text-[15px] font-bold text-[#092a66]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-[20px] overflow-hidden rounded-[16px] border border-[#d7e2fb] leading-none shadow-[0_16px_38px_rgba(19,56,124,0.13)]">
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
                <h4 className="ttsubtitle ttsubtitle__top rounded-[12px] border border-[#ffd6ca] bg-[linear-gradient(180deg,#fff6f3_0%,#fffdfc_100%)] px-[14px] py-[10px]">
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
                <h4 className="ttsubtitle ttsubtitle__top rounded-[12px] border border-[#ffd6ca] bg-[linear-gradient(180deg,#fff6f3_0%,#fffdfc_100%)] px-[14px] py-[10px]">
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
                <h4 className="ttsubtitle ttsubtitle__top rounded-[12px] border border-[#ffd6ca] bg-[linear-gradient(180deg,#fff6f3_0%,#fffdfc_100%)] px-[14px] py-[10px]">
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
                <h4 className="ttsubtitle ttsubtitle__top rounded-[12px] border border-[#ffd6ca] bg-[linear-gradient(180deg,#fff6f3_0%,#fffdfc_100%)] px-[14px] py-[10px]">
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
                <h4 className="ttsubtitle ttsubtitle__top rounded-[12px] border border-[#ffd6ca] bg-[linear-gradient(180deg,#fff6f3_0%,#fffdfc_100%)] px-[14px] py-[10px]">
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

                {/* Emergency Service FAQs */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">24/7 Emergency Gas Heater FAQs</h3>
                  <div className="space-y-[12px]">
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">What do I do if I smell gas?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Evacuate immediately without using electrical switches or phones. Call 000 from outside. Never return until emergency services clear the building.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">How quickly can you respond to emergencies?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">We aim for same-day response in most Metro Melbourne areas, typically 30-60 minutes. Call 0405 133 761 for your specific location.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">Is emergency service more expensive?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Emergency callout fees may apply depending on time and location. We provide transparent quotes before work starts. No hidden surprises.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">Are you available nights and weekends?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Yes, 24/7/365. Emergencies don't take weekends or holidays off. We're always available when you need us.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">Can you fix it in one visit?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Most emergencies are fixed same-visit. If not possible, we'll advise on options and arrange urgent follow-up service.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">What if my warranty is expired?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">We still repair your system. We provide honest assessments and work with manufacturers if warranty can be honored.</p>
                    </details>
                  </div>
                </div>

                {/* Emergency Service Costs */}
                <div className="mt-[40px] mb-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Emergency Gas Heater Service Pricing</h3>
                  <div className="grid md:grid-cols-2 gap-[20px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Emergency Repairs</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>24/7 Callout Fee</span> <span className="font-bold">$50-100</span></li>
                        <li className="flex justify-between"><span>Emergency Diagnostics</span> <span className="font-bold">$100-150</span></li>
                        <li className="flex justify-between"><span>Quick Fix</span> <span className="font-bold">$150-300</span></li>
                        <li className="flex justify-between"><span>Complex Repair</span> <span className="font-bold">$300-500+</span></li>
                        <li className="flex justify-between"><span>After-Hours Surcharge</span> <span className="font-bold">+$50-100</span></li>
                      </ul>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Emergency Response</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>Same-Day Response</span> <span className="font-bold">Typical</span></li>
                        <li className="flex justify-between"><span>Night Response</span> <span className="font-bold">Available</span></li>
                        <li className="flex justify-between"><span>Weekend Service</span> <span className="font-bold">Available</span></li>
                        <li className="flex justify-between"><span>Holiday Service</span> <span className="font-bold">Available</span></li>
                        <li className="flex justify-between"><span>Temporary Heating</span> <span className="font-bold">Can Arrange</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div className="rounded-[14px] border border-[#dbe5fb] bg-white p-[14px] shadow-[0_12px_28px_rgba(17,42,84,0.08)]">
                  <div className={`ttsubtitle`}>Emergency Services</div>
                  <div className={`${styles.aside__content}`}>
                    <ServicesListAside dataList={EmergencyListData} />
                  </div>
                </div>
                <div className="mt-[14px] rounded-[14px] border border-[#dbe5fb] bg-white p-[14px] shadow-[0_12px_28px_rgba(17,42,84,0.08)]">
                  <div className={`ttsubtitle`}>Ask Question</div>
                  <div className={`${styles.aside__content}`}>
                    <FormAside />
                  </div>
                </div>
                <div className="mt-[14px]">
                  <PromoAside
                    dataTitle="Emergency Gas Technician!"
                    dataText="24/7 Emergency Response Available"
                    dataTelefon="0405133761"
                  />
                </div>
                <div className="mt-[14px] rounded-[14px] border border-[#dbe5fb] bg-white p-[12px] shadow-[0_12px_28px_rgba(17,42,84,0.08)]">
                  <BoxListAside
                    dataTitle={"6 Different Reasons \n You Should Hire Us"}
                    dataList={ReasonsListData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="../images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text rounded-[22px] border border-[#d9e4fa] bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7ff_100%)] p-[20px] md:p-[28px]">
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
