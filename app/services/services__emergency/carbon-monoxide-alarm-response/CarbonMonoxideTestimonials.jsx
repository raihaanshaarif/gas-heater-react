"use client";
import styles from "./GasHeaterTestimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Mark & Claire Donaghue",
    role: "Homeowners – Preston",
    stars: 5,
    text: "We booked a routine CO test after having headaches every time the heater was on. The technician found a cracked heat exchanger leaking carbon monoxide directly into our living room. They literally saved our lives. Do not skip this test.",
  },
  {
    id: 2,
    name: "Sandra Pham",
    role: "Landlord – 4 Properties, Springvale",
    stars: 5,
    text: "As a landlord I need to stay compliant with the 2-year gas safety rule. These guys service all four of my properties and send me legally recognised compliance reports the same day. Makes audits effortless and my tenants feel safe.",
  },
  {
    id: 3,
    name: "Tom Eriksen",
    role: "Homeowner – Bundoora",
    stars: 5,
    text: "My gas heater is 14 years old. The CO test found it was spilling small amounts of carbon monoxide — totally undetectable without proper equipment. They fixed the problem on the spot. Worth every cent for the peace of mind alone.",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Property Manager – Doncaster",
    stars: 5,
    text: "All my managed properties are now on an annual CO testing schedule. The reports are detailed, professional, and satisfy all Residential Tenancies Act requirements. Quick turnaround and no hassle whatsoever.",
  },
  {
    id: 5,
    name: "Rebecca Crane",
    role: "First Home Buyer – Ringwood",
    stars: 5,
    text: "Had a pre-purchase CO and gas safety check done on the house we were buying. Turned out the previous owner's heater had a dodgy flue. We used the report to renegotiate the price. Absolutely invaluable for any home buyer.",
  },
  {
    id: 6,
    name: "Anthony Muscat",
    role: "Homeowner – Frankston",
    stars: 5,
    text: "I was sceptical about whether CO testing was necessary for a heater only 8 years old. The technician's PPM reading showed levels three times what's considered acceptable. Old doesn't matter — it's the condition that counts. Completely eye-opening.",
  },
  {
    id: 7,
    name: "Jessica Wu",
    role: "Homeowner – Glen Waverley",
    stars: 5,
    text: "The digital service report I received covers every inspection point, CO measurements, flue readings, and next service recommendation. My insurance company actually requested a copy. The thoroughness of these guys is second to none.",
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

export function CarbonMonoxideTestimonials() {
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
}
