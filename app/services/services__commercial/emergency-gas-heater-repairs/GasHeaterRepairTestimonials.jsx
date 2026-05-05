"use client";
import styles from "../gas-heater-installation/GasHeaterTestimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Mark O'Sullivan",
    role: "Homeowner – Ringwood",
    stars: 5,
    text: "10 PM on a Saturday, temperature outside was 3°C. Our Brivis died completely. They answered on the first ring, arrived in Box Hill in 45 minutes, and had the part in the van. Back to warm by midnight. Absolute legends.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Homeowner – Doncaster",
    stars: 5,
    text: "Smelled gas from our heater at 11 PM on a Wednesday. They didn't just tell me to call the gas company — they came out immediately, found the leak, made it safe on the spot. Thorough CO check at the end. Incredibly fast and professional.",
  },
  {
    id: 3,
    name: "Daniel Kowalski",
    role: "Homeowner – Frankston",
    stars: 5,
    text: "Friday night, 7°C and the pilot light on our old Rinnai kept dying. Technician arrived within an hour, diagnosed a faulty thermocouple, had the part in the van, and fixed it on the spot. No call-back needed. Brilliant.",
  },
  {
    id: 4,
    name: "Fiona McLachlan",
    role: "Homeowner – Caulfield",
    stars: 5,
    text: "Dead heater at 8 AM with two young kids at home. They arrived by 10 AM, had us warm before lunch. The tech explained everything clearly and the price was exactly what they quoted over the phone. No surprises.",
  },
  {
    id: 5,
    name: "Aaron Hughes",
    role: "Property Manager – Clayton",
    stars: 5,
    text: "Tenant called me at 6 AM on a Sunday — no heat. I called these guys and they were there by 8 AM. Fixed on the first visit. My tenants were impressed and so was I. They're my first call for every emergency across all my properties.",
  },
  {
    id: 6,
    name: "Sophie Nguyen",
    role: "Homeowner – Box Hill",
    stars: 5,
    text: "4°C morning in July and heater blowing cold air. They came the same morning, found a faulty heat exchanger, replaced it cleanly, and did a full CO safety check. So relieved. Would not hesitate to recommend.",
  },
  {
    id: 7,
    name: "James Tremblay",
    role: "Homeowner – Berwick",
    stars: 5,
    text: "Loud banging from the heater at midnight. Called them, technician arrived in under an hour, diagnosed a cracked heat exchanger with CO risk. Made it safe immediately. Honest, transparent, and probably saved our lives.",
  },
];

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const row = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({ name, role, stars, text }) {
  const initials = getInitials(name);
  return (
    <div className={styles.card}>
      <div className={styles.card__stars}>
        {[...Array(stars)].map((_, i) => <StarIcon key={i} />)}
      </div>
      <p className={styles.card__text}>&ldquo;{text}&rdquo;</p>
      <div className={styles.card__footer}>
        <div className={styles.card__avatar}>{initials}</div>
        <div>
          <div className={styles.card__name}>{name}</div>
          <div className={styles.card__role}>{role}</div>
        </div>
      </div>
    </div>
  );
}

const GasHeaterRepairTestimonials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.inner}>
          {row.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GasHeaterRepairTestimonials;
