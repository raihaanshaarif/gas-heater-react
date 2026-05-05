"use client";
//Style
import styles from "../../../_components/ServicesSubPages/ServicesSubPages.module.css";
import installStyles from "./GasHeaterInstallation.module.css";
//Import Sections
import PageTitle from "../../../_components/Common/PageTitle";
import SectionTitle from "../../../_components/Common/SectionTitle";
import LogoPartners from "../../../_components/Common/LogoPartners";
import GasHeaterTestimonials from "./GasHeaterTestimonials";
//Import Layout
import Image from "next/image";
import PromoLayout from "../../../_components/ServicesSubPages/PromoLayout";
//Import Aside
import FormAside from "../../../_components/ServicesSubPages/FormAside";
//Import Data
import { ReasonsListData } from "../../../_components/Services/AsideReasonsListData";
// React
import { useState } from "react";

// ── inline SVG icons ──────────────────────────────────────────────────────────
const IconDucted = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="4" y="10" width="40" height="10" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M10 20v14a2 2 0 002 2h24a2 2 0 002-2V20" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M18 36v4M30 36v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="15" r="2.5" fill="currentColor"/>
  </svg>
);
const IconWall = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="8" y="12" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 12V8M32 12V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 28h16M20 22h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconLogFire = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M24 6c0 6-8 10-8 18a8 8 0 0016 0c0-4-4-6-4-10-2 2-4 6-4 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 42h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="12" y="34" width="24" height="8" rx="2" stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);
const IconSpace = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="6" y="16" width="36" height="20" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M14 36v4M34 36v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M6 24h36" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="16" cy="20" r="2" fill="currentColor"/>
    <circle cx="24" cy="20" r="2" fill="currentColor"/>
    <circle cx="32" cy="20" r="2" fill="currentColor"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
