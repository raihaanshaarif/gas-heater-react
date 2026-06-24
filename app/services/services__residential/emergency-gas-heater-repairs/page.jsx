"use client";
// Styles
import emergencyStyles from "./GasHeaterRepair.module.css";
// Sections
import PageTitle from "../../../_components/Common/PageTitle";
import SectionTitle from "../../../_components/Common/SectionTitle";
import LogoPartners from "../../../_components/Common/LogoPartners";
// Testimonials
import GasHeaterRepairTestimonials from "./GasHeaterRepairTestimonials";
// Layout
import Image from "next/image";
// React
import { useState } from "react";

// ─── SVG Icons ─────────────────────────────────────────────────────────────
function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function ShieldIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function AlertIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function ClockIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function FlameIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-7-7c0-1.5.5-3 2-4.5z" />
    </svg>
  );
}
function SnowflakeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" /><path d="M17 7l-5-5-5 5" /><path d="M17 17l-5 5-5-5" />
      <line x1="2" y1="12" x2="22" y2="12" /><path d="M7 7l-5 5 5 5" /><path d="M17 7l5 5-5 5" />
    </svg>
  );
}
function ZapIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function VolumeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 010 7.07" /><path d="M19.07 4.93a10 10 0 010 14.14" />
    </svg>
  );
}
function CheckIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ToolIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function TruckIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function StarIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
function MapPinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── Hero Dispatch Widget ────────────────────────────────────────────────────
function HeroDispatchWidget() {
  const [phone, setPhone] = useState("");
  return (
    <div className={emergencyStyles.hero__dispatch_widget}>
      <div className={emergencyStyles.hero__dispatch_title}>
        <span style={{ color: "#ff5c1a" }}>🚨</span>
        Urgent Dispatch
      </div>
      <p className={emergencyStyles.hero__dispatch_sub}>
        Enter your number — we call you back within 2 minutes, 24/7
      </p>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <input
          className="form__control"
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-label="Phone number for emergency callback"
        />
      </div>
      <button
        type="button"
        className={emergencyStyles.hero__dispatch_bigbtn}
        onClick={() => { if (phone) window.location.href = `tel:0405133761`; }}
        aria-label="Request immediate callback"
      >
        <PhoneIcon size={20} />
        Call Me Immediately
      </button>
      <p className={emergencyStyles.hero__dispatch_note}>
        Or call directly: <a href="tel:0405133761" style={{ color: "#ff9a7a", fontWeight: 700 }}>0405 133 761</a>
      </p>
    </div>
  );
}

