"use client";
import styles from "./Testimonials.module.css";
import SectionTitle from "../Common/SectionTitle";
import { ReviewsCaruselData } from "../Testimonials/ReviewsCaruselData";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getHandle(name) {
  return (
    "@" +
    name
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .trim()
      .replace(/\s+/g, "_")
  );
}

const timestamps = [
  "Apr  22",
  "Dec 3",
  "Mar 25",
  "Jan 13",
  "June 26",
  "Apr 26",
];

function TweetCard({ text, signature__title, signature__text, stars, index }) {
  const initials = getInitials(signature__title);
  const handle = getHandle(signature__title);
  const timestamp = timestamps[index % timestamps.length];

  return (
    <div className={styles.tweet__card}>
      <div className={styles.tweet__header}>
        <div className={styles.tweet__avatar}>{initials}</div>
        <div className={styles.tweet__user}>
          <div className={styles.tweet__name}>
            {signature__title}
            <span className={styles.tweet__verified} aria-label="Verified">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="16"
                height="16"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C3.38 9.33 2.5 10.57 2.5 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className={styles.tweet__handle}>{handle}</div>
        </div>
        <div className={styles.tweet__x_logo} aria-label="Google">
          <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>
      </div>

      <p className={styles.tweet__text}>{text}</p>

      {stars ? (
        <div className={styles.tweet__stars}>
          {[...Array(stars)].map((_, i) => (
            <i key={i} className="icon-56786"></i>
          ))}
        </div>
      ) : null}

      <div className={styles.tweet__footer}>
        <span className={styles.tweet__role}>{signature__text}</span>
        <span className={styles.tweet__timestamp}>{timestamp}</span>
      </div>
    </div>
  );
}

// 6 copies so the marquee fills any screen width and loops seamlessly
const row1 = [
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
];
const row2 = [
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
  ...ReviewsCaruselData,
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials__wall}>
      <div className="container">
        <SectionTitle
          dataSubtitle="testimonials"
          dataTitle="What People Say About Us"
          dataAddClass="text-center"
        />
      </div>

      <div className={styles.marquee__wrapper}>
        {/* Row 1 — scrolls left */}
        <div className={styles.marquee__track}>
          <div className={styles.marquee__inner}>
            {row1.map((item, i) => (
              <TweetCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className={styles.marquee__track}>
          <div
            className={`${styles.marquee__inner} ${styles.marquee__reverse}`}
          >
            {row2.map((item, i) => (
              <TweetCard key={i} index={i + 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
