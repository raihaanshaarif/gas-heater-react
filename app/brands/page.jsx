//Style
import styles from "../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from "../_components/Common/SectionTitle";
import LogoPartners from "../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import Link from "next/link";
//Import Aside
import PromoAside from "../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../_components/ServicesSubPages/BoxListAside";
import ServicesListAside from "../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../_components/ServicesResidential/ServicesListData";

// Brand data
const brandData = [
  {
    id: 1,
    name: "Bonaire",
    slug: "bonaire",
    tagline: "The leaders in heating and cooling",
    image: "/images/brands/bonaire-logo.png",
    description:
      "Australia's leading gas heater manufacturer, known for energy-efficient ducted gas heating systems and innovative heating solutions.",
    features: [
      "Energy Star Rated",
      "Australian Made",
      "25+ Year Warranty",
      "Smart Controls",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Braemar",
    slug: "braemar",
    tagline: "by Seeley International",
    image: "/images/brands/braemar-logo.png",
    description:
      "Premium gas heating systems with advanced technology and superior energy efficiency for Melbourne homes.",
    features: [
      "MyClimate Technology",
      "WiFi Enabled",
      "Zone Control",
      "Ultra-Quiet Operation",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Brivis",
    slug: "brivis",
    tagline: "Heating & Cooling Excellence",
    image: "/images/brands/brivis-logo.png",
    description:
      "Trusted Australian manufacturer of gas heating systems, delivering reliable warmth and comfort for over 30 years.",
    features: [
      "Continuous Pilot",
      "Electronic Ignition",
      "Weather Shield",
      "Easy Maintenance",
    ],
    popular: true,
  },
  {
    id: 4,
    name: "Kaden",
    slug: "kaden",
    tagline: "Smart Heating Solutions",
    image: "/images/brands/kaden-logo.png",
    description:
      "Modern gas heating technology with smart controls and energy-efficient operation for contemporary Melbourne homes.",
    features: [
      "Smart Thermostat",
      "App Control",
      "Energy Monitoring",
      "Compact Design",
    ],
    popular: false,
  },
  {
    id: 5,
    name: "Rinnai",
    slug: "rinnai",
    tagline: "Continuous Hot Water & Heating",
    image: "/images/brands/rinnai-logo.png",
    description:
      "Japanese technology meets Australian engineering in Rinnai's comprehensive range of gas heating solutions.",
    features: [
      "Instant Heat",
      "Continuous Operation",
      "Low Emissions",
      "Precise Temperature Control",
    ],
    popular: true,
  },
  {
    id: 6,
    name: "Pyrox",
    slug: "pyrox",
    tagline: "Professional Heating Solutions",
    image: "/images/brands/pyrox-logo.png",
    description:
      "Commercial and residential gas heating specialists offering robust, reliable heating systems for Melbourne's climate.",
    features: [
      "Heavy Duty Construction",
      "Commercial Grade",
      "Extended Warranty",
      "Professional Installation",
    ],
    popular: false,
  },
  {
    id: 7,
    name: "Vulcan",
    slug: "vulcan",
    tagline: "Industrial Strength Heating",
    image: "/images/brands/vulcan-logo.png",
    description:
      "Premium Australian heating solutions with industrial-strength construction and proven reliability for demanding applications.",
    features: [
      "Australian Engineered",
      "Heavy Duty Construction",
      "Commercial Grade",
      "20 Year Warranty",
    ],
    popular: false,
  },
];

// Metadata
export const metadata = {
  title:
    "Gas Heater Brands Melbourne | Bonaire, Braemar, Brivis, Rinnai, Vulcan & More",
  description:
    "Expert installation and service for all major gas heater brands in Melbourne. Bonaire, Braemar, Brivis, Rinnai, Kaden, Pyrox & Vulcan. Licensed technicians, warranties included. Call 0405133761",
  keywords:
    "gas heater brands Melbourne, Bonaire gas heaters, Braemar heating, Brivis gas heaters, Rinnai heaters Melbourne, Vulcan gas heaters, gas heater installation brands, best gas heater brands Australia",
  canonical: "https://gasheaterservicemelbourne.com.au/brands/",
};

//Page Layout
export default function BrandsPage() {
  const popularBrands = brandData.filter((brand) => brand.popular);
  const otherBrands = brandData.filter((brand) => !brand.popular);

  return (
    <>
      <PageTitle dataTitle="Gas Heater Brands Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="trusted gas heater brands"
                  dataTitle="Premium Gas Heater Brands We Install & Service in Melbourne"
                  dataMaxWidth="630px"
                />

                <p className={`${styles.indent__top2}`}>
                  Choose from Melbourne&apos;s most trusted gas heater brands,
                  all backed by our professional installation, comprehensive
                  warranties, and expert servicing. As authorized dealers and
                  certified technicians, we specialize in the top gas heating
                  brands that deliver superior performance, energy efficiency,
                  and long-lasting comfort for Melbourne homes.
                </p>

                <p className="indent__top">
                  Our team is factory-trained on all major gas heater brands,
                  ensuring your installation meets manufacturer specifications
                  and warranty requirements. From energy-efficient Bonaire
                  systems to innovative Braemar technology, we&apos;ll help you
                  choose the perfect gas heating solution for your home and
                  budget.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Most Popular Gas Heater Brands in Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[30px] mt-[30px]">
                  {popularBrands.map((brand) => (
                    <div
                      key={brand.id}
                      className="bg-white border border-gray-200 rounded-lg p-[20px] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-[15px] mb-[15px]">
                        <div className="w-[80px] h-[60px] flex items-center justify-center bg-gray-50 rounded">
                          <Image
                            src={brand.image}
                            alt={`${brand.name} logo`}
                            width={70}
                            height={50}
                            objectFit="contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[18px] font-bold text-gray-900 mb-[5px]">
                            {brand.name}
                          </h4>
                          <p className="text-[14px] text-blue-600 mb-[8px]">
                            {brand.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-[14px] text-gray-700 mb-[15px]">
                        {brand.description}
                      </p>

                      <div className="mb-[15px]">
                        <p className="text-[13px] font-semibold text-gray-900 mb-[8px]">
                          Key Features:
                        </p>
                        <div className="flex flex-wrap gap-[5px]">
                          {brand.features.map((feature, index) => (
                            <span
                              key={index}
                              className="text-[12px] bg-blue-50 text-blue-700 px-[8px] py-[3px] rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/brands/${brand.slug}`}
                        className="inline-block bg-blue-600 text-white text-[14px] font-semibold px-[20px] py-[8px] rounded hover:bg-blue-700 transition-colors"
                      >
                        Learn More About {brand.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Additional Gas Heater Brands We Service
                </h3>

                <div className="grid md:grid-cols-2 gap-[30px] mt-[30px]">
                  {otherBrands.map((brand) => (
                    <div
                      key={brand.id}
                      className="bg-white border border-gray-200 rounded-lg p-[20px] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-[15px] mb-[15px]">
                        <div className="w-[80px] h-[60px] flex items-center justify-center bg-gray-50 rounded">
                          <Image
                            src={brand.image}
                            alt={`${brand.name} logo`}
                            width={70}
                            height={50}
                            objectFit="contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[18px] font-bold text-gray-900 mb-[5px]">
                            {brand.name}
                          </h4>
                          <p className="text-[14px] text-blue-600 mb-[8px]">
                            {brand.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-[14px] text-gray-700 mb-[15px]">
                        {brand.description}
                      </p>

                      <div className="mb-[15px]">
                        <p className="text-[13px] font-semibold text-gray-900 mb-[8px]">
                          Key Features:
                        </p>
                        <div className="flex flex-wrap gap-[5px]">
                          {brand.features.map((feature, index) => (
                            <span
                              key={index}
                              className="text-[12px] bg-blue-50 text-blue-700 px-[8px] py-[3px] rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/brands/${brand.slug}`}
                        className="inline-block bg-blue-600 text-white text-[14px] font-semibold px-[20px] py-[8px] rounded hover:bg-blue-700 transition-colors"
                      >
                        Learn More About {brand.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Why Choose the Right Gas Heater Brand?
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[10px]">
                      Energy Efficiency Matters
                    </h4>
                    <p className="text-[14px] text-gray-700 mb-[15px]">
                      Premium brands like Bonaire and Braemar offer superior
                      energy ratings, reducing your heating bills by up to 30%
                      compared to older systems.
                    </p>

                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[10px]">
                      Warranty Protection
                    </h4>
                    <p className="text-[14px] text-gray-700">
                      Top brands provide comprehensive warranties (5-25 years)
                      and nationwide service networks for peace of mind.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[10px]">
                      Advanced Technology
                    </h4>
                    <p className="text-[14px] text-gray-700 mb-[15px]">
                      Modern gas heaters feature smart controls, WiFi
                      connectivity, and zone heating for ultimate comfort and
                      control.
                    </p>

                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[10px]">
                      Professional Installation
                    </h4>
                    <p className="text-[14px] text-gray-700">
                      Our certified technicians are factory-trained on all major
                      brands, ensuring optimal performance and warranty
                      compliance.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[20px] mt-[30px]">
                  <h3 className="text-[18px] font-bold text-blue-900 mb-[10px]">
                    Free Brand Consultation & Quote
                  </h3>
                  <p className="text-[14px] text-blue-800 mb-[15px]">
                    Not sure which gas heater brand is right for your Melbourne
                    home? Our experts will assess your property, heating needs,
                    and budget to recommend the perfect brand and model.
                  </p>
                  <div className="flex flex-wrap gap-[10px]">
                    <span className="text-[13px] bg-blue-600 text-white px-[12px] py-[5px] rounded">
                      ✓ Free Home Assessment
                    </span>
                    <span className="text-[13px] bg-blue-600 text-white px-[12px] py-[5px] rounded">
                      ✓ Brand Comparison
                    </span>
                    <span className="text-[13px] bg-blue-600 text-white px-[12px] py-[5px] rounded">
                      ✓ Energy Efficiency Analysis
                    </span>
                    <span className="text-[13px] bg-blue-600 text-white px-[12px] py-[5px] rounded">
                      ✓ Upfront Pricing
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Gas Heater Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Call For Brand Advice!"
                  dataText="Expert recommendations for all major gas heater brands"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Brand Specialists"}
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
              dataSubtitle="authorized dealers"
              dataTitle="Certified Partners & Authorized Dealers"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
