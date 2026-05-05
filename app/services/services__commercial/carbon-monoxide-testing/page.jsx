"use client";
// Styles
import coStyles from "./CarbonMonoxideTesting.module.css";
// Sections
import PageTitle from "../../../_components/Common/PageTitle";
import SectionTitle from "../../../_components/Common/SectionTitle";
import LogoPartners from "../../../_components/Common/LogoPartners";
import { CarbonMonoxideTestimonials } from "./CarbonMonoxideTestimonials";
// Layout
import Image from "next/legacy/image";
// Form
import FormAside from "../../../_components/ServicesSubPages/FormAside";
// Data
import { ReasonsListData } from "../../../_components/Services/AsideReasonsListData";
// React
import { useState } from "react";

// ── SVG Icons ─────────────────────────────────────────────────────────────────
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
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
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
const IconCO = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M17 19a7 7 0 110 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="33" cy="24" r="4" stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <path d="M6 24L24 8l18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 20v18a2 2 0 002 2h8v-8h8v8h8a2 2 0 002-2V20" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);
const IconBuilding = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <rect x="8" y="6" width="20" height="36" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M28 16h12v26H28" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M14 14h8M14 22h8M14 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M33 22h4M33 30h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M32 32l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M17 22a5 5 0 015-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const IconGauge = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <path d="M8 36a16 16 0 1132 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 20v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="32" r="2.5" fill="currentColor"/>
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M17 16h14M17 22h14M17 28h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M29 32l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconLegal = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M24 6v36M12 18l24-12M12 30l24 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M8 18l8 8-8 8M40 18l-8 8 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
const IconFlame = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M24 6c0 8-10 12-10 22a10 10 0 0020 0c0-6-5-9-5-14-3 3-5 8-5 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconSoot = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <rect x="8" y="12" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M14 22h20M14 28h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="34" cy="28" r="3" fill="currentColor" opacity="0.5"/>
  </svg>
);
const IconPilot = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
  </svg>
);
const IconHead = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <circle cx="24" cy="20" r="12" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 32l2 8h12l2-8" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M20 18c0-2 2-4 4-4s4 2 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="28" cy="22" r="1.5" fill="currentColor"/>
  </svg>
);

// ── Hero Form ─────────────────────────────────────────────────────────────────
const propTypeOptions = ["Business Owner", "Facility Manager", "Operations Manager", "Building Manager", "Commercial Property", "Other"];

