//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
import cardStyles from "../../_components/index/AdditionalServices.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
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
import { ComercialListData } from "../../_components/ServicesCommercial/ComercialListData";
import { dataServicesInclude } from "../../_components/ServicesCommercial/ServicesIncludeData";
import imageLayout from "../../../public/images/services/services_img02.jpg";

//Page Layout
export default function ServicesCommercial() {
  return (
    <>
      <PageTitle dataTitle="Commercial Gas Heating Services" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial gas heating services"
                  dataTitle="Professional Commercial Gas Heating Services Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial gas heating services Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Keep your business comfortable and productive with our
                  professional commercial gas heating services in Melbourne. We
                  specialize in commercial-grade gas heating solutions for
                  offices, warehouses, retail spaces, restaurants, and
                  industrial facilities. Our business heating experts understand
                  the unique requirements of commercial properties and provide
                  reliable, energy-efficient heating solutions that minimize
                  operational costs while maintaining optimal workplace comfort.
                  From installation to emergency repairs, we deliver
                  comprehensive commercial gas heating services:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Office Building Gas Heating</li>
                      <li>Warehouse Heating Systems</li>
                      <li>Retail Space Gas Heaters</li>
                      <li>Restaurant Gas Heating</li>
                      <li>Industrial Gas Heating</li>
                      <li>Medical Facility Heating</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Hotel & Hospitality Heating</li>
                      <li>Educational Facility Heating</li>
                      <li>Gym & Fitness Center Heating</li>
                      <li>Multi-Zone Commercial Systems</li>
                      <li>Energy Management Systems</li>
                      <li>24/7 Commercial Support</li>
                    </ul>
                  </div>
                </div>
                {/* Commercial service cards */}
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
                      title: "Commercial Heater Installation",
                      text: "End-to-end installation for offices, retail, and industrial sites. Correct sizing, zoning, and compliance documentation included.",
                      list: [
                        "Commercial Ducted Systems",
                        "All Major Brands",
                        "Compliance Certification",
                      ],
                      btn__src:
                        "/services/services__commercial/gas-heater-installation",
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
                      title: "Commercial Heater Repairs",
                      text: "Rapid fault diagnosis and repair to reduce downtime and restore safe, stable temperatures across your site.",
                      list: [
                        "Same-Day Priority Response",
                        "Control & Ignition Faults",
                        "Gas Leak Diagnostics",
                      ],
                      btn__src:
                        "/services/services__commercial/gas-heater-repairs",
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
                      title: "Commercial Heater Servicing",
                      text: "Scheduled maintenance programs that improve efficiency, reduce risk, and help maintain compliance obligations.",
                      list: [
                        "Safety Inspections",
                        "Performance Tune-Ups",
                        "Maintenance Reporting",
                      ],
                      btn__src:
                        "/services/services__commercial/gas-heater-servicing",
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
                      title: "Commercial CO Testing",
                      text: "Workplace carbon monoxide testing and reporting to protect staff and customers in enclosed commercial environments.",
                      list: [
                        "CO Leak Detection",
                        "Flue & Ventilation Checks",
                        "Safety Compliance Reports",
                      ],
                      btn__src:
                        "/services/services__commercial/carbon-monoxide-testing",
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
                      title: "Emergency Commercial Repairs",
                      text: "24/7 emergency breakdown and gas safety response to keep your premises safe and operational.",
                      list: [
                        "24 / 7 Availability",
                        "After-Hours Response",
                        "Priority Dispatch",
                      ],
                      btn__src:
                        "/services/services__commercial/emergency-gas-heater-repairs",
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
                  Our Commercial Gas Heating Services include:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Commercial Gas Heating Services?
                </h5>
                <p>
                  Commercial heating systems require specialized expertise and
                  understanding of business operational needs. Our commercial
                  gas heating specialists have extensive experience with
                  large-scale heating installations, energy efficiency
                  optimization, and regulatory compliance. We work around your
                  business schedule to minimize disruption and provide 24/7
                  emergency support to keep your operations running smoothly.
                </p>
                <p className="indent__top">
                  We understand that reliable heating is essential for employee
                  productivity, customer comfort, and business success. Our
                  commercial services include energy assessments, scheduled
                  maintenance programs, compliance certifications, and priority
                  emergency response. All our commercial installations meet
                  WorkSafe Victoria requirements and building code standards.
                </p>
                <PromoLayout
                  dataText="Get a free commercial gas heating quote and discover how we can improve your business comfort while reducing energy costs!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Commercial Gas Heating Services
                  </div>
                  <ServicesListAside dataList={ComercialListData} />
                </div>
                <div>
                  <div className={`ttsubtitle`}>Get Free Commercial Quote</div>
                  <FormAside />
                </div>
                <PromoAside
                  dataTitle="Need Commercial Gas Heating?"
                  dataText="Get a Free Business Quote Today"
                  dataTelefon="0405 133 761"
                />
                <BoxListAside
                  dataTitle={"6 Different Reasons \n You Should Choose Us"}
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
