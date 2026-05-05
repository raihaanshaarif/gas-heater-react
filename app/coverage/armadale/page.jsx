//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import Script from "next/script";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
import ListWithTitle from "../../_components/Common/ListWithTitle";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import { dataServicesInclude } from "../../_components/ServicesResidential/ServicesIncludeData";
import imageLayout from "../../../public/images/services/services_img03.jpg";

const armadaleFaqs = [
  {
    question: "How much does a gas heater service cost in Armadale?",
    answer:
      "A standard comprehensive gas heater service, which includes a full clean, internal safety inspection, and a digital Carbon Monoxide (CO) spill test, typically starts from $180 to $250. We pride ourselves on providing clear, upfront pricing before any tools come out, so there are never any hidden surprises.",
  },
  {
    question: "Do you offer emergency gas heater repair near High Street, Armadale?",
    answer:
      "Yes, we provide fast-response emergency gas heater repairs across all of Armadale, including properties along High Street, Wattletree Road, Orrong Road, and Dandenong Road. If you suspect a gas leak, smell gas, or have a complete system failure in the middle of winter, call our 24/7 hotline immediately.",
  },
  {
    question: "How often should I service my gas heater?",
    answer:
      "Energy Safe Victoria and all major heating manufacturers strongly recommend servicing your gas heater every 2 years. However, if your system is older than 10 years, an annual service and Carbon Monoxide test before the start of winter is highly advised to ensure safe, efficient operation and to prevent costly mid-winter breakdowns.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Heater Services Armadale Melbourne",
  serviceType:
    "Gas heater installation, gas heater repairs, gas heater servicing, safety inspections",
  areaServed: {
    "@type": "Place",
    name: "Armadale, Victoria, Australia",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "Gas Heater Service Melbourne",
    url: "https://gasheaterservicemelbourne.com.au",
    telephone: "+61 405 133 761",
    areaServed: "Armadale VIC 3143",
  },
  description:
    "Professional gas heater installation, repairs and servicing in Armadale, Melbourne with certified technicians and same-day response options.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: armadaleFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Metadata
export const metadata = {
  title:
    "Gas Heater Services Armadale Melbourne | Installation, Repairs & Servicing",
  description:
    "Professional gas heater services in Armadale, Melbourne. Expert installation, fast repairs, and annual maintenance. Carbon Monoxide testing included. Fully licensed VBA gas fitters.",
  keywords:
    "gas heater services Armadale, gas heater installation Armadale, gas heater repairs Melbourne, Armadale gas heating, ducted gas heating Armadale",
};

//Page Layout
export default function ArmadaleGasHeaterServices() {
  return (
    <>
      <PageTitle dataTitle="Gas Heater Services Armadale Melbourne" />
      <Script
        id="armadale-service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="armadale-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="armadale gas heater services"
                  dataTitle="Professional Gas Heater Services in Armadale, Melbourne"
                  dataMaxWidth="630px"
                />

                {/* Credentials Banner */}
                <div className="bg-[#0c2d6b] text-white rounded-[10px] px-[20px] py-[18px] mb-[24px]">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#93b8ff] mb-[10px]">
                    Fully Licensed &amp; Victorian Compliant
                  </p>
                  <div className="grid sm:grid-cols-2 gap-[8px]">
                    {[
                      "Registered Gas Fitters (VBA)",
                      "Energy Safe Victoria Compliant",
                      "Comprehensive Public Liability Insurance",
                      "Certified Carbon Monoxide Testers",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-[8px] text-[13px]">
                        <span className="text-[#4ade80] font-bold text-[16px]">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={80}
                    alt="gas heater services armadale melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Stay warm and comfortable throughout Melbourne&apos;s colder
                  months with our comprehensive gas heater services in Armadale.
                  As a trusted local gas heating specialist, we provide
                  professional installation, repair, and maintenance services
                  for all types of gas heaters across Armadale and surrounding
                  Melbourne suburbs.
                </p>
                <p className="indent__top">
                  Our certified gas technicians understand the unique heating
                  needs of Armadale homes and deliver reliable, efficient, and
                  safe gas heating solutions tailored to your property.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Armadale Homes & Units</a>
                      </li>
                      <li>
                        <a href="#">Period & Heritage Properties</a>
                      </li>
                      <li>
                        <a href="#">Modern Townhouses</a>
                      </li>
                      <li>
                        <a href="#">Investment Properties</a>
                      </li>
                      <li>
                        <a href="#">New Builds & Extensions</a>
                      </li>
                      <li>
                        <a href="#">Victorian Era Homes</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Ducted Gas Heating</a>
                      </li>
                      <li>
                        <a href="#">Gas Wall Furnaces</a>
                      </li>
                      <li>
                        <a href="#">Central Gas Heating</a>
                      </li>
                      <li>
                        <a href="#">Gas Log Fires</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                      <li>
                        <a href="#">Safety Inspections</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Gas Heater Services We Provide in Armadale:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                {/* Service checklist */}
                <h5 className="ttsubtitle ttsubtitle__top">
                  What We Check During Your Armadale Gas Heater Service
                </h5>
                <div className="grid sm:grid-cols-2 gap-[8px] mt-[14px] mb-[4px]">
                  {[
                    "Fan motor operation & airflow",
                    "Thermostat & temperature controls",
                    "Heat exchanger & flue condition",
                    "Heater cut-out & safety switches",
                    "Carbon monoxide (CO) spill test",
                    "Return air vent & filter clean",
                    "Gas connections & leak test",
                    "Pilot light & ignition system",
                    "Wiring & electrical safety",
                    "System start-up & final run test",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-[8px] bg-[#f4f7ff] border border-[#dde4f5] rounded-[6px] px-[12px] py-[8px] text-[14px]"
                    >
                      <span className="text-[#1a6c3a] font-bold mt-[1px]">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Brands we service */}
                <h5 className="ttsubtitle ttsubtitle__top">
                  Gas Heater Brands We Service in Armadale
                </h5>
                <div className="flex flex-wrap gap-[8px] mt-[12px]">
                  {[
                    "Brivis", "Braemar", "Rinnai", "Vulcan", "Pyrox", "Kaden",
                    "Bonaire", "Daikin", "Evaporative", "Carrier", "Ducted Systems",
                  ].map((brand) => (
                    <span
                      key={brand}
                      className="bg-white border border-[#d0d7e8] text-[#2c3e6b] text-[13px] font-medium px-[14px] py-[6px] rounded-full shadow-sm"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                {/* Warning Signs Section */}
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#ff4917] mt-[36px] mb-[4px]">
                  Don&apos;t Wait
                </p>
                <h5 className="ttsubtitle mb-[16px]">
                  Warning Signs You Need a Repair
                </h5>
                <div className="grid sm:grid-cols-2 gap-[12px]">
                  {[
                    {
                      title: "Yellow or Sooty Flame",
                      body: "A healthy gas flame should be crisp and blue. A yellow or flickering flame indicates incomplete combustion and a high risk of dangerous Carbon Monoxide leaks.",
                    },
                    {
                      title: "Strange Noises",
                      body: "Banging, popping, or squealing sounds when the heater turns on often point to failing fan motors or cracked heat exchangers that need immediate attention.",
                    },
                    {
                      title: "Frequent Cycling",
                      body: "If your heater turns on and off constantly without properly heating the room, your thermostat or internal temperature sensors may be failing.",
                    },
                    {
                      title: "Unusual Smells",
                      body: "While a faint dust smell is normal on first start-up, persistent gas odors or a burning plastic smell require emergency attention. Turn off the gas and call us immediately.",
                    },
                    {
                      title: "Spiking Energy Bills",
                      body: "A sudden, unexplained jump in your gas bill usually means your system is working overtime to compensate for failing or blocked components.",
                    },
                    {
                      title: "Cold Spots",
                      body: "If certain rooms in your Armadale home are freezing while others are boiling, your ducted system may have ductwork damage or zone motor failures.",
                    },
                  ].map((sign) => (
                    <div
                      key={sign.title}
                      className="bg-[#fff8f6] border border-[#ffd5c8] rounded-[8px] p-[16px]"
                    >
                      <p className="font-bold text-[#c93006] mb-[6px]">{sign.title}</p>
                      <p className="text-[14px] mb-0">{sign.body}</p>
                    </div>
                  ))}
                </div>

                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Gas Heater Services in Armadale?
                </h5>
                <p>
                  Armadale&apos;s mix of heritage homes and modern properties
                  requires specialized knowledge when it comes to gas heating
                  solutions. Our team understands the unique characteristics of
                  Armadale properties, from charming period homes to
                  contemporary developments. We provide customized gas heating
                  solutions that respect the architectural integrity of your
                  home while delivering optimal comfort and energy efficiency.
                </p>
                <p className="indent__top">
                  As local Melbourne gas heating specialists, we&apos;re
                  familiar with Armadale&apos;s climate patterns and the
                  specific heating challenges faced by residents. Whether
                  you&apos;re dealing with an older gas heater that needs
                  replacement, require urgent repairs during winter, or want to
                  upgrade to a more efficient system, our certified technicians
                  provide prompt, professional service with upfront pricing and
                  guaranteed workmanship.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Local Armadale Gas Heater Experts
                </h5>
                <p>
                  Living in Armadale means you appreciate quality, reliability,
                  and attention to detail &ndash; values that drive everything
                  we do. Our gas heating services are designed to keep your home
                  comfortable year-round while ensuring the safety and
                  well-being of your family. From routine maintenance that
                  prevents costly breakdowns to emergency repairs when you need
                  them most, we&apos;re your trusted local gas heater
                  specialists in Armadale, Melbourne.
                </p>

                <div className="ttbox02 mt-[30px] border-l-[4px] border-[#ff4917] bg-[#fff4f0] p-[20px] md:p-[24px] rounded-[8px]">
                  <h5 className="ttsubtitle mb-[8px] text-[#c93006]">
                    Carbon Monoxide (CO) Safety Check Included
                  </h5>
                  <p className="mb-0">
                    Every gas heater service includes a comprehensive Carbon
                    Monoxide (CO) spill test to ensure your family&apos;s
                    safety.
                  </p>
                </div>

                <p className="text-[12px] font-bold uppercase tracking-widest text-[#0c4c93] mt-[36px] mb-[4px]">
                  Real Feedback
                </p>
                <h5 className="ttsubtitle mb-[16px]">
                  What Armadale Locals Say
                </h5>
                <div className="grid md:grid-cols-2 gap-[16px] mt-[4px]">
                  <div className="bg-[#f8f8fa] p-[18px] rounded-[8px] border border-[#e6e8ef]">
                    <p className="mb-[10px] italic">
                      &ldquo;Fast response when our ducted heater died in the middle
                      of winter. The technician respected our older Armadale
                      property, kept everything clean, and had it fixed in about
                      an hour.&rdquo;
                    </p>
                    <p className="mb-0 font-semibold">&#8212; Sarah T., Family Home in Armadale</p>
                  </div>
                  <div className="bg-[#f8f8fa] p-[18px] rounded-[8px] border border-[#e6e8ef]">
                    <p className="mb-[10px] italic">
                      &ldquo;Clear pricing, no surprises, and they did a proper Carbon
                      Monoxide safety check after the repair. Great local service
                      near High Street. Highly recommend.&rdquo;
                    </p>
                    <p className="mb-0 font-semibold">&#8212; David L., Townhouse Owner</p>
                  </div>
                  <div className="bg-[#f8f8fa] p-[18px] rounded-[8px] border border-[#e6e8ef] md:col-span-2">
                    <p className="mb-[10px] italic">
                      &ldquo;I called them for an emergency gas leak scare late on a
                      Tuesday. The team arrived incredibly fast, made the system
                      safe, and had a new part installed by the next morning.&rdquo;
                    </p>
                    <p className="mb-0 font-semibold">&#8212; Emma W., Armadale</p>
                  </div>
                </div>

                <p className="text-[12px] font-bold uppercase tracking-widest text-[#0c4c93] mt-[36px] mb-[4px]">
                  How It Works
                </p>
                <h5 className="ttsubtitle mb-[16px]">
                  Our Simple 4-Step Repair Process
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[12px] mt-[4px]">
                  <div className="bg-[#f8f8fa] p-[14px] rounded-[8px] border border-[#e6e8ef]">
                    <p className="font-bold mb-[6px]">1. Book a Time</p>
                    <p className="mb-0 text-[14px]">Call our local Armadale team or enquire online to secure an available appointment slot that suits your schedule.</p>
                  </div>
                  <div className="bg-[#f8f8fa] p-[14px] rounded-[8px] border border-[#e6e8ef]">
                    <p className="font-bold mb-[6px]">2. Upfront Pricing</p>
                    <p className="mb-0 text-[14px]">Our technician will arrive on time, assess your heater&apos;s issue on-site, and provide a clear, fixed-price quote before any work begins.</p>
                  </div>
                  <div className="bg-[#f8f8fa] p-[14px] rounded-[8px] border border-[#e6e8ef]">
                    <p className="font-bold mb-[6px]">3. Same-Day Repair</p>
                    <p className="mb-0 text-[14px]">Our vans are fully stocked with common parts from major brands like Brivis, Braemar, and Rinnai, allowing us to fix most faults on the very first visit.</p>
                  </div>
                  <div className="bg-[#f8f8fa] p-[14px] rounded-[8px] border border-[#e6e8ef]">
                    <p className="font-bold mb-[6px]">4. Stay Warm &amp; Safe</p>
                    <p className="mb-0 text-[14px]">We complete a full Carbon Monoxide spill test and system run-check before handing the heater back to you, ensuring your family&apos;s absolute safety.</p>
                  </div>
                </div>

                <p className="text-[12px] font-bold uppercase tracking-widest text-[#0c4c93] mt-[36px] mb-[4px]">
                  Have Questions?
                </p>
                <h5 className="ttsubtitle mb-[16px]">
                  Armadale Gas Heating FAQ
                </h5>
                <div className="mt-[4px] grid gap-[10px]">
                  {armadaleFaqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="bg-[#f8f8fa] border border-[#e6e8ef] rounded-[8px] p-[14px]"
                    >
                      <summary className="font-semibold cursor-pointer">
                        {faq.question}
                      </summary>
                      <p className="mt-[10px] mb-0">{faq.answer}</p>
                    </details>
                  ))}
                </div>

                {/* Nearby suburbs */}
                <h5 className="ttsubtitle ttsubtitle__top">
                  Also Serving Suburbs Near Armadale
                </h5>
                <div className="flex flex-wrap gap-[8px] mt-[12px]">
                  {[
                    { label: "Toorak", href: "/coverage/toorak" },
                    { label: "Caulfield", href: "/coverage/caulfield" },
                    { label: "Brighton", href: "/coverage/brighton" },
                    { label: "Brighton East", href: "/coverage/brighton-east" },
                    { label: "Glen Waverley", href: "/coverage/glen-waverley" },
                    { label: "St Kilda", href: "/coverage/st-kilda" },
                    { label: "St Kilda East", href: "/coverage/st-kilda-east" },
                  ].map((suburb) => (
                    <a
                      key={suburb.href}
                      href={suburb.href}
                      className="bg-white border border-[#d0d7e8] hover:bg-[#f0f4ff] text-[#2c3e6b] text-[13px] font-medium px-[14px] py-[6px] rounded-full transition-colors"
                    >
                      {suburb.label}
                    </a>
                  ))}
                </div>

                <PromoLayout
                  dataText="Get a free quote for gas heater installation, repair, or servicing in Armadale from our certified gas technicians today!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Gas Heater Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Book A Gas Technician Now!"
                  dataText="Serving Armadale & Melbourne"
                  dataTelefon="0405133761"
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
          data-bg="/images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="trusted partners"
              dataTitle="Our Certified Partners"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px]  only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
