"use client";
import styles from "./GasHeaterTestimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Olivia Hartmann",
    role: "Homeowner – Glen Waverley",
    stars: 5,
    text: "Fantastic gas heater installation from start to finish. The team arrived on time, explained the options suited to our home size, and installed a ducted system in under a day. Warm, cosy winter ever since — couldn't ask for more!",
  },
  {
    id: 2,
    name: "Ben Thompson",
    role: "Homeowner – Doncaster",
    stars: 5,
    text: "Super impressed with the team's professionalism. Our gas heater was installed neatly and running perfectly the same day. The pricing was transparent with no hidden extras. Highly recommend for anyone in Melbourne.",
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Homeowner – Frankston",
    stars: 5,
    text: "Called them to replace our old Rinnai unit. The technician was knowledgeable, explained everything clearly, and the new system is whisper-quiet. Our energy bills have already dropped. Excellent service all round.",
  },
  {
    id: 4,
    name: "James Patterson",
    role: "Homeowner – Box Hill",
    stars: 5,
    text: "Had a new Brivis ducted heater installed before winter. The crew were punctual, kept the house tidy, and got the job done in one visit. The gas compliance certificate was provided on the day. Very professional.",
  },
  {
    id: 5,
    name: "Michelle Adams",
    role: "Property Manager – Caulfield",
    stars: 5,
    text: "Used them across three rental properties for heater installations. Every time the work is clean, on schedule, and the tenants are happy. Reliable team you can trust to do the job right the first time.",
  },
  {
    id: 6,
    name: "Liam O'Connor",
    role: "Homeowner – Berwick",
    stars: 5,
    text: "We upgraded from a old space heater to a full ducted gas system. The whole process — from the free quote to final installation — was seamless. The difference in warmth throughout the house is remarkable.",
  },
  {
    id: 7,
    name: "Christopher Brown",
    role: "Homeowner – Boronia",
    stars: 5,
    text: "Professional installation of a wall furnace in our older home. They worked around tight ceiling spaces without any fuss. Competitive price and the end result looks and works brilliantly. Would use again without hesitation.",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Duplicate cards so the single-row marquee loops seamlessly
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

const GasHeaterTestimonials = () => {
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

export default GasHeaterTestimonials;
