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
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="no-resize-text">
                <SectionTitle
                  dataSubtitle="residential services"
                  dataTitle="Professional Gas Heater Services for Your Home"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
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
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Single Family Homes</li>
                      <li>Apartments & Condos</li>
                      <li>Townhouses</li>
                      <li>Rental Properties</li>
                      <li>New Construction Homes</li>
                      <li>Home Renovations</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
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
                    <div key={id} className={`${cardStyles.item__holder}`}>
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