function HeroBookingForm() {
  const [data, setData] = useState({ name: "", phone: "", propType: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${data.name}\nPhone: ${data.phone}\nProperty Type: ${data.propType}`;
    window.location.href = `mailto:info@gasheaterservice.com.au?subject=CO Safety Check Booking&body=${encodeURIComponent(body)}`;
    setSent(true);
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
          <select name="propType" className="form__control" value={data.propType} onChange={handleChange} required>
            <option value="" disabled>Property Type *</option>
            {propTypeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn__type2" style={{ width: "100%", justifyContent: "center" }}>
          <span>Book a Safety Check</span>
        </button>
      </div>
    </form>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
const faqData = [
  {
    q: "How much does a carbon monoxide test cost in Melbourne?",
    a: "Our CO safety check is flat-rate with no hidden call-out fees — pricing is disclosed upfront before any work begins. The test covers all gas appliances on the property, a full flue inspection, negative pressure testing, and a digital compliance report issued the same day.",
  },
  {
    q: "Is regular gas safety testing important for commercial properties in Victoria?",
    a: "Yes. Commercial operators have workplace safety obligations under Victorian OHS and gas safety regulations. Regular testing and documented maintenance help reduce risk, demonstrate due diligence, and support insurance and compliance requirements.",
  },
  {
    q: "Can I just buy a carbon monoxide alarm from Bunnings instead?",
    a: "A CO alarm is a backup warning device — not a substitute for professional testing. Alarms only trigger at dangerous threshold levels; they won't detect the slow build-up of CO that causes chronic health effects over weeks or months. They also cannot test your flue system, heat exchanger integrity, or exhaust gas composition. Professional testing and an alarm together is the correct approach.",
  },
  {
    q: "How often does Energy Safe Victoria recommend CO testing?",
    a: "Energy Safe Victoria recommends all gas appliances be serviced at least every 2 years. However, ESV also advises annual testing for households with vulnerable occupants (elderly, young children, or people with respiratory conditions), heaters older than 10 years, and any property where occupants have reported unexplained headaches or nausea.",
  },
  {
    q: "What happens if CO is found during my test?",
    a: "If our calibrated analyzer detects CO spillage above safe thresholds, we will immediately condemn the appliance and advise you on safe next steps — which may include repair or replacement. We carry many common replacement parts and can often rectify the issue on the same visit. You receive a full written report documenting all findings regardless of outcome.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={coStyles.faq__list}>
      {faqData.map((item, i) => (
        <div key={i} className={`${coStyles.faq__item} ${openIndex === i ? coStyles.faq__item_open : ""}`}>
          <button
            className={coStyles.faq__question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className={coStyles.faq__icon}>{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className={coStyles.faq__answer}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CarbonMonoxideTesting() {
  return (
    <>
      <PageTitle dataTitle="Commercial Carbon Monoxide Testing Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section className={coStyles.hero}>
          <div className="container container__fluid">
            <div className={coStyles.hero__grid}>
              {/* Left copy */}
              <div>
                <div className="blocktitle__subtitle blocktitle__subtitle relative" style={{ marginBottom: "12px" }}>
                  commercial carbon monoxide testing melbourne
                </div>
                <h1 className={coStyles.hero__h1}>
                  Certified Carbon Monoxide Testing Melbourne
                </h1>
                <p className={coStyles.hero__sub}>
                  Protect your staff, customers, and contractors while staying compliant. Specialised CO spillage testing by licensed Melbourne gas fitters. Don&apos;t risk the &lsquo;silent killer&rsquo;.
                </p>
                <div className={coStyles.hero__ctas}>
                  <a href="tel:0405133761" className="btn btn__type2">
                    <span>Book a Safety Check</span>
                  </a>
                  <a href="#compliance" className={coStyles.hero__secondbtn}>
                    Commercial Compliance Info →
                  </a>
                </div>
                <div className={coStyles.hero__trust}>
                  <div className={coStyles.hero__trustbadge}>
                    <IconShield />
                    <span>VBA Licensed</span>
                  </div>
                  <div className={coStyles.hero__trustbadge}>
                    <IconShield />
                    <span>Energy Safe Victoria</span>
                  </div>
                  <div className={`${coStyles.hero__trustbadge} ${coStyles.hero__trustbadge_danger}`}>
                    <IconWarning />
                    <span>Calibrated CO Analyser Equipment</span>
                  </div>
                </div>
              </div>

              {/* Right: glassmorphism booking form */}
              <div className={coStyles.hero__formcard}>
                <div className={coStyles.hero__formcard_inner}>
                  <div className={coStyles.hero__formtitle}>
                    <IconCalendar /> Book a CO Safety Check
                  </div>
                  <p className={coStyles.hero__formsub}>Same-day response · No obligation · Digital report issued</p>
                  <HeroBookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. SILENT KILLER HOOK ────────────────────────────────────── */}
        <section className={`section__inner ${coStyles.silent_section}`}>
          <div className="container container__fluid">
            <div className={coStyles.silent__grid}>
              <div className={coStyles.silent__img_wrap}>
                <Image
                  src="/images/home__tabimg01.jpg"
                  width={560}
                  height={420}
                  objectFit="cover"
                  quality={70}
                  alt="carbon monoxide danger inside Melbourne home"
                  className={coStyles.rounded_img}
                />
                <div className={coStyles.silent__badge}>
                  <span className={coStyles.silent__badge_num}>CO</span>
                  <span className={coStyles.silent__badge_text}>Odourless &amp; Invisible</span>
                </div>
              </div>
              <div>
                <SectionTitle
                  dataSubtitle="the silent killer"
                  dataTitle="You Can't See It. You Can't Smell It."
                  dataMaxWidth="540px"
                />
                <p>
                  Carbon monoxide is an odourless, colourless gas produced whenever gas, wood, or other fuels burn incompletely. A faulty gas heater — one with a cracked heat exchanger, blocked flue, or poorly calibrated burner — can flood your building with CO while operations continue, completely undetected.
                </p>
                <p className="indent__top">
                  Critically, <strong>standard smoke alarms do not detect carbon monoxide.</strong> Many businesses assume existing fire systems are enough protection. They are not. CO alarms exist separately — and even those only alert at dangerous threshold concentrations, missing slow chronic low-level exposure that affects occupants over time.
                </p>
                <div className={coStyles.silent__warning}>
                  <span className={coStyles.silent__warning_icon}><IconWarning /></span>
                  <p>
                    Energy Safe Victoria (ESV) records dozens of CO incidents in Victoria every year directly linked to poorly maintained gas appliances — many in homes that appeared perfectly normal.
                  </p>
                </div>
                <div className={coStyles.stat__row}>
                  <div className={coStyles.stat__item}>
                    <span className={coStyles.stat__num}>50+</span>
                    <span>CO incidents recorded by ESV per year in Victoria</span>
                  </div>
                  <div className={coStyles.stat__item}>
                    <span className={coStyles.stat__num}>0ppm</span>
                    <span>Safe indoor CO level — any reading above is dangerous</span>
                  </div>
                  <div className={coStyles.stat__item}>
                    <span className={coStyles.stat__num}>2 Yrs</span>
                    <span>Common professional testing interval for commercial operators</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BENTO GRID — WHO NEEDS TESTING ───────────────────────── */}
        <section className={`section__inner base__bg ${coStyles.bento_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="who needs testing"
              dataTitle="Specialised CO Testing for Commercial Properties"
              dataMaxWidth="600px"
            />
            <div className={coStyles.bento__grid}>
              {/* Featured large card — commercial compliance */}
              <div className={`${coStyles.bento__card} ${coStyles.bento__card_featured}`}>
                <div className={coStyles.bento__card_img}>
                  <Image
                    src="/images/services/tab-img01.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={65}
                    alt="commercial gas safety compliance Melbourne"
                  />
                  <div className={coStyles.bento__card_overlay} />
                </div>
                <div className={coStyles.bento__card_content}>
                  <div className={coStyles.bento__icon}><IconBuilding /></div>
                  <h3 className={coStyles.bento__title}>Business Owners &amp; Facility Managers</h3>
                  <p className={coStyles.bento__text}>
                    Commercial duty-of-care obligations require active risk management. We provide full compliance documentation the same day — protecting your people and your operations.
                  </p>
                  <ul className={coStyles.bento__checklist}>
                    <li><IconCheckSm /> Commercial safety and compliance report</li>
                    <li><IconCheckSm /> All appliances tested in a single visit</li>
                    <li><IconCheckSm /> Digital certificate emailed same day</li>
                  </ul>
                  <span className={coStyles.bento__tag}>Compliance Critical</span>
                </div>
              </div>

              {/* Standard card 1 */}
              <div className={`${coStyles.bento__card} ${coStyles.bento__card_standard}`}>
                <div className={coStyles.bento__icon_wrap}><IconHome /></div>
                <div className={coStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img02.jpg" layout="fill" objectFit="cover" quality={60} alt="homeowner gas safety check Melbourne" />
                  <div className={coStyles.bento__card_overlay} />
                </div>
                <h3 className={coStyles.bento__title}>Commercial Occupiers</h3>
                <p className={coStyles.bento__text}>Especially for older systems or when staff report unexplained headaches or nausea during operating hours.</p>
              </div>

              {/* Standard card 2 */}
              <div className={`${coStyles.bento__card} ${coStyles.bento__card_standard}`}>
                <div className={coStyles.bento__icon_wrap}><IconSearch /></div>
                <div className={coStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img03.jpg" layout="fill" objectFit="cover" quality={60} alt="pre-purchase gas safety inspection Melbourne" />
                  <div className={coStyles.bento__card_overlay} />
                </div>
                <h3 className={coStyles.bento__title}>Commercial Property Buyers</h3>
                <p className={coStyles.bento__text}>Pre-purchase CO checks give you documented proof of appliance safety — and leverage in price negotiations if faults are found.</p>
              </div>

              {/* Standard card 3 */}
              <div className={`${coStyles.bento__card} ${coStyles.bento__card_standard}`}>
                <div className={coStyles.bento__icon_wrap}><IconCO /></div>
                <div className={coStyles.bento__card_img_sm}>
                  <Image src="/images/services/tab-img04.jpg" layout="fill" objectFit="cover" quality={60} alt="renovation gas safety backdrafting Melbourne" />
                  <div className={coStyles.bento__card_overlay} />
                </div>
                <h3 className={coStyles.bento__title}>Renovators</h3>
                <p className={coStyles.bento__text}>Structural changes and new exhaust fans alter a building&apos;s pressure balance — creating dangerous back-drafting risk that only testing can confirm.</p>
                <span className={`${coStyles.bento__tag} ${coStyles.bento__tag_red}`}>High-Risk</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. COMMERCIAL COMPLIANCE SPOTLIGHT ──────────────────────── */}
        <section id="compliance" className={coStyles.landlord_section}>
          <div className="container container__fluid">
            <div className={coStyles.landlord__grid}>
              <div className={coStyles.landlord__copy}>
                <SectionTitle
                  dataSubtitle="commercial compliance"
                  dataTitle="Commercial Gas Safety Compliance Obligations"
                  dataMaxWidth="520px"
                />
                <p>
                  Victorian OHS and gas safety frameworks place clear obligations on commercial operators and property managers. Failure to comply isn&apos;t just dangerous — it exposes your business to significant legal and financial risk.
                </p>
                <ul className={coStyles.landlord__reqs}>
                  <li className={coStyles.landlord__req_item}>
                    <div className={coStyles.landlord__req_icon}><IconCalendar /></div>
                    <div className={coStyles.landlord__req_text}>
                      <strong>Scheduled gas safety inspections and testing</strong>
                      <span>All gas appliances in the building should be professionally tested and maintained on a defined cycle with complete maintenance records retained.</span>
                    </div>
                  </li>
                  <li className={coStyles.landlord__req_item}>
                    <div className={coStyles.landlord__req_icon}><IconDoc /></div>
                    <div className={coStyles.landlord__req_text}>
                      <strong>Detailed compliance reports for audits and insurers</strong>
                      <span>We provide fully documented, legally recognised digital reports the same day as the inspection for internal records, audits, and insurer requests.</span>
                    </div>
                  </li>
                  <li className={coStyles.landlord__req_item}>
                    <div className={coStyles.landlord__req_icon}><IconLegal /></div>
                    <div className={coStyles.landlord__req_text}>
                      <strong>Insurance &amp; legal protection</strong>
                      <span>Our compliance reports are accepted by all major insurance providers and satisfy both VCAT and Fair Trades requirements in the event of a dispute.</span>
                    </div>
                  </li>
                </ul>
                <div className={coStyles.landlord__badge}>
                  <span className={coStyles.landlord__badge_num}>CO</span>
                  <span className={coStyles.landlord__badge_text}>Commercial compliance<br />documentation included</span>
                </div>
              </div>
              <div className={coStyles.landlord__img_wrap}>
                <div className={coStyles.landlord__img_tag}>ESV Compliant Report</div>
                <Image
                  src="/images/services/services_img02.jpg"
                  width={540}
                  height={500}
                  objectFit="cover"
                  quality={70}
                  alt="landlord gas compliance inspection Melbourne"
                  className={coStyles.rounded_img}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. WARNING SIGNS ─────────────────────────────────────────── */}
        <section className={`section__inner ${coStyles.warning_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="danger signs"
              dataTitle="4 Signs Your Gas Heater Is Dangerously Unsafe"
              dataMaxWidth="600px"
            />
            <div className={coStyles.warning__grid}>
              {[
                {
                  icon: <IconFlame />,
                  img: "/images/services/tab-img05.jpg",
                  title: "Yellow or Sooty Flame",
                  text: "A healthy gas burner produces a crisp, blue flame. A yellow, orange, or sooty flame indicates incomplete combustion — the primary cause of carbon monoxide production. Do not ignore this.",
                  label: "Visible Warning",
                },
                {
                  icon: <IconSoot />,
                  img: "/images/services/tab-img06.jpg",
                  title: "Soot or Scorch Marks",
                  text: "Black staining around the heater grille, burner area, or flue outlet is a clear sign that exhaust gases are not venting properly. This means CO is almost certainly entering your living space.",
                  label: "Physical Evidence",
                },
                {
                  icon: <IconPilot />,
                  img: "/images/home__tabimg02.jpg",
                  title: "Pilot Light Blowing Out",
                  text: "A pilot light that extinguishes repeatedly often signals a negative pressure problem — exhaust fans or draughts pulling combustion gases back into the home instead of up the flue.",
                  label: "Appliance Fault",
                },
                {
                  icon: <IconHead />,
                  img: "/images/about_img01.jpg",
                  title: "Unexplained Physical Symptoms",
                  text: "Headaches, nausea, dizziness, or fatigue that improve when you leave the house and return when the heater is on are classic early CO poisoning symptoms. Evacuate and call us immediately.",
                  label: "Health Emergency",
                },
              ].map((w, i) => (
                <div key={i} className={coStyles.warning__card}>
                  <div className={coStyles.warning__card_img}>
                    <Image src={w.img} layout="fill" objectFit="cover" quality={65} alt={w.title} />
                    <div className={coStyles.warning__card_img_overlay} />
                  </div>
                  <div className={coStyles.warning__card_body}>
                    <div className={coStyles.warning__icon_wrap}>{w.icon}</div>
                    <h3 className={coStyles.warning__title}>{w.title}</h3>
                    <p className={coStyles.warning__text}>{w.text}</p>
                    <span className={coStyles.warning__label}>{w.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. TESTING PROCESS ───────────────────────────────────────── */}
        <section className={`section__inner base__bg ${coStyles.process_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="our process"
              dataTitle="We Don't Just Guess. We Measure."
              dataMaxWidth="560px"
            />
            <div className={coStyles.process__timeline}>
              {[
                {
                  num: "01",
                  title: "Visual & Ventilation Inspection",
                  text: "We examine every gas appliance, flue, and ventilation point for physical damage, blockages, soot deposits, and signs of backdrafting.",
                  img: "/images/step__img01.png",
                },
                {
                  num: "02",
                  title: "Negative Pressure Testing",
                  text: "We test how exhaust fans, range hoods, and other depressurisation sources affect the spillage behaviour of your gas heater under real-world conditions.",
                  img: "/images/step__img02.png",
                },
                {
                  num: "03",
                  title: "Advanced Analyser Probe Testing",
                  text: "Using calibrated electronic CO analysers, we measure the exact parts-per-million (PPM) of carbon monoxide in your exhaust gases and living spaces — not guesswork.",
                  img: "/images/step__img03.png",
                },
                {
                  num: "04",
                  title: "Digital Certificate & Report",
                  text: "A full written service report covering all inspection points, CO measurements, flue readings, and compliance status is emailed to you the same day.",
                  img: "/images/step__img01.png",
                },
              ].map((step, i) => (
                <div key={i} className={coStyles.process__step}>
                  <div className={coStyles.process__step_num}>{step.num}</div>
                  <div className={coStyles.process__step_icon}>
                    <Image src={step.img} width={60} height={60} quality={80} alt={step.title} />
                  </div>
                  <h3 className={coStyles.process__step_title}>{step.title}</h3>
                  <p className={coStyles.process__step_text}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. WHY TRUST US ──────────────────────────────────────────── */}
        <section className={`section__inner ${coStyles.trust_section}`}>
          <div className="container container__fluid">
            <div className={coStyles.trust__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="certified experts"
                  dataTitle="Melbourne's Certified Gas Safety Experts"
                  dataMaxWidth="480px"
                />
                <p>
                  CO testing is only as good as the equipment and the person using it. Every one of our technicians is VBA-licensed, Energy Safe Victoria accredited, and equipped with regularly calibrated electronic CO analysers — not the cheap handheld units used by uncertified operators.
                </p>
                <p className="indent__top">
                  Our detailed digital reports are accepted by insurance companies, VCAT, Fair Trades Victoria, and all major landlord compliance platforms. When accuracy and legal standing matter, our documentation delivers.
                </p>
                <a href="tel:0405133761" className={`btn btn__type2 ${coStyles.trust__cta}`}>
                  <span>Book Your CO Safety Check</span>
                </a>
              </div>
              <div className={coStyles.trust__right}>
                {ReasonsListData.map((item, i) => (
                  <div key={item.id} className={coStyles.reason__card}>
                    <div className={coStyles.reason__num}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={coStyles.reason__icon}><IconCheck /></div>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────────── */}
        <section className={`section__inner ${coStyles.testimonials_section}`}>
          <div className="container container__fluid">
            <SectionTitle
              dataSubtitle="real stories"
              dataTitle="Keeping Melbourne Families Safe"
              dataMaxWidth="560px"
              dataAddClass="text-center"
            />
          </div>
          <div style={{ marginTop: "48px" }}>
            <CarbonMonoxideTestimonials />
          </div>
        </section>

        {/* ── 9. SERVICE AREAS ─────────────────────────────────────────── */}
        <section className={`section__inner base__bg ${coStyles.areas_section}`}>
          <div className="container container__fluid">
            <div className={coStyles.areas__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="fast local response"
                  dataTitle="Dispatched Daily Across Melbourne"
                  dataMaxWidth="480px"
                />
                <p>
                  Our licensed gas fitters cover the entire Greater Melbourne area. If you suspect a CO problem, don&apos;t wait — we can reach most Melbourne suburbs within hours.
                </p>
                <a href="/coverage" className={`btn ${coStyles.areas__btn}`}>
                  <span>View Full Coverage Map</span>
                </a>
              </div>
              <div className={coStyles.areas__columns}>
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
                    suburbs: ["Brighton", "Hampton", "Beaumaris", "Black Rock", "Heatherton", "Caulfield", "Chelsea", "Sandringham"],
                  },
                ].map((group) => (
                  <div key={group.region} className={coStyles.areas__col}>
                    <h4 className={coStyles.areas__region}>{group.region}</h4>
                    <ul>
                      {group.suburbs.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ──────────────────────────────────────────────────── */}
        <section className={`section__inner ${coStyles.faq_section}`}>
          <div className="container container__fluid">
            <div className={coStyles.faq__grid}>
              <div>
                <SectionTitle
                  dataSubtitle="common questions"
                  dataTitle="Carbon Monoxide Testing FAQs"
                  dataMaxWidth="440px"
                />
                <p>
                  Have more questions? Call us on{" "}
                  <a href="tel:0405133761" style={{ color: "var(--base-color)", fontWeight: 700 }}>
                    0405 133 761
                  </a>{" "}
                  — we&apos;re available every day.
                </p>
                <div className={coStyles.faq__img}>
                  <Image
                    src="/images/about_img02.jpg"
                    width={400}
                    height={320}
                    objectFit="cover"
                    quality={65}
                    alt="carbon monoxide testing FAQ Melbourne"
                    className={coStyles.rounded_img}
                  />
                </div>
              </div>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ── Partner Brands ────────────────────────────────────────────── */}
        <section
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="/images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="trusted brands"
              dataTitle="We Service All Major Gas Heater Brands"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </section>

        {/* ── 11. FINAL CTA ─────────────────────────────────────────────── */}
        <section className={coStyles.final_cta}>
          <div className={coStyles.final_cta__bg}>
            <Image
              src="/images/bg-02.jpg"
              layout="fill"
              objectFit="cover"
              quality={60}
              alt="carbon monoxide testing Melbourne background"
            />
            <div className={coStyles.final_cta__overlay} />
          </div>
          <div className={`container container__fluid ${coStyles.final_cta__inner}`}>
            <div>
              <h2 className={coStyles.final_cta__title}>
                Don&apos;t Leave Your Family&apos;s Safety to Chance
              </h2>
              <p className={coStyles.final_cta__sub}>
                A professional CO safety check takes less than an hour and could save your family&apos;s life. Book today — same-day response guaranteed across Greater Melbourne.
              </p>
              <div className={coStyles.final_cta__trust}>
                {["VBA Licensed Gas Fitters", "ESV Accredited Testing", "Digital Report Same Day", "Landlord Compliance Specialists"].map((t) => (
                  <div key={t} className={coStyles.final_cta__trustitem}>{t}</div>
                ))}
              </div>
            </div>
            <div className={coStyles.final_cta__formcard}>
              <h3 className={coStyles.final_cta__formtitle}>Book Your CO Safety Check Now</h3>
              <FormAside buttonText="Book Your CO Safety Check Now" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