const faqData = [
  {
    q: "How long does it take to install a new gas heater?",
    a: "Most standard wall heater or space heater installations are completed within 2–4 hours. Full ducted gas heating system installations typically take 1–2 days depending on home size and existing ductwork.",
  },
  {
    q: "Do I need a Certificate of Compliance for my new heater?",
    a: "Yes — and we provide it. A Certificate of Compliance (CoC) is legally required for all new gas appliance installations in Victoria under Gas Safety (Installation) Regulations. We issue yours upon job completion.",
  },
  {
    q: "Can I replace my old wall heater with a ducted system?",
    a: "Absolutely. Many Melbourne homeowners make this upgrade. We assess your existing ductwork (if any), recommend the correctly-sized system, and handle the full installation from start to finish.",
  },
  {
    q: "How much does gas heater installation cost in Melbourne?",
    a: "Costs vary by system type: wall heater replacements typically start from $800–$1,200 installed. Full ducted systems range from $3,500–$7,000+ depending on the brand and home size. We provide free upfront quotes with no hidden fees.",
  },
  {
    q: "How do I know what size heater my home needs?",
    a: "Sizing depends on floor area, insulation rating, ceiling height, and climate zone. Our licensed gas fitters perform a free site assessment and use Australian Standard AS/NZS 4064 guidelines to recommend the right capacity for your home.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={installStyles.faq__list}>
      {faqData.map((item, i) => (
        <div key={i} className={`${installStyles.faq__item} ${openIndex === i ? installStyles.faq__item_open : ""}`}>
          <button
            className={installStyles.faq__question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className={installStyles.faq__icon}>{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className={installStyles.faq__answer}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GasHeaterInstallation() {
  return (
    <>
      <PageTitle dataTitle="Gas Heater Installation" />
      <main id="tt-pageContent" className="overflow-hidden">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section className={installStyles.hero}>
          <div className="container container__fluid">
            <div className={installStyles.hero__grid}>
              {/* Left copy */}
              <div className={installStyles.hero__copy}>
                <div className="blocktitle__subtitle blocktitle__subtitle relative" style={{marginBottom:"12px"}}>gas heater installation</div>
                <h1 className={installStyles.hero__h1}>
                  Professional Gas Heater Installation Melbourne
                </h1>
                <p className={installStyles.hero__sub}>
                  Fast, compliant installations by licensed gas fitters to keep your home warm through the bitter Melbourne winter.
                </p>
                <div className={installStyles.hero__ctas}>
                  <a href="tel:0405133761" className="btn btn__type2">
                    <span>Get a Free Same-Day Quote</span>
                  </a>
                  <a href="tel:0405133761" className={installStyles.hero__callbtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                    Call 0405 133 761
                  </a>
                </div>
                {/* Trust badges */}
                <div className={installStyles.hero__trust}>
                  <div className={installStyles.hero__trustbadge}>
                    <IconShield />
                    <span>VBA Licensed</span>
                  </div>
                  <div className={installStyles.hero__trustbadge}>
                    <IconShield />
                    <span>Energy Safe Victoria</span>
                  </div>
                  <div className={installStyles.hero__trustbadge}>
                    <IconCheck />
                    <span>Certificate of Compliance Issued</span>
                  </div>
                </div>
              </div>

              {/* Right: glassmorphism quick-quote form */}
              <div className={installStyles.hero__formcard}>
                <div className={installStyles.hero__formcard_inner}>
                  <div className={installStyles.hero__formtitle}>Get a Free Quote</div>
                  <p className={installStyles.hero__formsub}>Same-day response · No obligation</p>
                  <FormAside />
                </div>
                {/* Background image behind the glass card */}
                <div className={installStyles.hero__formcard_bg}>
                  <Image
                    src="/images/services/services_img01.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={60}
                    alt="gas heater installation Melbourne"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. MELBOURNE PROBLEM ─────────────────────────────────────── */}
        <section className={`section__inner ${installStyles.melbourne_section}`}>
          <div className="container container__fluid">
            <div className={installStyles.melbourne__grid}>
              <div className={installStyles.melbourne__img}>
                <Image
                  src="/images/home__tabimg01.jpg"
                  width={560}
                  height={400}
                  style={{ objectFit: "cover" }}
                  quality={70}
                  alt="cold Melbourne winter home heating"
                  className={installStyles.rounded_img}
                />
              </div>
              <div className={installStyles.melbourne__copy}>
                <SectionTitle
                  dataSubtitle="why Melbourne needs it"
                  dataTitle="Don't Let the Unpredictable Melbourne Weather Get You Down"
                />
                <p>
                  Melbourne&apos;s weather is legendary for its volatility — a 28°C afternoon can plunge below 8°C by evening. Winters in Victoria are bitterly cold, with temperatures regularly dropping to 3–5°C overnight across the Eastern, Northern, and South-Eastern suburbs. An inefficient or ageing heater isn&apos;t just uncomfortable; it pushes energy bills higher every month.
                </p>
                <p className="indent__top">
                  A modern, correctly-sized gas heating system gives your family reliable, whole-home warmth the moment you need it — at a fraction of the running cost of older units. Whether you&apos;re replacing a 15-year-old wall heater or upgrading to a full ducted system, our licensed gas fitters ensure the job is done right the first time, safely and to Australian Standards.
                </p>
                <div className={installStyles.stat__row}>
                  <div className={installStyles.stat__item}>
                    <span className={installStyles.stat__num}>3°C</span>
                    <span>Average Melbourne winter overnight low</span>
                  </div>
                  <div className={installStyles.stat__item}>
                    <span className={installStyles.stat__num}>30%</span>
                    <span>Energy saving with a modern rated system</span>
                  </div>
                  <div className={installStyles.stat__item}>
                    <span className={installStyles.stat__num}>Same Day</span>
                    <span>Quote turnaround across Melbourne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BENTO GRID ────────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${installStyles.bento_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="what we install"
              dataTitle="Expert Installation for All Gas Heating Systems"
              dataMaxWidth="600px"
            />
            <div className={installStyles.bento__grid}>
              {/* Featured large card */}
              <div className={`${installStyles.bento__card} ${installStyles.bento__card_featured}`}>
                <div className={installStyles.bento__card_img}>
                  <Image
                    src="/images/services/tab-img01.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={65}
                    alt="ducted gas heating installation Melbourne"
                  />
                  <div className={installStyles.bento__card_overlay} />
                </div>
                <div className={installStyles.bento__card_content}>
                  <div className={installStyles.bento__icon}><IconDucted /></div>
                  <h3 className={installStyles.bento__title}>Gas Ducted Heating</h3>
                  <p className={installStyles.bento__text}>
                    Whole-home comfort from a single system. Warm every room via ceiling or floor vents with energy-efficient zone control.
                  </p>
                  <span className={installStyles.bento__tag}>Most Popular</span>
                </div>
              </div>

              {/* Standard cards */}
              <div className={`${installStyles.bento__card} ${installStyles.bento__card_standard}`}>
                <div className={installStyles.bento__icon_wrap}><IconWall /></div>
                <div className={installStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img02.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="wall mounted gas heater installation" />
                  <div className={installStyles.bento__card_overlay} />
                </div>
                <h3 className={installStyles.bento__title}>Wall-Mounted Gas Heaters</h3>
                <p className={installStyles.bento__text}>Space-saving, high-output heaters perfect for living areas, hallways, and bedrooms.</p>
              </div>

              <div className={`${installStyles.bento__card} ${installStyles.bento__card_standard}`}>
                <div className={installStyles.bento__icon_wrap}><IconLogFire /></div>
                <div className={installStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img03.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas log fire installation Melbourne" />
                  <div className={installStyles.bento__card_overlay} />
                </div>
                <h3 className={installStyles.bento__title}>Gas Log Fires</h3>
                <p className={installStyles.bento__text}>Elegant ambience with real warmth. We install gas log fires with full compliance certification.</p>
              </div>

              <div className={`${installStyles.bento__card} ${installStyles.bento__card_standard}`}>
                <div className={installStyles.bento__icon_wrap}><IconSpace /></div>
                <div className={installStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img04.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas space heater convection installation" />
                  <div className={installStyles.bento__card_overlay} />
                </div>
                <h3 className={installStyles.bento__title}>Space & Convection Heaters</h3>
                <p className={installStyles.bento__text}>Reliable and affordable room-by-room heating with fast warm-up times and low running costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. DUCTED SPOTLIGHT ──────────────────────────────────────── */}
        <section className={`section__inner ${installStyles.ducted_section}`}>
          <div className="container container__fluid">
            <div className={installStyles.ducted__grid}>
              <div className={installStyles.ducted__copy}>
                <SectionTitle
                  dataSubtitle="spotlight"
                  dataTitle="Why Melbourne Homeowners Choose Gas Ducted Heating"
                  dataMaxWidth="560px"
                />
                <p>
                  Ducted gas heating delivers consistent, whole-home warmth from a single powerful unit installed in your roof or underfloor space. Hot air is distributed via a network of ceiling or floor vents, meaning every room reaches your chosen temperature fast — without multiple appliances or cold spots.
                </p>
                <h3 className={`ttsubtitle_sm ${installStyles.ducted__subtitle}`}>Benefits of a New Ducted System:</h3>
                <ul className={installStyles.benefit__list}>
                  <li>
                    <span className={installStyles.benefit__icon}><IconCheck /></span>
                    <div>
                      <strong>Whole-house comfort in minutes</strong>
                      <span> — even on Melbourne&apos;s coldest mornings.</span>
                    </div>
                  </li>
                  <li>
                    <span className={installStyles.benefit__icon}><IconCheck /></span>
                    <div>
                      <strong>Zone control</strong>
                      <span> — only heat the rooms you use, reducing energy bills significantly.</span>
                    </div>
                  </li>
                  <li>
                    <span className={installStyles.benefit__icon}><IconCheck /></span>
                    <div>
                      <strong>Seamless integration</strong>
                      <span> — works with your existing ductwork or we design a new layout.</span>
                    </div>
                  </li>
                  <li>
                    <span className={installStyles.benefit__icon}><IconCheck /></span>
                    <div>
                      <strong>Smart thermostat ready</strong>
                      <span> — compatible with Google Home, Alexa, and app control.</span>
                    </div>
                  </li>
                  <li>
                    <span className={installStyles.benefit__icon}><IconCheck /></span>
                    <div>
                      <strong>Adds home value</strong>
                      <span> — ducted heating is a key selling point for Melbourne properties.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={installStyles.ducted__img_wrap}>
                <Image
                  src="/images/services/services_img02.jpg"
                  width={540}
                  height={480}
                  style={{ objectFit: "cover" }}
                  quality={70}
                  alt="gas ducted heating Melbourne home"
                  className={installStyles.rounded_img}
                />
                <div className={installStyles.ducted__badge}>
                  <span className={installStyles.ducted__badge_num}>15+</span>
                  <span className={installStyles.ducted__badge_text}>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROCESS TIMELINE ──────────────────────────────────────── */}
        <section className={`section__inner base__bg ${installStyles.process_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="how we work"
              dataTitle="How We Work: 4 Steps to a Warmer Home"
              dataMaxWidth="560px"
            />
            <div className={installStyles.process__timeline}>
              {[
                {
                  num: "01",
                  title: "Free Site Assessment & Sizing",
                  text: "Our licensed gas fitter visits your home, measures each room, reviews insulation, and determines the exact system size your home needs.",
                  img: "/images/step__img01.png",
                },
                {
                  num: "02",
                  title: "System Selection",
                  text: "We match the right brand and model to your home, lifestyle, and budget — with transparent pricing before any work begins.",
                  img: "/images/step__img02.png",
                },
                {
                  num: "03",
                  title: "Expert Installation by Licensed Gas Fitters",
                  text: "Our VBA-licensed technicians install your system neatly and efficiently, leaving your home clean and tidy.",
                  img: "/images/step__img03.png",
                },
                {
                  num: "04",
                  title: "Safety Testing & Compliance Certificate",
                  text: "Full gas pressure test, flue check, and carbon monoxide test. Your Certificate of Compliance is issued on the day.",
                  img: "/images/step__img01.png",
                },
              ].map((step, i) => (
                <div key={i} className={installStyles.process__step}>
                  <div className={installStyles.process__step_num}>{step.num}</div>
                  <div className={installStyles.process__step_icon}>
                    <Image src={step.img} width={60} height={60} quality={80} alt={step.title} />
                  </div>
                  <h3 className={installStyles.process__step_title}>{step.title}</h3>
                  <p className={installStyles.process__step_text}>{step.text}</p>
                  {i < 3 && <div className={installStyles.process__connector} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. WHY TRUST US ──────────────────────────────────────────── */}
        <section className={`section__inner ${installStyles.trust_section}`}>
          <div className="container container__fluid">
            <div className={installStyles.trust__grid}>
              <div className={installStyles.trust__left}>
                <SectionTitle
                  dataSubtitle="why choose us"
                  dataTitle="6 Reasons We Are Melbourne's Trusted Gas Fitters"
                  dataMaxWidth="480px"
                />
                <p>
                  Every installation we complete is backed by our commitment to safety, quality, and total transparency. We leave your home exactly as we found it — except with a brand-new, fully compliant gas heating system.
                </p>
                <a href="tel:0405133761" className={`btn btn__type2 ${installStyles.trust__cta}`}>
                  <span>Book a Licensed Gas Fitter</span>
                </a>
              </div>
              <div className={installStyles.trust__right}>
                {ReasonsListData.map((item, i) => (
                  <div key={item.id} className={installStyles.reason__card}>
                    <div className={installStyles.reason__num}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={installStyles.reason__icon}><IconCheck /></div>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

     

    

        {/* ── 9. SERVICE AREAS ─────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${installStyles.areas_section}`}>
          <div className="container container__fluid">
            <div className={installStyles.areas__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="where we work"
                  dataTitle="Servicing All Melbourne Suburbs"
                  dataMaxWidth="480px"
                />
                <p>
                  Our licensed gas fitters cover the entire Greater Melbourne area — from the Mornington Peninsula to the Yarra Ranges, and everything in between.
                </p>
                <a href="/coverage" className={`btn ${installStyles.areas__btn}`}>
                  <span>View Full Coverage Map</span>
                </a>
              </div>
              <div className={installStyles.areas__columns}>
                {[
                  {
                    region: "Eastern Suburbs",
                    suburbs: ["Doncaster", "Box Hill", "Ringwood", "Ferntree Gully", "Boronia", "Bayswater", "Croydon", "Lilydale"],
                  },
                  {
                    region: "Northern Suburbs",
                    suburbs: ["Bundoora", "Epping", "Broadmeadows", "Greensborough", "Essendon", "Fawkner", "Keilor", "Briar Hill"],
                  },
                  {
                    region: "South-Eastern Suburbs",
                    suburbs: ["Frankston", "Dandenong", "Berwick", "Hallam", "Clayton", "Cheltenham", "Bentleigh", "Highett"],
                  },
                  {
                    region: "Bayside & Inner South",
                    suburbs: ["Brighton", "Hampton", "Beaumaris", "Black Rock", "Heatherton", "Highett", "Caulfield", "Chelsea"],
                  },
                ].map((group) => (
                  <div key={group.region} className={installStyles.areas__col}>
                    <h4 className={installStyles.areas__region}>{group.region}</h4>
                    <ul>
                      {group.suburbs.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

            {/* ── 8. TESTIMONIALS ──────────────────────────────────────────── */}
        <section className={`section__inner ${installStyles.testimonials_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="real reviews"
              dataTitle="Keeping Melbourne Homes Warm"
              dataMaxWidth="560px"
              dataAddClass="text-center"
            />
          </div>
          <div style={{ marginTop: "48px" }}>
            <GasHeaterTestimonials />
          </div>
        </section>

        {/* ── 10. FAQ ───────────────────────────────────────────────────── */}
        <section className={`section__inner ${installStyles.faq_section}`}>
          <div className="container container__fluid">
            <div className={installStyles.faq__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="common questions"
                  dataTitle="Gas Heater Installation FAQs"
                  dataMaxWidth="440px"
                />
                <p>
                  Can&apos;t find your answer? Call us on{" "}
                  <a href="tel:0405133761" style={{ color: "var(--base-color)", fontWeight: 700 }}>
                    0405 133 761
                  </a>{" "}
                  — we&apos;re always happy to help.
                </p>
                <div className={installStyles.faq__img}>
                  <Image
                    src="/images/about_img02.jpg"
                    width={400}
                    height={320}
                    style={{ objectFit: "cover" }}
                    quality={65}
                    alt="gas heater installation FAQ Melbourne"
                    className={installStyles.rounded_img}
                  />
                </div>
              </div>
              <FAQAccordion />
            </div>
          </div>
        </section>

           {/* ── 7. PARTNER BRANDS ────────────────────────────────────────── */}
        <section
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="../images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="we install"
              dataTitle="We Install Australia's Leading Heating Brands"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </section>

        {/* ── 11. FINAL CTA ─────────────────────────────────────────────── */}
        <section className={installStyles.final_cta}>
          <div className={installStyles.final_cta__bg}>
            <Image
              src="/images/bg-01.jpg"
              fill
              style={{ objectFit: "cover" }}
              quality={60}
              alt="gas heater installation Melbourne background"
            />
            <div className={installStyles.final_cta__overlay} />
          </div>
          <div className={`container container__fluid ${installStyles.final_cta__inner}`}>
            <div className={installStyles.final_cta__copy}>
              <h2 className={installStyles.final_cta__title}>Ready for a Warmer Home?</h2>
              <p className={installStyles.final_cta__sub}>
                Get a free, no-obligation installation quote from Melbourne&apos;s trusted licensed gas fitters. Same-day response guaranteed.
              </p>
              <a href="tel:0405133761" className="btn btn__type2" style={{ marginTop: "24px", display: "inline-flex" }}>
                <span>Call 0405 133 761 Now</span>
              </a>
            </div>
            <div className={installStyles.final_cta__form}>
              <div className={installStyles.final_cta__formcard}>
                <h3 className={installStyles.final_cta__formtitle}>Send Us a Message</h3>
                <FormAside />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
