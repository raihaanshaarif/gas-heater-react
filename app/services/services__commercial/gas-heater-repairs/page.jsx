"use client";
// Styles
import repairStyles from "./GasHeaterRepair.module.css";
// Sections
import PageTitle from "../../../_components/Common/PageTitle";
import SectionTitle from "../../../_components/Common/SectionTitle";
import LogoPartners from "../../../_components/Common/LogoPartners";
import GasHeaterRepairTestimonials from "./GasHeaterRepairTestimonials";
// Layout
import Image from "next/image";
// Form
import FormAside from "../../../_components/ServicesSubPages/FormAside";
// Data
import { ReasonsListData } from "../../../_components/Services/AsideReasonsListData";
// React
import { useState } from "react";

// ── Inline SVG Icons ─────────────────────────────────────────────────────────
const IconDucted = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="4" y="10" width="40" height="10" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M10 20v14a2 2 0 002 2h24a2 2 0 002-2V20" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M18 36v4M30 36v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="15" r="2.5" fill="currentColor"/>
  </svg>
);
const IconCO = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 34l14-20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconWall = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="8" y="12" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 12V8M32 12V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 28h16M20 22h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconIgnition = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M24 6c0 8-10 12-10 22a10 10 0 0020 0c0-6-5-9-5-14-3 3-5 8-5 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="2.5"/>
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
const IconWarning = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconPhone = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

// ── Hero Callback Form ────────────────────────────────────────────────────────
const issueOptions = [
  "No Heat",
  "Strange Smell / Gas Odour",
  "Heater Won't Turn On",
  "Pilot Light Issues",
  "Unusual Noises or Banging",
  "Error Code Showing",
  "Carbon Monoxide Concern",
  "Other Issue",
];

