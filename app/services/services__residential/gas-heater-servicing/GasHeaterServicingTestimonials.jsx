"use client";
import styles from "../gas-heater-installation/GasHeaterTestimonials.module.css";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const servicingTestimonials = [
  {
    id: 1,
    initials: "DW",
    name: "David Williamson",
    location: "Doncaster",
    stars: 5,
    text: "Had our Brivis ducted system serviced before winter. The tech pulled out about 5 years' worth of dust from the heat exchanger. Our gas bill actually dropped by around 18% the following month — genuinely impressed.",
  },
  {
    id: 2,
    initials: "RL",
    name: "Rachel Liu",
    location: "Glen Waverley",
    stars: 5,
    text: "Fast, professional and clean. The technician explained every step, showed me the CO test results, and left a detailed service report for our warranty records. Exactly what you want from a gas service company.",
  },
  {
    id: 3,
    initials: "BM",
    name: "Ben McCarthy",
    location: "Frankston",
    stars: 5,
    text: "Signed up for the annual maintenance plan. Worth every cent — they call us with reminders before winter, priority booking every year, and the 10% off our repair last year saved us more than the plan cost.",
  },
  {
    id: 4,
    initials: "AT",
    name: "Amelia Turner",
    location: "Ringwood",
    stars: 5,
    text: "Our Rinnai wall heater was making a clicking sound and the flame looked yellow. They came same day, identified a faulty burner nozzle during the service, fixed it on the spot and ran the CO test. No mess, no drama.",
  },
  {
    id: 5,
    initials: "KN",
    name: "Kevin Nguyen",
    location: "Berwick",
    stars: 5,
    text: "I manage several rental properties and use this company for all annual gas heater services. They provide proper service reports every time — essential for warranty and compliance. Punctual every single time.",
  },
  {
    id: 6,
    initials: "SC",
    name: "Sarah Chambers",
    location: "Hampton",
    stars: 5,
    text: "Hadn't had our ducted heater serviced in four years. The tech discovered a small crack in the heat exchanger — potentially a serious CO risk. Very grateful they caught it early. Highly recommend annual servicing.",
  },
  {
    id: 7,
    initials: "JP",
    name: "James Portelli",
    location: "Bundoora",
    stars: 5,
    text: "Excellent flat-rate pricing — no hidden fees, exactly what was quoted over the phone. The technician was early, friendly, and finished quickly. The heater is running noticeably quieter and more efficiently now.",
  },
];

const allTestimonials = [
  ...servicingTestimonials,
  ...servicingTestimonials,
  ...servicingTestimonials,
  ...servicingTestimonials,
];

function TestimonialCard({ t }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__avatar}>{t.initials}</div>
        <div>
          <div className={styles.card__name}>{t.name}</div>
          <div className={styles.card__location}>{t.location}</div>
        </div>
        <div className={styles.card__stars}>
          {Array.from({ length: t.stars }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>
      <p className={styles.card__text}>{t.text}</p>
    </div>
  );
}

export function GasHeaterServicingTestimonials() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.inner}>
          {allTestimonials.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
