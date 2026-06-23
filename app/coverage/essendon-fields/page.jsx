//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/image";
import Link from "next/link";
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

const essendonFieldsFaqs = [
  {
    question: "How much does a gas heater service cost in Essendon Fields?",
    answer:
      "A standard comprehensive gas heater service, which includes a full clean, internal safety inspection, and a digital Carbon Monoxide (CO) spill test, typically starts from $180 to $250. We pride ourselves on providing clear, upfront pricing before any tools come out, so there are never any hidden surprises.",
  },
  {
    question: "Do you offer emergency gas heater repair in Essendon Fields?",
    answer:
      "Yes, we provide fast-response emergency gas heater repairs across all of Essendon Fields, including homes near the local shopping precinct and surrounding residential streets. If you suspect a gas leak, smell gas, or have a complete system failure in the middle of winter, call our 24/7 hotline immediately.",
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
  name: "Gas Heater Services Essendon Fields Melbourne",
  serviceType:
    "Gas heater installation, gas heater repairs, gas heater servicing, safety inspections",
  areaServed: {
    "@type": "Place",
    name: "Essendon Fields, Victoria, Australia",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "Gas Heater Service Melbourne",
    url: "https://gasheaterservicemelbourne.com.au",
    telephone: "+61 405 133 761",
    areaServed: "Essendon Fields VIC",
  },
  description:
    "Professional gas heater installation, repairs and servicing in Essendon Fields, Melbourne with certified technicians and same-day response options.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: essendonFieldsFaqs.map((faq) => ({
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
    "Gas Heater Services Essendon Fields Melbourne | Installation, Repairs & Servicing",
  description:
    "Professional gas heater services in Essendon Fields, Melbourne. Expert installation, fast repairs, and annual maintenance. Carbon Monoxide testing included. Fully licensed VBA gas fitters.",
  keywords:
    "gas heater services Essendon Fields, gas heater installation Essendon Fields, gas heater repairs Melbourne, Essendon Fields gas heating, ducted gas heating Essendon Fields",
  alternates: {
    canonical: "https://gasheaterservicemelbourne.com.au/coverage/essendon-fields/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

//Page Layout
export default function EssendonFieldsGasHeaterServices() {
  return (
    <>
      <PageTitle dataTitle="Gas Heater Services Essendon Fields Melbourne" />
      <Script
        id="essendon-fields-service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="essendon-fields-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main id="tt-pageContent" className="coverage-modern overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <div className="relative overflow-hidden rounded-[22px] border border-[#dbe5fb] bg-white/95 p-[24px] md:p-[30px] shadow-[0_22px_55px_rgba(14,47,116,0.12)] backdrop-blur-sm">
                  <span className="absolute -right-[55px] -top-[55px] h-[150px] w-[150px] rounded-full bg-[#0f4fb3]/10" />
                  <span className="absolute -left-[30px] -bottom-[65px] h-[130px] w-[130px] rounded-full bg-[#19a463]/10" />
                  <SectionTitle
                    dataSubtitle="essendon fields gas heater services"
                    dataTitle="Professional Gas Heater Services in Essendon Fields, Melbourne"
                    dataMaxWidth="630px"
                  />
                  <div className="mt-[4px] grid gap-[10px] sm:grid-cols-3">
                    {[
                      { label: "Same-Day Response", value: "7 Days" },
                      { label: "Safety Protocol", value: "CO Tested" },
                      { label: "Local Coverage", value: "Essendon Fields + Nearby" },
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

                {/* Credentials Banner */}
                <div className="mt-[18px] rounded-[14px] border border-[#1a4e9f] bg-[linear-gradient(135deg,#0c2d6b_0%,#0f4fb3_100%)] px-[20px] py-[18px] text-white shadow-[0_14px_35px_rgba(12,45,107,0.3)]">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#93b8ff] mb-[10px]">
                    Fully Licensed &amp; Victorian Compliant
                  </p>
                  <div className="grid gap-[8px] sm:grid-cols-2">
                    {[
                      "Registered Gas Fitters (VBA)",
                      "Energy Safe Victoria Compliant",
                      "Comprehensive Public Liability Insurance",
                      "Certified Carbon Monoxide Testers",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-[8px] rounded-[8px] bg-white/10 px-[10px] py-[6px] text-[13px]"
                      >
                        <span className="text-[#4ade80] font-bold text-[16px]">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-[20px] overflow-hidden rounded-[16px] border border-[#d7e2fb] leading-none shadow-[0_16px_38px_rgba(19,56,124,0.13)]">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={80}
                    alt="gas heater services essendon fields melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Stay warm and comfortable throughout Melbourne&apos;s colder
                  months with our comprehensive gas heater services in Essendon Fields.
                  As a trusted local gas heating specialist, we provide
                  professional installation, repair, and maintenance services
                  for all types of gas heaters across Essendon Fields and surrounding
                  Melbourne suburbs.
                </p>
                <p className="indent__top">
                  Our certified gas technicians understand the unique heating
                  needs of Essendon Fields homes and deliver reliable, efficient, and
                  safe gas heating solutions tailored to your property.
                </p>
                <div className="mt-[24px] grid gap-[12px] sm:grid-cols-2">
                  <div className="rounded-[12px] border border-[#e2e8f4] bg-[#fafcff] p-[14px]">
                    <p className="mb-[8px] text-[12px] font-bold uppercase tracking-[0.12em] text-[#3f5f97]">
                      Property Types
                    </p>
                    <ul className="list__type1">
                      <li>
                        <span>Essendon Fields Homes & Units</span>
                      </li>
                      <li>
                        <span>Period & Heritage Properties</span>
                      </li>
                      <li>
                        <span>Modern Townhouses</span>
                      </li>
                      <li>
                        <span>Investment Properties</span>
                      </li>
                      <li>
                        <span>New Builds & Extensions</span>
                      </li>
                      <li>
                        <span>Victorian Era Homes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-[12px] border border-[#e2e8f4] bg-[#fafcff] p-[14px]">
                    <p className="mb-[8px] text-[12px] font-bold uppercase tracking-[0.12em] text-[#3f5f97]">
                      Heater Systems
                    </p>
                    <ul className="list__type1">
                      <li>
                        <span>Ducted Gas Heating</span>
                      </li>
                      <li>
                        <span>Gas Wall Furnaces</span>
                      </li>
                      <li>
                        <span>Central Gas Heating</span>
                      </li>
                      <li>
                        <span>Gas Log Fires</span>
                      </li>
                      <li>
                        <span>Emergency Repairs</span>
                      </li>
                      <li>
                        <span>Safety Inspections</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Gas Heater Services We Provide in Essendon Fields:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                {/* Service checklist */}
                <h5 className="ttsubtitle ttsubtitle__top">
                  What We Check During Your Essendon Fields Gas Heater Service
                </h5>
                <div className="mb-[4px] mt-[14px] grid gap-[10px] sm:grid-cols-2">
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
                      className="flex items-start gap-[8px] rounded-[10px] border border-[#dde4f5] bg-[#f4f7ff] px-[12px] py-[9px] text-[14px] shadow-[0_4px_10px_rgba(22,58,124,0.06)]"
                    >
                      <span className="text-[#1a6c3a] font-bold mt-[1px]">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Brands we service */}
                <h5 className="ttsubtitle ttsubtitle__top">
                  Gas Heater Brands We Service in Essendon Fields
                </h5>
                <div className="mt-[12px] flex flex-wrap gap-[8px]">
                  {[
                    "Brivis", "Braemar", "Rinnai", "Vulcan", "Pyrox", "Kaden",
                    "Bonaire", "Daikin", "Evaporative", "Carrier", "Ducted Systems",
                  ].map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-[#c8d8f4] bg-[linear-gradient(135deg,#ffffff_0%,#f3f7ff_100%)] px-[14px] py-[6px] text-[13px] font-semibold text-[#204178] shadow-[0_5px_12px_rgba(44,70,120,0.1)]"
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
                <div className="grid gap-[12px] sm:grid-cols-2">
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
                      body: "If certain rooms in your Essendon Fields home are freezing while others are boiling, your ducted system may have ductwork damage or zone motor failures.",
                    },
                  ].map((sign) => (
                    <div
                      key={sign.title}
                      className="rounded-[12px] border border-[#ffd5c8] bg-[linear-gradient(180deg,#fff8f6_0%,#fffdfc_100%)] p-[16px] shadow-[0_8px_22px_rgba(214,95,42,0.08)] transition-transform duration-300 hover:-translate-y-[2px]"
                    >
                      <p className="font-bold text-[#c93006] mb-[6px]">{sign.title}</p>
                      <p className="text-[14px] mb-0">{sign.body}</p>
                    </div>
                  ))}
                </div>

                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Gas Heater Services in Essendon Fields?
                </h5>
                <p>
                  Essendon Fields&apos;s mix of heritage homes and modern properties
                  requires specialized knowledge when it comes to gas heating
                  solutions. Our team understands the unique characteristics of
                  Essendon Fields properties, from charming period homes to
                  contemporary developments. We provide customized gas heating
                  solutions that respect the architectural integrity of your
                  home while delivering optimal comfort and energy efficiency.
                </p>
                <p className="indent__top">
                  As local Melbourne gas heating specialists, we&apos;re
                  familiar with Essendon Fields&apos;s climate patterns and the
                  specific heating challenges faced by residents. Whether
                  you&apos;re dealing with an older gas heater that needs
                  replacement, require urgent repairs during winter, or want to
                  upgrade to a more efficient system, our certified technicians
                  provide prompt, professional service with upfront pricing and
                  guaranteed workmanship.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Local Essendon Fields Gas Heater Experts
                </h5>
                <p>
                  Living in Essendon Fields means you appreciate quality, reliability,
                  and attention to detail &ndash; values that drive everything
                  we do. Our gas heating services are designed to keep your home
                  comfortable year-round while ensuring the safety and
                  well-being of your family. From routine maintenance that
                  prevents costly breakdowns to emergency repairs when you need
                  them most, we&apos;re your trusted local gas heater
                  specialists in Essendon Fields, Melbourne.
                </p>

                <div className="ttbox02 mt-[30px] rounded-[12px] border border-[#ffcfbe] border-l-[4px] border-l-[#ff4917] bg-[linear-gradient(135deg,#fff4f0_0%,#fffaf8_100%)] p-[20px] md:p-[24px]">
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
                  What Essendon Fields Locals Say
                </h5>
                <div className="mt-[4px] grid gap-[16px] md:grid-cols-2">
                  <div className="rounded-[12px] border border-[#e6e8ef] bg-white p-[18px] shadow-[0_10px_24px_rgba(24,39,75,0.08)]">
                    <p className="mb-[10px] italic">
                      &ldquo;Fast response when our ducted heater died in the middle
                      of winter. The technician respected our older Essendon Fields
                      property, kept everything clean, and had it fixed in about
                      an hour.&rdquo;
                    </p>
                    <p className="mb-0 font-semibold">&#8212; Sarah T., Family Home in Essendon Fields</p>
                  </div>
                  <div className="rounded-[12px] border border-[#e6e8ef] bg-white p-[18px] shadow-[0_10px_24px_rgba(24,39,75,0.08)]">
                    <p className="mb-[10px] italic">
                      &ldquo;Clear pricing, no surprises, and they did a proper Carbon
                      Monoxide safety check after the repair. Great local service
                      near High Street. Highly recommend.&rdquo;
                    </p>
                    <p className="mb-0 font-semibold">&#8212; David L., Townhouse Owner</p>
                  </div>
                  <div className="rounded-[12px] border border-[#e6e8ef] bg-white p-[18px] shadow-[0_10px_24px_rgba(24,39,75,0.08)] md:col-span-2">
                    <p className="mb-[10px] italic">
                      &ldquo;I called them for an emergency gas leak scare late on a
                      Tuesday. The team arrived incredibly fast, made the system
                      safe, and had a new part installed by the next morning.&rdquo;
                    </p>
                    <p className="mb-0 font-semibold">&#8212; Emma W., Essendon Fields</p>
                  </div>
                </div>

                <p className="text-[12px] font-bold uppercase tracking-widest text-[#0c4c93] mt-[36px] mb-[4px]">
                  How It Works
                </p>
                <h5 className="ttsubtitle mb-[16px]">
                  Our Simple 4-Step Repair Process
                </h5>
                <div className="mt-[4px] grid gap-[12px] sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-[12px] border border-[#dce6fb] bg-[#f8fbff] p-[14px]">
                    <p className="mb-[6px] inline-flex rounded-full bg-[#0f4fb3] px-[8px] py-[2px] text-[11px] font-bold text-white">Step 1</p>
                    <p className="font-bold mb-[6px]">Book a Time</p>
                    <p className="mb-0 text-[14px]">Call our local Essendon Fields team or enquire online to secure an available appointment slot that suits your schedule.</p>
                  </div>
                  <div className="rounded-[12px] border border-[#dce6fb] bg-[#f8fbff] p-[14px]">
                    <p className="mb-[6px] inline-flex rounded-full bg-[#0f4fb3] px-[8px] py-[2px] text-[11px] font-bold text-white">Step 2</p>
                    <p className="font-bold mb-[6px]">Upfront Pricing</p>
                    <p className="mb-0 text-[14px]">Our technician will arrive on time, assess your heater&apos;s issue on-site, and provide a clear, fixed-price quote before any work begins.</p>
                  </div>
                  <div className="rounded-[12px] border border-[#dce6fb] bg-[#f8fbff] p-[14px]">
                    <p className="mb-[6px] inline-flex rounded-full bg-[#0f4fb3] px-[8px] py-[2px] text-[11px] font-bold text-white">Step 3</p>
                    <p className="font-bold mb-[6px]">Same-Day Repair</p>
                    <p className="mb-0 text-[14px]">Our vans are fully stocked with common parts from major brands like Brivis, Braemar, and Rinnai, allowing us to fix most faults on the very first visit.</p>
                  </div>
                  <div className="rounded-[12px] border border-[#dce6fb] bg-[#f8fbff] p-[14px]">
                    <p className="mb-[6px] inline-flex rounded-full bg-[#0f4fb3] px-[8px] py-[2px] text-[11px] font-bold text-white">Step 4</p>
                    <p className="font-bold mb-[6px]">Stay Warm &amp; Safe</p>
                    <p className="mb-0 text-[14px]">We complete a full Carbon Monoxide spill test and system run-check before handing the heater back to you, ensuring your family&apos;s absolute safety.</p>
                  </div>
                </div>

                <p className="text-[12px] font-bold uppercase tracking-widest text-[#0c4c93] mt-[36px] mb-[4px]">
                  Have Questions?
                </p>
                <h5 className="ttsubtitle mb-[16px]">
                  Essendon Fields Gas Heating FAQ
                </h5>
                <div className="mt-[4px] grid gap-[10px]">
                  {essendonFieldsFaqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-[12px] border border-[#dbe4f5] bg-white p-[14px] shadow-[0_6px_18px_rgba(20,47,89,0.06)]"
                    >
                      <summary className="cursor-pointer font-semibold text-[#0c2d6b]">
                        {faq.question}
                      </summary>
                      <p className="mb-0 mt-[10px] text-[15px] text-[#344a70]">{faq.answer}</p>
                    </details>
                  ))}
                </div>

                {/* Nearby suburbs */}
                <h5 className="ttsubtitle ttsubtitle__top">
                  Also Serving Suburbs Near Essendon Fields
                </h5>
                <div className="mt-[12px] flex flex-wrap gap-[8px]">
                  {[
                    { label: "Fawkner", href: "/coverage/fawkner" },
                    { label: "Ferntree Gully", href: "/coverage/ferntree-gully" },
                    { label: "Frankston", href: "/coverage/frankston" },
                    { label: "Frankston North", href: "/coverage/frankston-north" },
                    { label: "Frankston South", href: "/coverage/frankston-south" },
                    { label: "Gembrook", href: "/coverage/gembrook" },
                    { label: "Glen Waverley", href: "/coverage/glen-waverley" },
                  ].map((suburb) => (
                    <Link
                      key={suburb.href}
                      href={suburb.href}
                      className="rounded-full border border-[#d0d7e8] bg-white px-[14px] py-[6px] text-[13px] font-medium text-[#2c3e6b] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#9eb4de] hover:bg-[#f0f4ff]"
                    >
                      {suburb.label}
                    </Link>
                  ))}
                </div>

                <PromoLayout
                  dataText="Get a free quote for gas heater installation, repair, or servicing in Essendon Fields from our certified gas technicians today!"
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
                  dataText="Serving Essendon Fields & Melbourne"
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
        
                {/* Local Pricing Grid */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Gas Heater Service Costs in Essendon Fields</h3>
                  <div className="grid md:grid-cols-2 gap-[20px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Common Repairs</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>Service Call</span> <span className="font-bold">$80-150</span></li>
                        <li className="flex justify-between"><span>Pilot Light</span> <span className="font-bold">$100-180</span></li>
                        <li className="flex justify-between"><span>Ignition Module</span> <span className="font-bold">$120-250</span></li>
                        <li className="flex justify-between"><span>Thermostat</span> <span className="font-bold">$120-220</span></li>
                        <li className="flex justify-between"><span>Full Service</span> <span className="font-bold">$180-280</span></li>
                      </ul>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Installation &amp; Maintenance</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>System Diagnosis</span> <span className="font-bold">$70-150</span></li>
                        <li className="flex justify-between"><span>Annual Service</span> <span className="font-bold">$180-250</span></li>
                        <li className="flex justify-between"><span>New Installation</span> <span className="font-bold">$1,500-3,500</span></li>
                        <li className="flex justify-between"><span>Emergency After-Hours</span> <span className="font-bold">+$50-100</span></li>
                        <li className="flex justify-between"><span>Same-Day Service</span> <span className="font-bold">Available</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service Area Details */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Why Choose Us for Essendon Fields Gas Heating</h3>
                  <div className="grid md:grid-cols-2 gap-[20px] text-[14px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Local Expertise</h4>
                      <p>We know Essendon Fields neighborhoods and can respond quickly to your heating needs. Our local presence means fast service and personal attention.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Licensed &amp; Certified</h4>
                      <p>All our technicians are fully licensed VBA gas fitters. Every job is backed by proper certification and complies with Victorian safety standards.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Transparent Pricing</h4>
                      <p>We provide upfront quotes before starting work. No hidden fees, no surprises. You know exactly what you'll pay.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">24/7 Emergency Service</h4>
                      <p>When your heating fails in winter, we're here to help. Emergency response available any time, including weekends and holidays.</p>
                    </div>
                  </div>
                </div>
        
                {/* Local Pricing Grid */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Gas Heater Service Costs in Essendon Fields</h3>
                  <div className="grid md:grid-cols-2 gap-[20px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Common Repairs</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>Service Call</span> <span className="font-bold">$80-150</span></li>
                        <li className="flex justify-between"><span>Pilot Light</span> <span className="font-bold">$100-180</span></li>
                        <li className="flex justify-between"><span>Ignition Module</span> <span className="font-bold">$120-250</span></li>
                        <li className="flex justify-between"><span>Thermostat</span> <span className="font-bold">$120-220</span></li>
                        <li className="flex justify-between"><span>Full Service</span> <span className="font-bold">$180-280</span></li>
                      </ul>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold text-[16px] text-[#092a66] mb-[12px]">Installation &amp; Maintenance</h4>
                      <ul className="space-y-[8px] text-[14px]">
                        <li className="flex justify-between"><span>System Diagnosis</span> <span className="font-bold">$70-150</span></li>
                        <li className="flex justify-between"><span>Annual Service</span> <span className="font-bold">$180-250</span></li>
                        <li className="flex justify-between"><span>New Installation</span> <span className="font-bold">$1,500-3,500</span></li>
                        <li className="flex justify-between"><span>Emergency After-Hours</span> <span className="font-bold">+$50-100</span></li>
                        <li className="flex justify-between"><span>Same-Day Service</span> <span className="font-bold">Available</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service Area Details */}
                <div className="mt-[40px]">
                  <h3 className="ttitle text-[24px] md:text-[32px] mb-[24px]">Why Choose Us for Essendon Fields Gas Heating</h3>
                  <div className="grid md:grid-cols-2 gap-[20px] text-[14px]">
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Local Expertise</h4>
                      <p>We know Essendon Fields neighborhoods and can respond quickly to your heating needs. Our local presence means fast service and personal attention.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Licensed &amp; Certified</h4>
                      <p>All our technicians are fully licensed VBA gas fitters. Every job is backed by proper certification and complies with Victorian safety standards.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">Transparent Pricing</h4>
                      <p>We provide upfront quotes before starting work. No hidden fees, no surprises. You know exactly what you'll pay.</p>
                    </div>
                    <div className="border border-[#e2e8f4] rounded-[8px] p-[20px]">
                      <h4 className="font-bold mb-[12px] text-[#092a66]">24/7 Emergency Service</h4>
                      <p>When your heating fails in winter, we're here to help. Emergency response available any time, including weekends and holidays.</p>
                    </div>
                  </div>
                </div>
        <div className="section__inner bg-no-repeat bg-center lazyload"
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
