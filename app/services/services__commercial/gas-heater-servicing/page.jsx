"use client";
// Styles
import servicingStyles from "./GasHeaterServicing.module.css";
// Sections
import PageTitle from "../../../_components/Common/PageTitle";
import SectionTitle from "../../../_components/Common/SectionTitle";
import LogoPartners from "../../../_components/Common/LogoPartners";
import { GasHeaterServicingTestimonials } from "./GasHeaterServicingTestimonials";
// Layout
import Image from "next/image";
// Form
import FormAside from "../../../_components/ServicesSubPages/FormAside";
// Data
import { ReasonsListData } from "../../../_components/Services/AsideReasonsListData";
// React
import { useState } from "react";

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const IconCO = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M17 19a7 7 0 110 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="33" cy="24" r="4" stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);
const IconBurner = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <ellipse cx="24" cy="34" rx="14" ry="5" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M14 34V22a10 10 0 0120 0v12" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M20 18c0 3 4 5 4 8M24 18c0 3 4 5 4 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconGauge = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M8 36a16 16 0 1132 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 20v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="32" r="2.5" fill="currentColor"/>
    <path d="M14 28l3 3M34 28l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconFan = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M24 20c0-6 4-10 8-8s2 10-4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M27.4 26c5.2 3 7 8 4.2 10.4s-9.4-.6-9.4-7.4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20.6 26c-5.2 3-9.4 1.6-9.4-2s4-8 9.4-4.6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconFilter = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M8 14h32l-12 14v10l-8-4V28L8 14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M19 24h10M21 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconReport = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M17 16h14M17 22h14M17 28h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M29 32l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCheckSm = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconWarning = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="8" cy="15" r="1.2" fill="currentColor"/>
    <circle cx="12" cy="15" r="1.2" fill="currentColor"/>
    <circle cx="16" cy="15" r="1.2" fill="currentColor"/>
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