// ─── FAQ Accordion ───────────────────────────────────────────────────────────
const faqData = [
  {
    q: "Do you charge extra for after-hours or emergency callouts?",
    a: "Yes, there is an after-hours call-out fee for emergency visits outside business hours, on weekends, and on public holidays. We are always transparent about this before we arrive — you'll know exactly what to expect. No hidden surprises at the end of the job.",
  },
  {
    q: "What if my heater can't be fixed on the spot?",
    a: "If a specialised part is needed, we make the unit safe, explain the situation clearly, and prioritise sourcing the part as fast as possible — usually next business day. We won't leave you without a plan.",
  },
  {
    q: "How quickly can you arrive for an emergency?",
    a: "We aim to arrive within 1–2 hours for most Melbourne metro emergencies. Response times may vary based on your suburb and time of day, but we always dispatch the nearest available technician to you first.",
  },
  {
    q: "Do you repair both wall furnaces and ducted gas heaters?",
    a: "Yes — we repair all types of gas heating systems, including wall furnaces, ducted central heating, floor consoles, and space heaters. We carry parts for all major brands including Rinnai, Brivis, Braemar, Pyrox, and Vulcan.",
  },
  {
    q: "Is it safe to use my heater while waiting for a technician?",
    a: "If you can smell gas, hear unusual noises, or see warning lights, turn the heater off immediately at the unit and at the gas meter. Do not attempt to restart it. Open windows for ventilation and call us. If in doubt, treat it as a gas emergency.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className={emergencyStyles.faq__list}>
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`${emergencyStyles.faq__item} ${open === i ? emergencyStyles.faq__item_open : ""}`}
        >
          <button
            className={emergencyStyles.faq__question}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.q}
            <span className={emergencyStyles.faq__icon}>{open === i ? "−" : "+"}</span>
          </button>
          <div className={emergencyStyles.faq__answer}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EmergencyGasHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Emergency Gas Heater Repairs Melbourne | 24/7 Callout" />
      <main id="tt-pageContent" className="overflow-hidden bg-[radial-gradient(circle_at_top,#e7eefc_0%,#ffffff_42%)]">

        {/* ═══════════════════════════════════════════════════════
            1. HERO — 24/7 Urgency
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.hero}>
          <div className="container container__fluid-xl">
            <div className={emergencyStyles.hero__grid}>
              {/* Left — copy */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(232,62,0,0.18)",
                    border: "1px solid rgba(232,62,0,0.45)",
                    borderRadius: 50,
                    padding: "6px 16px",
                    color: "#ff9a7a",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  <ClockIcon size={14} />
                  Available 24/7 — 365 Days a Year
                </div>
                <h1 className={emergencyStyles.hero__h1}>
                  24/7 Emergency Gas Heater Repair Melbourne
                </h1>
                <p className={emergencyStyles.hero__sub}>
                  Heater broken at midnight? Gas smell detected? Don&apos;t wait until morning. Our licensed gas fitters answer every call, dispatch immediately, and arrive stocked to fix it on the first visit.
                </p>
                <div className={emergencyStyles.hero__ctas}>
                  <a
                    href="tel:0405133761"
                    className={`${emergencyStyles.hero__emergencybtn} ${emergencyStyles.hero__emergencybtn_pulse}`}
                  >
                    <PhoneIcon size={18} />
                    Call 0405 133 761 Now
                  </a>
                  <a href="#dispatch" className={emergencyStyles.hero__callbtn}>
                    Request Immediate Callback
                  </a>
                </div>
                <div className={emergencyStyles.hero__trust}>
                  {[
                    { icon: "🕐", label: "24 / 7 Response", cls: "" },
                    { icon: "✅", label: " Licensed", cls: "" },
                    { icon: "🛡", label: "ESV Registered", cls: "" },
                    { icon: "⚡", label: "Same-Day Fix", cls: emergencyStyles.hero__trustbadge_sameday },
                  ].map((b) => (
                    <span
                      key={b.label}
                      className={`${emergencyStyles.hero__trustbadge} ${b.cls}`}
                    >
                      {b.icon} {b.label}
                    </span>
                  ))}
                </div>
              </div>
              {/* Right — dispatch widget */}
              <div id="dispatch">
                <HeroDispatchWidget />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            2. SAFETY HOOK — Smell Gas? No Heat?
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.safety_section}>
          <div className="container container__fluid-xl">
            <div className={emergencyStyles.safety__grid}>
              {/* Image */}
              <div className={emergencyStyles.safety__img_wrap}>
                <div className={emergencyStyles.rounded_img}>
                  <Image
                    src="/images/services/tab-img01.jpg"
                    width={620}
                    height={470}
                    quality={85}
                    alt="Gas safety emergency Melbourne"
                    
                  />
                </div>
                <div className={emergencyStyles.safety__img_badge}>
                  <span className={emergencyStyles.safety__img_badge_num}>60&nbsp;min</span>
                  <span className={emergencyStyles.safety__img_badge_text}>Avg. Response Time</span>
                </div>
              </div>
              {/* Alert copy */}
              <div>
                <SectionTitle
                  dataSubtitle="Gas Smell · No Heat · Strange Noises"
                  dataTitle="Smell Gas or Completely Without Heat?"
                  dataMaxWidth="520px"
                />
                <div className={emergencyStyles.safety__alert}>
                  <div className={emergencyStyles.safety__alert_head}>
                    <AlertIcon size={22} />
                    If you can smell gas — act right now:
                  </div>
                  <ol className={emergencyStyles.safety__steps}>
                    {[
                      { num: "1", text: "Turn off your gas heater at the unit and at the gas meter outside." },
                      { num: "2", text: "Open windows and doors immediately for ventilation. Do not use any light switches or appliances." },
                      { num: "3", text: "Evacuate the building if the smell is strong or persistent." },
                      { num: "4", text: "Call us on 0405 133 761 from outside — we dispatch immediately, 24/7." },
                    ].map((s) => (
                      <li key={s.num} className={emergencyStyles.safety__step}>
                        <span className={emergencyStyles.safety__step_num}>{s.num}</span>
                        {s.text}
                      </li>
                    ))}
                  </ol>
                </div>
                <p style={{ color: "var(--base-text-color)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  You don&apos;t need to know what&apos;s wrong — that&apos;s our job. Whether it&apos;s a complete breakdown, pilot light failure, unusual sounds, or a yellow flame, call us and we&apos;ll diagnose it on arrival.
                </p>
                <div style={{ marginTop: 28 }}>
                  <a
                    href="tel:0405133761"
                    className={`${emergencyStyles.hero__emergencybtn} ${emergencyStyles.hero__emergencybtn_pulse}`}
                    style={{ display: "inline-flex" }}
                  >
                    <PhoneIcon size={18} />
                    Call Now — We Answer 24/7
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            3. BENTO GRID — What Constitutes an Emergency
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.bento_section} style={{ background: "var(--base-bg)" }}>
          <div className="container container__fluid-xl">
            <SectionTitle
              dataSubtitle="When to Call Us Right Now"
              dataTitle="Rapid Response for Critical Heating Failures"
              dataAlign="center"
              dataMaxWidth="580px"
            />
            <div className={emergencyStyles.bento__grid}>
              {/* Featured — Total Breakdown */}
              <div className={`${emergencyStyles.bento__card} ${emergencyStyles.bento__card_featured}`}>
                <div className={emergencyStyles.bento__card_img}>
                  <Image
                    src="/images/services/tab-img02.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={80}
                    alt="Emergency heater breakdown Melbourne"
                  />
                </div>
                <div className={emergencyStyles.bento__card_overlay} />
                <div className={emergencyStyles.bento__card_content}>
                  <div className={emergencyStyles.bento__icon}>
                    <SnowflakeIcon size={32} />
                  </div>
                  <h3 className={emergencyStyles.bento__title}>Total System Breakdowns on Freezing Nights</h3>
                  <p className={emergencyStyles.bento__text}>
                    When your heater dies in the dead of winter — midnight, weekend, or holiday — we dispatch immediately. Fully stocked vans means we fix it in one visit, not two.
                  </p>
                  <span className={emergencyStyles.bento__tag}>Most Common Emergency</span>
                </div>
              </div>
              {/* CO Leak */}
              <div className={`${emergencyStyles.bento__card} ${emergencyStyles.bento__card_standard} ${emergencyStyles.bento__card_co}`}>
                <div className={emergencyStyles.bento__card_img_sm}>
                  <Image
                    src="/images/services/tab-img03.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={80}
                    alt="Carbon monoxide alarm emergency"
                  />
                </div>
                <div className={emergencyStyles.bento__card_overlay} />
                <div className={emergencyStyles.bento__icon_wrap}>
                  <div className={emergencyStyles.bento__icon_co}><AlertIcon size={28} /></div>
                </div>
                <h3 className={emergencyStyles.bento__title}>CO Alarm Triggered</h3>
                <p className={emergencyStyles.bento__text}>
                  A CO alarm is a life-threatening emergency. Evacuate, call us — we test and make safe immediately.
                </p>
                <span className={emergencyStyles.bento__tag_warning}>⚠ Evacuate First</span>
              </div>
              {/* Gas Smell */}
              <div className={`${emergencyStyles.bento__card} ${emergencyStyles.bento__card_standard}`}>
                <div className={emergencyStyles.bento__card_img_sm}>
                  <Image
                    src="/images/services/tab-img04.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={80}
                    alt="Gas smell from heater"
                  />
                </div>
                <div className={emergencyStyles.bento__card_overlay} />
                <div className={emergencyStyles.bento__card_content}>
                  <div className={emergencyStyles.bento__icon}><FlameIcon size={28} /></div>
                  <h3 className={emergencyStyles.bento__title}>Gas Smell or Detected Leak</h3>
                  <p className={emergencyStyles.bento__text}>
                    Turn off the meter, open windows, and call us. We locate and seal the leak on the spot, 24/7.
                  </p>
                  <span className={emergencyStyles.bento__tag}>Call Immediately</span>
                </div>
              </div>
              {/* Banging / Screeching */}
              <div className={`${emergencyStyles.bento__card} ${emergencyStyles.bento__card_standard}`}>
                <div className={emergencyStyles.bento__card_img_sm}>
                  <Image
                    src="/images/services/tab-img05.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={80}
                    alt="Loud banging gas heater"
                  />
                </div>
                <div className={emergencyStyles.bento__card_overlay} />
                <div className={emergencyStyles.bento__card_content}>
                  <div className={emergencyStyles.bento__icon}><VolumeIcon size={28} /></div>
                  <h3 className={emergencyStyles.bento__title}>Loud Banging, Screeching or Rattling</h3>
                  <p className={emergencyStyles.bento__text}>
                    Unusual sounds signal internal failure — often a cracked heat exchanger with CO risk. Don&apos;t ignore it.
                  </p>
                  <span className={emergencyStyles.bento__tag}>Don&apos;t Ignore This</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            4. FIRST-VISIT FIX GUARANTEE
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.firstvisit_section}>
          <div className="container container__fluid-xl">
            <div className={emergencyStyles.firstvisit__grid}>
              {/* Image */}
              <div className={emergencyStyles.firstvisit__img_wrap}>
                <div className={emergencyStyles.rounded_img}>
                  <Image
                    src="/images/home__tabimg01.jpg"
                    width={620}
                    height={480}
                    quality={85}
                    alt="Fully stocked gas heater repair van Melbourne"
                    
                  />
                </div>
                <div className={emergencyStyles.firstvisit__badge}>
                  <span className={emergencyStyles.firstvisit__badge_num}>95%</span>
                  <span className={emergencyStyles.firstvisit__badge_text}>First-Visit Fix Rate</span>
                </div>
              </div>
              {/* Copy */}
              <div>
                <SectionTitle
                  dataSubtitle="No Second Visits. No Waiting."
                  dataTitle="Fully Stocked Vans for On-The-Spot Repairs"
                  dataMaxWidth="520px"
                />
                <p style={{ color: "var(--base-text-color)", fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
                  95% of our emergency repairs are completed on the first visit. Our vans carry a comprehensive stock of the parts that fail most often — because when you&apos;re freezing at 11 PM, waiting for a part to arrive next week isn&apos;t an option.
                </p>
                <h4 className={emergencyStyles.firstvisit__subtitle}>What&apos;s in Every Emergency Van:</h4>
                <ul className={emergencyStyles.firstvisit__features}>
                  {[
                    { icon: <ZapIcon size={18} />, title: "Igniters & Thermocouples", desc: "The most common cause of pilot light failures and ignition issues — we carry spares for all major brands." },
                    { icon: <ToolIcon size={18} />, title: "Thermostats & Control Boards", desc: "From basic wall stats to smart zone controllers — we stock universal and OEM parts for Rinnai, Brivis, and Braemar." },
                    { icon: <TruckIcon size={18} />, title: "Universal Safety Components", desc: "Gas valves, pressure switches, heat exchangers, and burner assemblies for rapid swap-outs on the spot." },
                    { icon: <ShieldIcon size={18} />, title: "Full CO & Gas Safety Test Kit", desc: "Every repair ends with a complete carbon monoxide and gas pressure safety check — included at no extra charge." },
                  ].map((f, i) => (
                    <li key={i} className={emergencyStyles.firstvisit__feature}>
                      <span className={emergencyStyles.firstvisit__feature_icon}>{f.icon}</span>
                      <div className={emergencyStyles.firstvisit__feature_text}>
                        <strong>{f.title}</strong>
                        <span>{f.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p style={{ color: "var(--base-text-color)", fontSize: 13, lineHeight: 1.6, marginTop: 16 }}>
                  <strong style={{ color: "#111827" }}>Can&apos;t fix it same-night?</strong> In the rare case a specialised part is required, we make the unit safe, explain everything clearly, and prioritise sourcing it the next business day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            5. EMERGENCY PROTOCOL TIMELINE
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.process_section} style={{ background: "var(--base-bg)" }}>
          <div className="container container__fluid-xl">
            <SectionTitle
              dataSubtitle="What Happens When You Call"
              dataTitle="Our Emergency Response Protocol"
              dataAlign="center"
              dataMaxWidth="560px"
            />
            <div className={emergencyStyles.process__timeline}>
              {[
                {
                  num: "01",
                  icon: <PhoneIcon size={28} />,
                  title: "Instant Answer",
                  text: "A real person answers your call 24/7 — no automated menus, no voicemail. You speak directly to our dispatch team who take your details immediately.",
                },
                {
                  num: "02",
                  icon: <TruckIcon size={28} />,
                  title: "Immediate Dispatch",
                  text: "We locate the nearest available licensed technician to your suburb and dispatch them immediately. ETA given on the spot.",
                },
                {
                  num: "03",
                  icon: <ShieldIcon size={28} />,
                  title: "Make Safe & Diagnose",
                  text: "On arrival, we assess safety first — gas leak check, CO readings — then diagnose the root cause with professional testing equipment.",
                },
                {
                  num: "04",
                  icon: <FlameIcon size={28} />,
                  title: "Heat Restored",
                  text: "We repair the fault on-the-spot using stocked parts, test the full system, and only leave when your heating is running safely and reliably.",
                },
              ].map((step) => (
                <div key={step.num} className={emergencyStyles.process__step}>
                  <div className={emergencyStyles.process__step_num}>{step.num}</div>
                  <div className={emergencyStyles.process__step_icon} style={{ color: "var(--base-color)" }}>{step.icon}</div>
                  <h3 className={emergencyStyles.process__step_title}>{step.title}</h3>
                  <p className={emergencyStyles.process__step_text}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            6. BRANDS
        ═══════════════════════════════════════════════════════ */}
        <section style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="container container__fluid-xl">
            <SectionTitle
              dataSubtitle="Parts Stocked for All Major Brands"
              dataTitle="Emergency Repairs for Every Major Brand"
              dataAlign="center"
              dataMaxWidth="560px"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] items-center" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            7. TESTIMONIALS
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.testimonials_section}>
          <div className="container container__fluid-xl">
            <SectionTitle
              dataSubtitle="Real Melbourne Rescues"
              dataTitle="Real Emergency Rescues in Melbourne"
              dataAlign="center"
              dataMaxWidth="540px"
            />
          </div>
          <GasHeaterRepairTestimonials />
        </section>

        {/* ═══════════════════════════════════════════════════════
            8. SERVICE AREAS
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.areas_section}>
          <div className="container container__fluid-xl">
            <div className={emergencyStyles.areas__grid}>
              {/* Left */}
              <div>
                <SectionTitle
                  dataSubtitle="Where We Dispatch"
                  dataTitle="Our Emergency Dispatch Zones"
                  dataMaxWidth="360px"
                />
                <p style={{ color: "var(--base-text-color)", fontSize: 15, lineHeight: 1.7 }}>
                  We cover Melbourne&apos;s inner, south-east, eastern, and northern suburbs. Most calls receive a technician within 60 minutes. Call us to confirm availability in your area.
                </p>
                <div className={emergencyStyles.areas__btn}>
                  <a href="tel:0405133761" className={emergencyStyles.hero__emergencybtn}>
                    <PhoneIcon size={16} />
                    Confirm My Area
                  </a>
                </div>
              </div>
              {/* Right — suburb columns */}
              <div className={emergencyStyles.areas__columns}>
                {[
                  {
                    region: "Inner East",
                    suburbs: ["Box Hill", "Doncaster", "Balwyn", "Kew", "Hawthorn"],
                  },
                  {
                    region: "South East",
                    suburbs: ["Frankston", "Dandenong", "Berwick", "Clayton", "Moorabbin"],
                  },
                  {
                    region: "South",
                    suburbs: ["Caulfield", "Brighton", "Bentleigh", "Cheltenham", "Highett"],
                  },
                  {
                    region: "North & West",
                    suburbs: ["Bundoora", "Epping", "Broadmeadows", "Essendon", "Keilor"],
                  },
                ].map((col) => (
                  <div key={col.region} className={emergencyStyles.areas__col}>
                    <p className={emergencyStyles.areas__region}>
                      <MapPinIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
                      {col.region}
                    </p>
                    <ul>
                      {col.suburbs.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            9. FAQ
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.faq_section} style={{ background: "var(--base-bg)" }}>
          <div className="container container__fluid-xl">
            <div className={emergencyStyles.faq__grid}>
              {/* Left — image */}
              <div>
                <SectionTitle
                  dataSubtitle="Common Questions"
                  dataTitle="Emergency Repair FAQs"
                  dataMaxWidth="340px"
                />
                <div className={emergencyStyles.faq__img}>
                  <Image
                    src="/images/services/tab-img06.jpg"
                    width={560}
                    height={400}
                    quality={85}
                    alt="Gas heater emergency FAQ Melbourne"
                    
                  />
                </div>
              </div>
              {/* Right — accordion */}
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            10. FINAL CLICK-TO-CALL BANNER
        ═══════════════════════════════════════════════════════ */}
        <section className={emergencyStyles.callbanner}>
          <div className={emergencyStyles.callbanner__bg}>
            <Image
              src="/images/bg-01.jpg"
              fill
              style={{ objectFit: "cover" }}
              quality={60}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className={emergencyStyles.callbanner__overlay} />
          <div className="container container__fluid-xl">
            <div className={emergencyStyles.callbanner__inner}>
              <div className={emergencyStyles.callbanner__eyebrow}>
                <ClockIcon size={14} />
                Right Now. Any Time. Any Night.
              </div>
              <h2 className={emergencyStyles.callbanner__title}>
                Don&apos;t Endure a Freezing Night
              </h2>
              <p className={emergencyStyles.callbanner__sub}>
                One call is all it takes. We answer 24/7, dispatch immediately, and arrive stocked to fix it tonight.
              </p>
              <a href="tel:0405133761" className={emergencyStyles.callbanner__number}>
                <PhoneIcon size={32} />
                0405 133 761
              </a>
              <p className={emergencyStyles.callbanner__note}>
                Licensed &amp; insured ·  registered · No call-out fee quoted before arrival
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