function HeroCallbackForm() {
  const [data, setData] = useState({ name: "", phone: "", issue: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.phone || !data.issue) return;
    const subject = encodeURIComponent(`Urgent Repair Call Back: ${data.issue}`);
    const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nIssue: ${data.issue}`);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    setData({ name: "", phone: "", issue: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <div className="relative" suppressHydrationWarning>
        {sent && (
          <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "12px 16px", marginBottom: "14px", color: "#fff", fontSize: "14px", fontWeight: 600 }}>
            ✓ Request received! We&apos;ll call you back urgently.
          </div>
        )}
        <div className="form__holder">
          <input type="text" autoComplete="name" className="form__control" placeholder="Your Name *" name="name" value={data.name} onChange={handleChange} required />
        </div>
        <div className="form__holder">
          <input type="tel" autoComplete="tel" className="form__control" placeholder="Phone Number *" name="phone" value={data.phone} onChange={handleChange} required />
        </div>
        <div className="form__holder">
          <select name="issue" className="form__control" value={data.issue} onChange={handleChange} required>
            <option value="" disabled>What&apos;s the Issue? *</option>
            {issueOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn__type2" style={{ width: "100%", justifyContent: "center" }}>
          <span>Request Urgent Call Back</span>
        </button>
      </div>
    </form>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
const faqData = [
  {
    q: "Why is my gas heater blowing cold air?",
    a: "Cold air from a gas heater is usually caused by a faulty pilot light, a failed ignitor, a dirty burner, or a tripped safety switch. In some cases a faulty thermocouple or a clogged filter can prevent the burner from igniting. Our technicians carry the most common parts and can usually fix this on the first visit.",
  },
  {
    q: "Should I repair or replace my 15-year-old gas heater?",
    a: "A heater older than 15 years is approaching end-of-life. If the repair cost exceeds 50% of a new system, replacement is usually better value. Modern units are also significantly more energy-efficient — reducing your gas bills. We provide honest advice and upfront quotes so you can make an informed decision.",
  },
  {
    q: "What does it mean if my gas heater smells like burning?",
    a: "A burning smell on first use of the season is often just dust burning off and is usually harmless. However, a persistent burning smell, a sulphur/rotten egg odour, or any smell of gas requires immediate action — turn off the heater, ventilate the area, and call us or your gas supplier immediately. Do not use the heater until inspected.",
  },
  {
    q: "How much does a gas heater repair call-out cost in Melbourne?",
    a: "Our call-out and diagnosis fee is transparent and disclosed upfront before we begin any work. Most standard repairs — ignitor replacement, thermocouple, thermostat — are completed on the day at a fixed price. We do not add hidden extras after the fact.",
  },
  {
    q: "Why won't my gas heater pilot light stay lit?",
    a: "A pilot light that won't stay lit is almost always a failed thermocouple — the safety device that tells the gas valve the pilot is burning. It's a common, affordable repair that we can typically complete same-day. Occasionally a dirty pilot assembly or low gas pressure is the cause — our techs will diagnose accurately before charging.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={repairStyles.faq__list}>
      {faqData.map((item, i) => (
        <div key={i} className={`${repairStyles.faq__item} ${openIndex === i ? repairStyles.faq__item_open : ""}`}>
          <button
            className={repairStyles.faq__question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className={repairStyles.faq__icon}>{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className={repairStyles.faq__answer}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GasHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Commercial Gas Heater Repair Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section className={repairStyles.hero}>
          <div className="container container__fluid">
            <div className={repairStyles.hero__grid}>
              <div>
                <div className="blocktitle__subtitle blocktitle__subtitle relative" style={{ marginBottom: "12px" }}>
                  commercial gas heater repair melbourne
                </div>
                <h1 className={repairStyles.hero__h1}>
                  Expert Commercial Gas Heater Repair Melbourne
                </h1>
                <p className={repairStyles.hero__sub}>
                  Fast, reliable repairs to get your heating back on today. Fully licensed gas fitters equipped to fix breakdowns on the spot — same day, every day.
                </p>
                <div className={repairStyles.hero__ctas}>
                  <a href="tel:0405133761" className="btn btn__type2">
                    <span>Book a Repair Today</span>
                  </a>
                  <a href="tel:0405133761" className={repairStyles.hero__emergencybtn}>
                    <IconPhone />
                    Emergency: 0405 133 761
                  </a>
                </div>
                <div className={repairStyles.hero__trust}>
                  <div className={repairStyles.hero__trustbadge}>
                    <IconShield />
                    <span> Licensed</span>
                  </div>
                  <div className={repairStyles.hero__trustbadge}>
                    <IconShield />
                    <span>Energy Safe Victoria</span>
                  </div>
                  <div className={`${repairStyles.hero__trustbadge} ${repairStyles.hero__trustbadge_sameday}`}>
                    <IconCheck />
                    <span>Same-Day Service Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right: quick-quote form */}
              <div className={repairStyles.hero__formcard}>
                <div className={repairStyles.hero__formcard_inner}>
                  <div className={repairStyles.hero__formtitle}>Get a Free Quote</div>
                  <p className={repairStyles.hero__formsub}>Same-day response · No obligation</p>
                  <FormAside />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. BREAKDOWN PROBLEM ─────────────────────────────────────── */}
        <section className={`section__inner ${repairStyles.breakdown_section}`}>
          <div className="container container__fluid">
            <div className={repairStyles.breakdown__grid}>
              <div className={repairStyles.breakdown__img}>
                <Image
                  src="/images/home__tabimg01.jpg"
                  width={560}
                  height={400}
                  style={{ objectFit: "cover" }}
                  quality={70}
                  alt="broken gas heater Melbourne winter"
                  className={repairStyles.rounded_img}
                />
              </div>
              <div>
                <SectionTitle
                  dataSubtitle="don't wait"
                  dataTitle="Freezing Workplace? Don't Wait for a Fix."
                />
                <p>
                  A broken heater in the middle of a Melbourne winter isn&apos;t just miserable — it&apos;s a genuine safety risk. Ignoring a heater that&apos;s making strange noises, producing unusual smells, or failing to ignite isn&apos;t just uncomfortable. It can mean a carbon monoxide leak is already underway inside your workplace.
                </p>
                <p className="indent__top">
                  Carbon monoxide is odourless and invisible. By the time symptoms appear — headaches, nausea, dizziness — levels are already dangerous. Our licensed gas fitters are on call every day of the year, fully stocked to diagnose and repair your heater on the spot. Don&apos;t wait until it becomes a critical emergency.
                </p>
                <div className={repairStyles.stat__row}>
                  <div className={repairStyles.stat__item}>
                    <span className={repairStyles.stat__num}>2 Hrs</span>
                    <span>Average emergency response across Melbourne</span>
                  </div>
                  <div className={repairStyles.stat__item}>
                    <span className={repairStyles.stat__num}>Same Day</span>
                    <span>Most repairs completed in a single visit</span>
                  </div>
                  <div className={repairStyles.stat__item}>
                    <span className={repairStyles.stat__num}>24/7</span>
                    <span>Emergency repairs available year-round</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BENTO GRID ────────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${repairStyles.bento_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="what we fix"
              dataTitle="Specialised Repairs for All Gas Heating Systems"
              dataMaxWidth="600px"
            />
            <div className={repairStyles.bento__grid}>

              {/* Featured — Ducted */}
              <div className={`${repairStyles.bento__card} ${repairStyles.bento__card_featured}`}>
                <div className={repairStyles.bento__card_img}>
                  <Image src="/images/services/tab-img01.jpg" fill style={{ objectFit: "cover" }} quality={65} alt="ducted gas heater repair Melbourne" />
                  <div className={repairStyles.bento__card_overlay} />
                </div>
                <div className={repairStyles.bento__card_content}>
                  <div className={repairStyles.bento__icon}><IconDucted /></div>
                  <h3 className={repairStyles.bento__title}>Gas Ducted Heater Repairs</h3>
                  <p className={repairStyles.bento__text}>
                    Full-system diagnosis and repair for all ducted gas heating brands — ignitor failure, heat exchanger cracks, zone control faults, and more.
                  </p>
                  <span className={repairStyles.bento__tag}>Most Common</span>
                </div>
              </div>

              {/* CO Testing — amber warning */}
              <div className={`${repairStyles.bento__card} ${repairStyles.bento__card_co}`}>
                <div className={repairStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img02.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="carbon monoxide testing Melbourne" />
                  <div className={repairStyles.bento__card_overlay} />
                </div>
                <div className={repairStyles.bento__icon_wrap} style={{ position: "relative", zIndex: 2, padding: "24px 24px 0", color: "#ffb347" }}>
                  <IconCO />
                </div>
                <h3 className={repairStyles.bento__title} style={{ padding: "0 24px", position: "relative", zIndex: 2, marginTop: "10px" }}>CO Testing &amp; Safety Checks</h3>
                <p className={repairStyles.bento__text} style={{ padding: "0 24px", position: "relative", zIndex: 2 }}>
                  Comprehensive carbon monoxide spillage testing. ESV-recommended every 2 years for all gas heaters.
                </p>
                <div style={{ padding: "12px 24px 24px", position: "relative", zIndex: 2 }}>
                  <span className={repairStyles.bento__tag_warning}>Safety Critical</span>
                </div>
              </div>

              {/* Wall Furnace */}
              <div className={`${repairStyles.bento__card} ${repairStyles.bento__card_standard}`}>
                <div className={repairStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img03.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="wall furnace gas heater repair" />
                  <div className={repairStyles.bento__card_overlay} />
                </div>
                <div className={repairStyles.bento__icon_wrap}><IconWall /></div>
                <h3 className={repairStyles.bento__title} style={{ padding: "0 24px" }}>Wall Furnace &amp; Space Heater Repairs</h3>
                <p className={repairStyles.bento__text} style={{ padding: "0 24px 24px" }}>
                  Repairs for all wall-mounted and freestanding gas space heaters, sourced and fitted same day.
                </p>
              </div>

              {/* Ignition & Thermostat */}
              <div className={`${repairStyles.bento__card} ${repairStyles.bento__card_standard}`}>
                <div className={repairStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img04.jpg" fill style={{ objectFit: "cover" }} quality={60} alt="gas heater ignition thermostat repair" />
                  <div className={repairStyles.bento__card_overlay} />
                </div>
                <div className={repairStyles.bento__icon_wrap}><IconIgnition /></div>
                <h3 className={repairStyles.bento__title} style={{ padding: "0 24px" }}>Ignition &amp; Thermostat Replacements</h3>
                <p className={repairStyles.bento__text} style={{ padding: "0 24px 24px" }}>
                  Faulty thermocouples, ignitors, and thermostats replaced fast — the most common repair, completed in one visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CO SAFETY SPOTLIGHT ───────────────────────────────────── */}
        <section className={repairStyles.co_section}>
          <div className="container container__fluid">
            <div className={repairStyles.co__grid}>
              <div className={repairStyles.co__img_wrap}>
                <Image
                  src="/images/about_img01.jpg"
                  width={560}
                  height={440}
                  style={{ objectFit: "cover" }}
                  quality={70}
                  alt="carbon monoxide safety Melbourne gas heater"
                  className={repairStyles.rounded_img}
                />
                <div className={repairStyles.co__img_badge}>
                  <span className={repairStyles.co__img_badge_icon}>⚠️</span>
                  <span className={repairStyles.co__img_badge_text}>Silent<br/>Killer</span>
                </div>
              </div>
              <div className={repairStyles.co__copy}>
                <SectionTitle
                  dataSubtitle="safety alert"
                  dataTitle="Don't Risk Workplace Safety: Carbon Monoxide Testing"
                  dataMaxWidth="540px"
                />
                <p>
                  Carbon monoxide (CO) is an odourless, colourless gas produced by faulty or poorly-maintained gas appliances. It&apos;s called the &ldquo;silent killer&rdquo; because there are no warning signs until it&apos;s too late. Every year CO leaks from unserviced heaters send Melbourne families to hospital.
                </p>
                <h3 className={repairStyles.co__subtitle}>
                  <IconWarning /> Why You Need a Professional Check:
                </h3>
                <ul className={repairStyles.co__warning_list}>
                  <li>
                    <span className={repairStyles.co__warning_icon}><IconWarning /></span>
                    <span><strong style={{ color: "#f5a623" }}>Yellow or orange burner flames</strong> instead of crisp blue — a sign of incomplete combustion and CO production.</span>
                  </li>
                  <li>
                    <span className={repairStyles.co__warning_icon}><IconWarning /></span>
                    <span><strong style={{ color: "#f5a623" }}>Soot or dark staining</strong> around the heater grille or flue vent — indicates dangerous gas spillage into your living space.</span>
                  </li>
                  <li>
                    <span className={repairStyles.co__warning_icon}><IconWarning /></span>
                    <span><strong style={{ color: "#f5a623" }}>Frequent headaches, nausea or dizziness</strong> when the heater is running — possible CO exposure symptoms requiring immediate action.</span>
                  </li>
                  <li>
                    <span className={repairStyles.co__warning_icon}><IconWarning /></span>
                    <span><strong style={{ color: "#f5a623" }}>Heater older than 10 years</strong> with no recent service — significantly higher risk of cracked heat exchanger and CO leakage.</span>
                  </li>
                </ul>
                <div className={repairStyles.co__esv_badge}>
                  <IconShield />
                  <p className={repairStyles.co__esv_text}>
                    <strong>Energy Safe Victoria</strong> recommends professional CO spillage testing every 2 years. Our repair service includes a comprehensive CO test on every single visit.
                  </p>
                </div>
                <a href="tel:0405133761" className={repairStyles.co__cta}>
                  <IconPhone />
                  Book a Safety Inspection Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. REPAIR PROCESS ────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${repairStyles.process_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="how we work"
              dataTitle="How We Get Your Heat Back On Fast"
              dataMaxWidth="560px"
            />
            <div className={repairStyles.process__timeline}>
              {[
                {
                  num: "01",
                  title: "Rapid Response Call-Out",
                  text: "Call or submit a request. We dispatch the nearest licensed gas fitter — same-day guaranteed across Greater Melbourne.",
                  img: "/images/step__img01.png",
                },
                {
                  num: "02",
                  title: "Advanced Fault Diagnosis",
                  text: "Full system diagnostic — burner, heat exchanger, ignitor, thermostat, gas pressure, and flue integrity — before any work begins.",
                  img: "/images/step__img02.png",
                },
                {
                  num: "03",
                  title: "On-the-Spot Repairs",
                  text: "Our fully-stocked vans carry the most common spare parts. Most repairs completed on the first visit — no waiting for parts.",
                  img: "/images/step__img03.png",
                },
                {
                  num: "04",
                  title: "CO & Safety Test",
                  text: "Every repair ends with a full CO spillage test, gas pressure verification, and flue integrity check. Your safety is non-negotiable.",
                  img: "/images/step__img01.png",
                },
              ].map((step, i) => (
                <div key={i} className={repairStyles.process__step}>
                  <div className={repairStyles.process__step_num}>{step.num}</div>
                  <div className={repairStyles.process__step_icon}>
                    <Image src={step.img} width={60} height={60} quality={80} alt={step.title} />
                  </div>
                  <h3 className={repairStyles.process__step_title}>{step.title}</h3>
                  <p className={repairStyles.process__step_text}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ── 6. WHY TRUST US ──────────────────────────────────────────── */}
        <section className={`section__inner ${repairStyles.trust_section}`}>
          <div className="container container__fluid">
            <div className={repairStyles.trust__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="why choose us"
                  dataTitle="Melbourne's Most Reliable Heating Technicians"
                  dataMaxWidth="480px"
                />
                <p>
                  Every repair is backed by upfront pricing, fully licensed tradespeople, and a commitment to leaving your premises safe and operational. Our vans are stocked with genuine parts for all major brands so we can fix your heater in a single visit.
                </p>
                <a href="tel:0405133761" className={`btn btn__type2 ${repairStyles.trust__cta}`}>
                  <span>Book a Licensed Gas Fitter</span>
                </a>
              </div>
              <div className={repairStyles.trust__right}>
                {ReasonsListData.map((item, i) => (
                  <div key={item.id} className={repairStyles.reason__card}>
                    <div className={repairStyles.reason__num}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={repairStyles.reason__icon}><IconCheck /></div>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
                     {/* ── 9. SERVICE AREAS ─────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${repairStyles.areas_section}`}>
          <div className="container container__fluid">
            <div className={repairStyles.areas__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="fast dispatch"
                  dataTitle="Fast Repair Dispatches Across Melbourne"
                  dataMaxWidth="480px"
                />
                <p>
                  Our repair technicians are strategically located across Greater Melbourne — Eastern, South-Eastern, Northern, and Bayside — so we reach you faster than anyone else.
                </p>
                <a href="/coverage/" className={`btn ${repairStyles.areas__btn}`}>
                  <span>View Full Coverage Map</span>
                </a>
              </div>
              <div className={repairStyles.areas__columns}>
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
                  <div key={group.region} className={repairStyles.areas__col}>
                    <h4 className={repairStyles.areas__region}>{group.region}</h4>
                    <ul>
                      {group.suburbs.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── 8. TESTIMONIALS ──────────────────────────────────────────── */}
        <section className={`section__inner ${repairStyles.testimonials_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="real rescue stories"
              dataTitle="Restoring Comfort to Melbourne Businesses"
              dataMaxWidth="560px"
              dataAddClass="text-center"
            />
          </div>
          <div style={{ marginTop: "48px" }}>
            <GasHeaterRepairTestimonials />
          </div>
        </section>

   
        {/* ── 10. FAQ ───────────────────────────────────────────────────── */}
        <section className={`section__inner ${repairStyles.faq_section}`}>
          <div className="container container__fluid">
            <div className={repairStyles.faq__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="troubleshooting"
                  dataTitle="Gas Heater Repair FAQs"
                  dataMaxWidth="440px"
                />
                <p>
                  Have a different question? Call us on{" "}
                  <a href="tel:0405133761" style={{ color: "var(--base-color)", fontWeight: 700 }}>
                    0405 133 761
                  </a>{" "}
                  — our technicians are happy to give free phone advice.
                </p>
                <div className={repairStyles.faq__img}>
                  <Image
                    src="/images/about_img03.jpg"
                    width={400}
                    height={320}
                    style={{ objectFit: "cover" }}
                    quality={65}
                    alt="gas heater repair FAQ Melbourne"
                    className={repairStyles.rounded_img}
                  />
                </div>
              </div>
              <FAQAccordion />
            </div>
          </div>
        </section>

        
        {/* ── 7. BRANDS WE REPAIR ──────────────────────────────────────── */}
        <section
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="../images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="we repair"
              dataTitle="We Carry Parts for All Major Brands"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </section>

        {/* ── 11. FINAL CTA ─────────────────────────────────────────────── */}
        <section className={repairStyles.final_cta}>
          <div className={repairStyles.final_cta__bg}>
            <Image
              src="/images/bg-02.jpg"
              fill
              style={{ objectFit: "cover" }}
              quality={60}
              alt="emergency gas heater repair Melbourne"
            />
            <div className={repairStyles.final_cta__overlay} />
          </div>
          <div className={`container container__fluid ${repairStyles.final_cta__inner}`}>
            <div>
              <h2 className={repairStyles.final_cta__title}>Need Your Heater Fixed Today?</h2>
              <p className={repairStyles.final_cta__sub}>
                Don&apos;t spend another night in the cold. Our licensed gas fitters are on standby across Greater Melbourne — same-day, every day.
              </p>
              <div className={repairStyles.final_cta__btns}>
                <a href="tel:0405133761" className={repairStyles.hero__emergencybtn}>
                  <IconPhone />
                  Emergency: 0405 133 761
                </a>
              </div>
              <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {["Same-day response", "Upfront pricing", "CO safety test included"].map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                    <IconCheck /><span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={repairStyles.final_cta__form}>
              <div className={repairStyles.final_cta__formcard}>
                <h3 className={repairStyles.final_cta__formtitle}>Send a Repair Request</h3>
                <FormAside buttonText="Send Repair Tech Now" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}