// ── Hero Scheduling Form ──────────────────────────────────────────────────────
function HeroScheduleForm() {
  const [data, setData] = useState({ name: "", phone: "", date: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.phone) return;
    const subject = encodeURIComponent("Gas Heater Service Booking Request");
    const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nPreferred Date/Time: ${data.date || "Flexible"}`);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    setData({ name: "", phone: "", date: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <div suppressHydrationWarning>
        {sent && (
          <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "12px 16px", marginBottom: "14px", color: "#fff", fontSize: "14px", fontWeight: 600 }}>
            ✓ Booking request sent! We&apos;ll confirm within 2 hours.
          </div>
        )}
        <div className="form__holder">
          <input type="text" autoComplete="name" className="form__control" placeholder="Your Name *" name="name" value={data.name} onChange={handleChange} required />
        </div>
        <div className="form__holder">
          <input type="tel" autoComplete="tel" className="form__control" placeholder="Phone Number *" name="phone" value={data.phone} onChange={handleChange} required />
        </div>
        <div className="form__holder">
          <input type="text" className="form__control" placeholder="Preferred Date / Time (optional)" name="date" value={data.date} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn__type2" style={{ width: "100%", justifyContent: "center" }}>
          <span>Book Your Annual Service</span>
        </button>
      </div>
    </form>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
const faqData = [
  {
    q: "How often should I get my gas heater serviced?",
    a: "Energy Safe Victoria recommends servicing all gas heaters at least every two years. However, annual servicing is strongly recommended for ducted systems, older heaters (10+ years), or any household with young children or elderly residents. Regular servicing catches problems early and keeps your heater running at peak efficiency.",
  },
  {
    q: "What is the difference between a service and a repair?",
    a: "A service is a scheduled, preventive maintenance visit: cleaning, testing, calibrating, and inspecting your heater while it is still working. A repair is a reactive fix after something has broken. Regular servicing dramatically reduces the need for repairs by catching worn or failing parts before they cause a breakdown.",
  },
  {
    q: "How much does a routine gas heater service cost in Melbourne?",
    a: "Our standard once-off tune-up service is flat-rate with no hidden call-out fees — pricing is disclosed upfront before any work begins. Our VIP annual maintenance plan costs less than a single repair call-out and includes priority booking, reminders, and 10% off any future repairs.",
  },
  {
    q: "Will servicing my heater actually reduce my gas bill?",
    a: "Yes — significantly. A dirty burner, clogged heat exchanger, and incorrectly calibrated gas pressure all force the heater to run longer to achieve the same output, burning more gas. After a professional clean and tune-up, most customers report a noticeable reduction in their gas usage during the following winter season.",
  },
  {
    q: "Do you provide a service report for my warranty records?",
    a: "Absolutely. Every service visit includes a detailed written service report documenting all inspections, measurements, CO test results, and any work performed. Most manufacturer warranties require proof of periodic professional servicing — our reports are accepted by all major brands including Brivis, Rinnai, Braemar, Bonaire, and Vulcan.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={servicingStyles.faq__list}>
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`${servicingStyles.faq__item} ${openIndex === i ? servicingStyles.faq__item_open : ""}`}
        >
          <button
            className={servicingStyles.faq__question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className={servicingStyles.faq__icon}>{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className={servicingStyles.faq__answer}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GasHeaterServicing() {
  return (
    <>
      <PageTitle dataTitle="Commercial Gas Heater Servicing Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section className={servicingStyles.hero}>
          <div className="container container__fluid">
            <div className={servicingStyles.hero__grid}>
              {/* Left: copy */}
              <div>
                <div className="blocktitle__subtitle blocktitle__subtitle relative" style={{ marginBottom: "12px" }}>
                  commercial gas heater servicing melbourne
                </div>
                <h1 className={servicingStyles.hero__h1}>
                  Comprehensive Commercial Gas Heater Service &amp; Maintenance Melbourne
                </h1>
                <p className={servicingStyles.hero__sub}>
                  Maximize efficiency, lower your energy bills, and keep your staff and occupants safe with our comprehensive annual gas heater servicing — performed by fully  licensed gas fitters.
                </p>
                <div className={servicingStyles.hero__ctas}>
                  <a href="tel:0405133761" className="btn btn__type2">
                    <span>Book Your Annual Service</span>
                  </a>
                  
                </div>
                <div className={servicingStyles.hero__trust}>
                  <div className={servicingStyles.hero__trustbadge}>
                    <IconShield />
                    <span> Licensed</span>
                  </div>
                  <div className={servicingStyles.hero__trustbadge}>
                    <IconShield />
                    <span>Energy Safe Victoria</span>
                  </div>
                  <div className={`${servicingStyles.hero__trustbadge} ${servicingStyles.hero__trustbadge_green}`}>
                    <IconCheck />
                    <span>Fully Insured &amp; Licensed</span>
                  </div>
                </div>
              </div>

              {/* Right: quick-quote form */}
              <div className={servicingStyles.hero__formcard}>
                <div className={servicingStyles.hero__formcard_inner}>
                  <div className={servicingStyles.hero__formtitle}>Get a Free Quote</div>
                  <p className={servicingStyles.hero__formsub}>Same-day response · No obligation</p>
                  <FormAside buttonText="Book Your Annual Service" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. HIDDEN DANGER HOOK ────────────────────────────────────── */}
        <section className={`section__inner ${servicingStyles.danger_section}`}>
          <div className="container container__fluid">
            <div className={servicingStyles.danger__grid}>
              <div className={servicingStyles.danger__img_wrap}>
                <Image
                  src="/images/home__tabimg02.jpg"
                  width={560}
                  height={420}
                  style={{ objectFit: "cover" }}
                  quality={70}
                  alt="unserviced gas heater energy cost Melbourne"
                  className={servicingStyles.rounded_img}
                />
                <div className={servicingStyles.danger__badge}>
                  <span className={servicingStyles.danger__badge_num}>30%</span>
                  <span className={servicingStyles.danger__badge_text}>Higher Gas Bills Unserviced</span>
                </div>
              </div>
              <div className={servicingStyles.danger__copy}>
                <SectionTitle
                  dataSubtitle="hidden costs"
                  dataTitle="Is Your Gas Heater Secretly Costing You Money?"
                />
                <p>
                  An unserviced gas heater works significantly harder to deliver the same warmth. Layers of dust on the heat exchanger act as insulation — forcing the burner to run longer and burn more gas to achieve your set temperature. Most Melbourne businesses see their gas bills creep up every winter without suspecting their heating system as the culprit.
                </p>
                <p>
                  The financial cost is only part of the story. Dust and debris accumulation inside a gas heater is also a leading cause of carbon monoxide (CO) spillage — an odourless, invisible gas that is lethal in enclosed spaces. Energy Safe Victoria (ESV) records dozens of CO incidents in Victoria every year linked directly to poorly maintained gas appliances.
                </p>
                <div className={servicingStyles.danger__warning}>
                  <span className={servicingStyles.danger__warning_icon}><IconWarning /></span>
                  <p>
                    <strong>Silent Warning:</strong> Carbon monoxide has no smell and no colour. A heater that appears to be &ldquo;working fine&rdquo; can be leaking dangerous levels of CO into your living room right now. Annual servicing includes mandatory CO spillage testing on every visit.
                  </p>
                </div>
                <div className={servicingStyles.stat__row}>
                  <div className={servicingStyles.stat__item}>
                    <span className={servicingStyles.stat__num}>30%</span>
                    <span>Avg. energy wasted by unserviced heaters</span>
                  </div>
                  <div className={servicingStyles.stat__item}>
                    <span className={servicingStyles.stat__num}>5+ Yrs</span>
                    <span>Lifespan extension from regular servicing</span>
                  </div>
                  <div className={servicingStyles.stat__item}>
                    <span className={servicingStyles.stat__num}>2 Yrs</span>
                    <span>ESV&apos;s maximum recommended service interval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BENTO GRID — 15-POINT TUNE-UP ────────────────────────── */}
        <section className={`section__inner base__bg ${servicingStyles.bento_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="what we do"
              dataTitle="Our 15-Point Gas Heater Tune-Up"
              dataMaxWidth="580px"
            />
            <div className={servicingStyles.bento__grid}>

              {/* Featured — CO Test */}
              <div className={`${servicingStyles.bento__card} ${servicingStyles.bento__card_featured}`}>
                <div className={servicingStyles.bento__card_img}>
                  <Image
                    src="/images/services/tab-img01.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={65}
                    alt="carbon monoxide spillage test Melbourne gas heater service"
                  />
                  <div className={servicingStyles.bento__card_overlay} />
                </div>
                <div className={servicingStyles.bento__card_content}>
                  <div className={servicingStyles.bento__icon}><IconCO /></div>
                  <h3 className={servicingStyles.bento__title}>Carbon Monoxide (CO) Spillage Test</h3>
                  <p className={servicingStyles.bento__text}>
                    Mandatory ESV-recommended CO testing on every visit. We measure ambient CO levels, check flue integrity, and certify your workplace safe — documented in a written report.
                  </p>
                  <ul className={servicingStyles.bento__checklist}>
                    <li><IconCheckSm />Ambient CO level measurement</li>
                    <li><IconCheckSm />Flue integrity &amp; spillage check</li>
                    <li><IconCheckSm />Written ESV-compliant safety report</li>
                    <li><IconCheckSm />Gas appliance compliance certificate</li>
                  </ul>
                  <span className={servicingStyles.bento__tag}>Safety Critical</span>
                </div>
              </div>

              {/* Burner & Heat Exchanger */}
              <div className={`${servicingStyles.bento__card} ${servicingStyles.bento__card_standard}`}>
                <div className={servicingStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img02.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas heater burner heat exchanger cleaning" />
                  <div className={servicingStyles.bento__card_overlay} />
                </div>
                <div className={servicingStyles.bento__card_standard && servicingStyles.bento__icon_wrap} style={{ position: "relative", zIndex: 2, padding: "24px 24px 0", color: "rgba(255,255,255,0.9)" }}>
                  <IconBurner />
                </div>
                <h3 className={servicingStyles.bento__title} style={{ padding: "10px 24px 0", position: "relative", zIndex: 2 }}>Burner &amp; Heat Exchanger Cleaning</h3>
                <p className={servicingStyles.bento__text} style={{ padding: "8px 24px 0", position: "relative", zIndex: 2 }}>
                  Complete combustion chamber clean. Removes carbon deposits, dust, and debris that reduce heat output and cause dangerous CO production.
                </p>
                <div style={{ padding: "12px 24px 24px", position: "relative", zIndex: 2 }}>
                  <span className={servicingStyles.bento__tag_green}>Efficiency Boost</span>
                </div>
              </div>

              {/* Gas Pressure */}
              <div className={`${servicingStyles.bento__card} ${servicingStyles.bento__card_standard}`}>
                <div className={servicingStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img03.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas pressure calibration Melbourne" />
                  <div className={servicingStyles.bento__card_overlay} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 24px 0", color: "rgba(255,255,255,0.9)" }}>
                  <IconGauge />
                </div>
                <h3 className={servicingStyles.bento__title} style={{ padding: "10px 24px 0", position: "relative", zIndex: 2 }}>Gas Pressure &amp; Flow Calibration</h3>
                <p className={servicingStyles.bento__text} style={{ padding: "8px 24px 24px", position: "relative", zIndex: 2 }}>
                  Verify and adjust supply pressure to manufacturer specification. Correct gas pressure is essential for both efficiency and safe combustion.
                </p>
              </div>

              {/* Fan Motor */}
              <div className={`${servicingStyles.bento__card} ${servicingStyles.bento__card_standard}`}>
                <div className={servicingStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img04.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas heater fan motor lubrication service" />
                  <div className={servicingStyles.bento__card_overlay} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 24px 0", color: "rgba(255,255,255,0.9)" }}>
                  <IconFan />
                </div>
                <h3 className={servicingStyles.bento__title} style={{ padding: "10px 24px 0", position: "relative", zIndex: 2 }}>Fan Motor Lubrication &amp; Dust Removal</h3>
                <p className={servicingStyles.bento__text} style={{ padding: "8px 24px 24px", position: "relative", zIndex: 2 }}>
                  Fan motor bearings lubricated, blades cleaned, and airflow tested. Prevents premature motor failure and noisy operation.
                </p>
              </div>

              {/* Filter + Report row */}
              <div className={`${servicingStyles.bento__card} ${servicingStyles.bento__card_standard}`}>
                <div className={servicingStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img05.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas heater filter replacement Melbourne" />
                  <div className={servicingStyles.bento__card_overlay} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 24px 0", color: "rgba(255,255,255,0.9)" }}>
                  <IconFilter />
                </div>
                <h3 className={servicingStyles.bento__title} style={{ padding: "10px 24px 0", position: "relative", zIndex: 2 }}>Filter Inspection &amp; Replacement</h3>
                <p className={servicingStyles.bento__text} style={{ padding: "8px 24px 24px", position: "relative", zIndex: 2 }}>
                  Air filters inspected, cleaned or replaced. Blocked filters restrict airflow, reduce output, and dramatically increase energy consumption.
                </p>
              </div>

              <div className={`${servicingStyles.bento__card} ${servicingStyles.bento__card_standard}`}>
                <div className={servicingStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img06.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas heater service report warranty Melbourne" />
                  <div className={servicingStyles.bento__card_overlay} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 24px 0", color: "rgba(255,255,255,0.9)" }}>
                  <IconReport />
                </div>
                <h3 className={servicingStyles.bento__title} style={{ padding: "10px 24px 0", position: "relative", zIndex: 2 }}>Detailed Service Report Provided</h3>
                <p className={servicingStyles.bento__text} style={{ padding: "8px 24px 0", position: "relative", zIndex: 2 }}>
                  Full written report documenting every check, measurement, and action taken — accepted by all major brand warranty departments.
                </p>
                <div style={{ padding: "12px 24px 24px", position: "relative", zIndex: 2 }}>
                  <span className={servicingStyles.bento__tag_green}>Warranty Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. ESV "2-YEAR RULE" SPOTLIGHT ──────────────────────────── */}
        <section className={servicingStyles.esv_section}>
          <div className="container container__fluid">
            <div className={servicingStyles.esv__grid}>
              <div className={servicingStyles.esv__copy}>
                <SectionTitle
                  dataSubtitle="compliance & safety"
                  dataTitle="Energy Safe Victoria's Golden Rule"
                  dataMaxWidth="500px"
                />
                <div className={servicingStyles.esv__rule_badge}>
                  <span className={servicingStyles.esv__rule_badge_num}>2</span>
                  <span className={servicingStyles.esv__rule_badge_text}>Year Maximum Service Interval — ESV Recommendation</span>
                </div>
                <p>
                  The Victorian Government&apos;s Energy Safe Victoria strictly recommends servicing all gas heaters at least once every two years. For ducted systems and older units, annual servicing is considered best practice.
                </p>
                <h3 className={servicingStyles.esv__reason_title}>
                  <IconShield /> Why Regular Maintenance Matters:
                </h3>
                <ul className={servicingStyles.esv__reasons}>
                  <li>
                    <IconCheck />
                    <span><strong>Prevents lethal Carbon Monoxide leaks</strong> — CO from a cracked heat exchanger is odourless. The only way to detect it is professional testing.</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span><strong>Maintains manufacturer warranties</strong> — most brands (Brivis, Rinnai, Braemar, Bonaire) require proof of periodic professional servicing to honour warranty claims.</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span><strong>Extends heater lifespan by 5+ years</strong> — a properly maintained gas heater can last 20+ years. Neglected units typically fail within 10–12 years.</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span><strong>Reduces energy bills by up to 30%</strong> — a clean, correctly calibrated heater uses significantly less gas to achieve the same output.</span>
                  </li>
                </ul>
                <a href="tel:0405133761" className={servicingStyles.esv__cta}>
                  Book a Compliance Service Now
                </a>
              </div>
              <div className={servicingStyles.esv__img_wrap}>
                <Image
                  src="/images/about_img01.jpg"
                  width={560}
                  height={460}
                  style={{ objectFit: "cover" }}
                  quality={70}
                  alt="Energy Safe Victoria gas heater servicing compliance Melbourne"
                  className={servicingStyles.rounded_img}
                />
                <div className={servicingStyles.esv__img_badge}>
                  <span className={servicingStyles.esv__img_badge_num}>ESV</span>
                  <span className={servicingStyles.esv__img_badge_text}>Compliant Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

     

        {/* ── 6. WHY TRUST US ──────────────────────────────────────────── */}
        <section className={`section__inner ${servicingStyles.trust_section}`}>
          <div className="container container__fluid">
            <div className={servicingStyles.trust__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="why choose us"
                  dataTitle="Melbourne's Heating Maintenance Specialists"
                  dataMaxWidth="460px"
                />
                <p>
                  Every service visit runs on time, every technician is fully licensed, and every job ends with a clean premises and a written service report. We don&apos;t use vague pricing — our flat-rate servicing fees are quoted upfront before any work begins.
                </p>
                <a href="tel:0405133761" className={`btn btn__type2 ${servicingStyles.trust__cta}`}>
                  <span>Book a Licensed Gas Fitter</span>
                </a>
              </div>
              <div className={servicingStyles.trust__right}>
                {ReasonsListData.map((item, i) => (
                  <div key={item.id} className={servicingStyles.reason__card}>
                    <div className={servicingStyles.reason__num}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={servicingStyles.reason__icon}><IconCheck /></div>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. BRANDS WE SERVICE ─────────────────────────────────────── */}
        <section className="section__inner bg-no-repeat bg-center lazyload" data-bg="/images/extra-bg01.png">
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="authorized servicing"
              dataTitle="Authorised Servicing for All Leading Brands"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </section>

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────────── */}
        <section className={`section__inner ${servicingStyles.testimonials_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="real customer stories"
              dataTitle="Trusted by Melbourne Businesses"
              dataMaxWidth="580px"
              dataAddClass="text-center"
            />
          </div>
          <div style={{ marginTop: "48px" }}>
            <GasHeaterServicingTestimonials />
          </div>
        </section>

        {/* ── 9. SERVICE AREAS ─────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${servicingStyles.areas_section}`}>
          <div className="container container__fluid">
            <div className={servicingStyles.areas__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="coverage"
                  dataTitle="Covering All Melbourne Suburbs"
                  dataMaxWidth="380px"
                />
                <p>
                  Our service technicians are stationed across Greater Melbourne so we reach your suburb faster than any other provider. Eastern, Northern, South-Eastern, and Bayside — we cover it all.
                </p>
                <a href="/coverage/" className={`btn ${servicingStyles.areas__btn}`}>
                  <span>View Full Coverage Map</span>
                </a>
              </div>
              <div className={servicingStyles.areas__columns}>
                {[
                  {
                    region: "Eastern Suburbs",
                    suburbs: ["Doncaster", "Box Hill", "Ringwood", "Croydon", "Boronia", "Bayswater", "Ferntree Gully", "Lilydale"],
                  },
                  {
                    region: "Northern Suburbs",
                    suburbs: ["Bundoora", "Epping", "Broadmeadows", "Greensborough", "Essendon", "Fawkner", "Keilor", "Briar Hill"],
                  },
                  {
                    region: "South-Eastern Suburbs",
                    suburbs: ["Frankston", "Dandenong", "Berwick", "Hallam", "Clayton", "Cheltenham", "Bentleigh", "Hampton Park"],
                  },
                  {
                    region: "Bayside & Inner South",
                    suburbs: ["Brighton", "Hampton", "Beaumaris", "Black Rock", "Heatherton", "Highett", "Caulfield", "Chelsea"],
                  },
                ].map((group) => (
                  <div key={group.region} className={servicingStyles.areas__col}>
                    <h4 className={servicingStyles.areas__region}>{group.region}</h4>
                    <ul>
                      {group.suburbs.map((s) => {
                        const slugified = s.toLowerCase().replace(/\s+/g, '-');
                        return <li key={s}><a href={`/coverage/${slugified}/`}>{s}</a></li>;
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ───────────────────────────────────────────────────── */}
        <section className={`section__inner ${servicingStyles.faq_section}`}>
          <div className="container container__fluid">
            <div className={servicingStyles.faq__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="your questions answered"
                  dataTitle="Gas Heater Servicing FAQs"
                  dataMaxWidth="420px"
                />
                <p>
                  Have a question not listed here? Call us on{" "}
                  <a href="tel:0405133761" style={{ color: "var(--base-color)", fontWeight: 700 }}>
                    0405 133 761
                  </a>{" "}
                  — we&apos;re happy to give free advice.
                </p>
                <div className={servicingStyles.faq__img}>
                  <Image
                    src="/images/about_img03.jpg"
                    width={420}
                    height={320}
                    style={{ objectFit: "cover" }}
                    quality={65}
                    alt="gas heater servicing FAQ Melbourne"
                    className={servicingStyles.rounded_img}
                  />
                </div>
              </div>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── 11. FINAL CTA ─────────────────────────────────────────────── */}
        <section className={servicingStyles.final_cta}>
          <div className={servicingStyles.final_cta__bg}>
            <Image
              src="/images/bg-01.jpg"
              fill
              style={{ objectFit: "cover" }}
              quality={60}
              alt="book gas heater service Melbourne"
            />
            <div className={servicingStyles.final_cta__overlay} />
          </div>
          <div className={`container container__fluid ${servicingStyles.final_cta__inner}`}>
            <div>
              <h2 className={servicingStyles.final_cta__title}>
                Ready to Prep Your Heater for Winter?
              </h2>
              <p className={servicingStyles.final_cta__sub}>
                Don&apos;t wait until the cold snaps hit. Book your comprehensive gas heater service now and enjoy a warmer, safer, and more efficient workplace all winter long.
              </p>
              <a href="tel:0405133761" className="btn btn__type2">
                <span>Book Your Service Today</span>
              </a>
              <div className={servicingStyles.final_cta__trust}>
                {["Flat-rate upfront pricing", "CO safety test included", "Service report provided", "Warranty-compliant"].map((t) => (
                  <div key={t} className={servicingStyles.final_cta__trustitem}>
                    <IconCheck /><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className={servicingStyles.final_cta__formcard}>
                <h3 className={servicingStyles.final_cta__formtitle}>Schedule My Service</h3>
                <FormAside buttonText="Schedule My Service" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

