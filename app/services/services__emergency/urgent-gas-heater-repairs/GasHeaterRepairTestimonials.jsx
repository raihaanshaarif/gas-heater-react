"use client";
import styles from "./GasHeaterTestimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Mark O'Sullivan",
    role: "Homeowner – Ringwood",
    stars: 5,
    text: "Our Brivis died on a freezing Sunday night. Called them and they arrived in under two hours — and had the part right there in the van. Absolute lifesavers. Will never call anyone else for gas heater repairs.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Homeowner – Doncaster",
    stars: 5,
    text: "Noticed a strange smell coming from our heater late at night. They took it seriously, came out immediately, found a small gas leak, and fixed it on the spot. Incredibly professional and thorough safety check.",
  },
  {
    id: 3,
    name: "Daniel Kowalski",
    role: "Homeowner – Frankston",
    stars: 5,
    text: "Pilot light kept going out on our old Rinnai unit. The technician diagnosed a faulty thermocouple in minutes and replaced it without needing to order parts. Heater's been working perfectly ever since.",
  },
  {
    id: 4,
    name: "Fiona McLachlan",
    role: "Homeowner – Caulfield",
    stars: 5,
    text: "Called them for an emergency repair after our ducted heater stopped mid-winter. Technician was friendly, explained exactly what was wrong, and had us warm again within an hour. Upfront pricing, no surprises.",
  },
  {
    id: 5,
    name: "Aaron Hughes",
    role: "Property Manager – Clayton",
    stars: 5,
    text: "I use them across multiple rental properties for all gas heater repairs. They're always on time, tenants consistently rate them highly, and the work is always done right. Wouldn't use anyone else in Melbourne.",
  },
  {
    id: 6,
    name: "Sophie Nguyen",
    role: "Homeowner – Box Hill",
    stars: 5,
    text: "Heater was blowing cold air on a 4°C morning. They came the same day, found a faulty heat exchanger, and replaced it cleanly. Carbon monoxide check included. So grateful for the fast, safe service.",
  },
  {
    id: 7,
    name: "James Tremblay",
    role: "Homeowner – Berwick",
    stars: 5,
    text: "Heater was making a loud banging noise. I was worried it was something serious — and it was. They fixed a cracked heat exchanger that was a serious CO risk. Transparent, honest, and probably saved our lives.",
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
