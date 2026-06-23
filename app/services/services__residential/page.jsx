//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
import cardStyles from "../../_components/index/AdditionalServices.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
import ListWithTitle from "../../_components/Common/ListWithTitle";
import Link from "next/link";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import FormAside from "../../_components/ServicesSubPages/FormAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import { dataServicesInclude } from "../../_components/ServicesResidential/ServicesIncludeData";
import imageLayout from "../../../public/images/services/services_img03.jpg";
//Page Layout
export default function ServicesResidential() {
  return (
    <>
      <PageTitle dataTitle="Residential Gas Heater Services" />
      <main id="tt-pageContent" className="overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="no-resize-text">
                <div className="relative overflow-hidden rounded-[22px] border border-[#dbe5fb] bg-white/95 p-[24px] md:p-[30px] shadow-[0_22px_55px_rgba(14,47,116,0.12)] backdrop-blur-sm">
                  <span className="absolute -right-[55px] -top-[55px] h-[150px] w-[150px] rounded-full bg-[#0f4fb3]/10" />
                  <span className="absolute -left-[30px] -bottom-[65px] h-[130px] w-[130px] rounded-full bg-[#19a463]/10" />
                  <SectionTitle
                    dataSubtitle="residential services"
                    dataTitle="Professional Gas Heater Services for Your Home"
                    dataMaxWidth="630px"
                  />
                  <div className="mt-[4px] grid gap-[10px] sm:grid-cols-3">
                    {[
                      { label: "Home Comfort", value: "All Winter" },
                      { label: "Safety", value: "CO + Gas Checks" },
                      { label: "Support", value: "Fast Local Team" },
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
                    alt="residential gas heater services"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Keep your family warm and comfortable all year round with our
                  comprehensive residential gas heater services. From new
                  installations to emergency repairs, our certified gas
                  technicians provide safe, reliable, and efficient heating
                  solutions for your home. We understand that a properly
                  functioning gas heater is essential for your family&apos;s
                  comfort and safety. You can trust us for all of these
                  residential gas heating needs:
                </p>
                <div className="mt-[20px] grid gap-[12px] sm:grid-cols-2">
                  <div className="rounded-[12px] border border-[#e2e8f4] bg-[#fafcff] p-[14px]">
                    <p className="mb-[8px] text-[12px] font-bold uppercase tracking-[0.12em] text-[#3f5f97]">
                      Home Types
                    </p>
                    <ul className="list__type1">
                      <li>Single Family Homes</li>
                      <li>Apartments & Condos</li>
                      <li>Townhouses</li>
                      <li>Rental Properties</li>
                      <li>New Construction Homes</li>
                      <li>Home Renovations</li>
                    </ul>
                  </div>
                  <div className="rounded-[12px] border border-[#e2e8f4] bg-[#fafcff] p-[14px]">
                    <p className="mb-[8px] text-[12px] font-bold uppercase tracking-[0.12em] text-[#3f5f97]">
                      Service Focus
                    </p>
                    <ul className="list__type1">
                      <li>Basement Heating Solutions</li>
                      <li>Multi-Zone Heating</li>
                      <li>Energy-Efficient Upgrades</li>
                      <li>Smart Thermostat Integration</li>
                      <li>Seasonal Maintenance</li>
                      <li>Emergency Repairs</li>
                    </ul>
                  </div>
                </div>
                {/* Residential service cards */}
                <div className="mt-[50px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="36"
                          height="36"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <polyline
                            points="9 22 9 12 15 12 15 22"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      title: "Gas Heater Installation",
                      text: "Professional installation of ducted and wall gas heating systems. We size, supply and install to Australian standards.",
                      list: [
                        "Ducted Gas Heating",
                        "Gas Wall Furnaces",
                        "All Major Brands",
                      ],
                      btn__src:
                        "/services/services__residential/gas-heater-installation",
                    },
                    {
                      id: 2,
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="36"
                          height="36"
                          aria-hidden="true"
                        >
                          <path
                            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      title: "Gas Heater Repairs",
                      text: "Fast, reliable repairs for all gas heater faults. Our licensed technicians diagnose and fix the problem right first time.",
                      list: [
                        "No Heat or Weak Output",
                        "Ignition & Thermostat Faults",
                        "Unusual Noises or Odours",
                      ],
                      btn__src:
                        "/services/services__residential/gas-heater-repairs",
                    },
                    {
                      id: 3,
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="36"
                          height="36"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 12l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      title: "Gas Heater Servicing",
                      text: "Annual servicing keeps your heater running safely and efficiently, extending its life and reducing energy costs.",
                      list: [
                        "Full Safety Inspection",
                        "Filter & Burner Clean",
                        "Performance Tune-Up",
                      ],
                      btn__src:
                        "/services/services__residential/gas-heater-servicing",
                    },
                    {
                      id: 4,
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="36"
                          height="36"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          />
                          <path
                            d="M12 8v4M12 16h.01"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      ),
                      title: "Carbon Monoxide Testing",
                      text: "Protect your family with professional carbon monoxide testing. We check your entire gas heating system for dangerous CO leaks.",
                      list: [
                        "CO Leak Detection",
                        "Flue & Combustion Check",
                        "Safety Certificate",
                      ],
                      btn__src:
                        "/services/services__residential/carbon-monoxide-testing",
                    },
                    {
                      id: 5,
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="36"
                          height="36"
                          aria-hidden="true"
                        >
                          <path
                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <line
                            x1="12"
                            y1="9"
                            x2="12"
                            y2="13"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <line
                            x1="12"
                            y1="17"
                            x2="12.01"
                            y2="17"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      ),
                      title: "Emergency Gas Heater Repairs",
                      text: "Available 24/7 for urgent gas heater breakdowns and gas leaks. We respond fast to keep your home safe and warm.",
                      list: [
                        "24 / 7 Availability",
                        "Gas Leak Response",
                        "Same-Day Attendance",
                      ],
                      btn__src:
                        "/services/services__residential/emergency-gas-heater-repairs",
                    },
                  ].map(({ id, icon, title, text, list, btn__src }) => (
                    <div
                      key={id}
                      className={`${cardStyles.item__holder} rounded-[14px] border border-[#dbe5fb] bg-white shadow-[0_14px_30px_rgba(20,47,89,0.08)] transition-transform duration-300 hover:-translate-y-[3px]`}
                    >
                      <div className={`${cardStyles.item__icon}`}>
                        <svg
                          className={cardStyles.item__icon_bg}
                          viewBox="0 0 100 100"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="currentColor"
                            fillOpacity="0.13"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(0 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(45 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(90 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(135 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(180 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(225 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(270 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(315 50 50)"
                          />
                          <circle cx="50" cy="50" r="35" fill="currentColor" />
                        </svg>
                        <span className="obj__indent-center">{icon}</span>
                      </div>
                      <h6 className={`${cardStyles.item__title} ttsubtitle_sm`}>
                        {title}
                      </h6>
                      <p>{text}</p>
                      <ul className={`${cardStyles.item__ul} list__type1`}>
                        {list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <Link
                        href={btn__src}
                        className={`${cardStyles.item__btn} inline-block btn`}
                      >
                        <span>Learn More</span>
                      </Link>
                    </div>
                  ))}
                </div>

                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Residential Gas Heater Services include:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Gas Heating for Your Home Renovation Project
                </h5>
                <p>
                  Planning a home renovation or addition? Don&apos;t overlook
                  your heating needs. Our expert technicians can design and
                  install efficient gas heating solutions that complement your
                  renovation project. Whether you&apos;re adding a new room,
                  finishing a basement, or upgrading your entire home, we ensure
                  your gas heating system meets all safety codes and efficiency
                  standards.
                </p>
                <p className="indent__top">
                  When you choose our family-owned and operated company for your
                  residential gas heating needs, you can count on us to deliver
                  exceptional service and quality workmanship. We take pride in
                  keeping your family comfortable and safe, and we&apos;re not
                  satisfied unless you are completely happy with our work!
                </p>
                <PromoLayout
                  dataText="Get a free estimate for your residential gas heater installation or repair from our certified gas technicians today!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />

                {/* Residential Service FAQs */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Residential Gas Heater Service FAQs</h3>
                  <div className="space-y-[12px]">
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">How often should I service my residential gas heater?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Professional servicing is recommended annually, ideally before winter. This prevents breakdowns during peak heating season.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">Can you service all home types?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Yes! We service houses, apartments, townhouses, rental properties, and renovations. Every home heating system is different - we're experienced with them all.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">What if I rent my home?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Landlords are legally required to maintain working heating systems. We provide landlord-friendly service documentation and invoicing for maintenance records.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">Do you help with new home heating systems?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Absolutely. We help you choose the right system for your home size and budget, then handle professional installation with full safety certification.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">How much does residential service cost?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Service calls: $80-150. Annual servicing: $120-250. Repairs: $100-350 depending on issue. We provide free quotes before any work starts.</p>
                    </details>
                    <details className="group border border-[#e2e8f4] rounded-[8px] p-[16px] cursor-pointer">
                      <summary className="font-bold text-[16px] text-[#092a66]">Do you offer emergency residential service?</summary>
                      <p className="mt-[12px] text-[14px] text-[#555]">Yes, 24/7 emergency service. When your heating fails in winter, we're here to help. Many emergency repairs completed same-day across Melbourne suburbs.</p>
                    </details>
                  </div>
                </div>

                {/* Residential Service Costs */}
                <div className="mt-[40px] mb-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Residential Gas Heater Service Pricing Guide</h3>
                  <div className="grid md:grid-cols-2 gap-[20px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Common Repairs</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>Pilot Light Service</span> <span className="font-bold">$80-150</span></li>
                        <li className="flex justify-between"><span>Ignition Module</span> <span className="font-bold">$120-220</span></li>
                        <li className="flex justify-between"><span>Thermostat</span> <span className="font-bold">$100-200</span></li>
                        <li className="flex justify-between"><span>Gas Valve</span> <span className="font-bold">$150-280</span></li>
                        <li className="flex justify-between"><span>Heat Exchanger</span> <span className="font-bold">$150-280</span></li>
                      </ul>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Service &amp; Installation</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>Annual Service</span> <span className="font-bold">$120-250</span></li>
                        <li className="flex justify-between"><span>System Diagnosis</span> <span className="font-bold">$70-150</span></li>
                        <li className="flex justify-between"><span>New Installation</span> <span className="font-bold">$1,500-3,500</span></li>
                        <li className="flex justify-between"><span>Emergency After-Hours</span> <span className="font-bold">+$50-100</span></li>
                        <li className="flex justify-between"><span>Same-Day Service</span> <span className="font-bold">Available</span></li>
                      </ul>
                    </div>
                  </div>
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
