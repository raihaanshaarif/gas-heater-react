import SectionTitle from "../Common/SectionTitle";
import styles from "./WhyChooseUs.module.css";
import { dataReasons, dataStats } from "./WhyChooseUsData";

const WhyChooseUs = () => {
  return (
    <div className="section__indent">
      <div className={`${styles.layout02} relative`}>
        {/* Background image half */}
        <div
          className={`${styles.layout02__bg} lazyload`}
          data-bg="images/about_img03.jpg"
        ></div>

        <div className="container container__fluid-xl">
          <div className={`${styles.layout02__content} relative`}>
            <SectionTitle
              dataSubtitle="why choose us?"
              dataTitle="We Guarantee Quality With Every Heating Service"
              dataTextUnder="Why Us?"
              dataAddClass="blocktitle__left"
              dataMaxWidth="520px"
            />
            <p className="indent__top">
              Our number one priority is outstanding customer service on every
              heating job — so you walk away 100% satisfied, every single time.
              Here&apos;s what sets us apart from the rest.
            </p>

            {/* Reason cards */}
            <div className={styles.reasons__grid}>
              {dataReasons.map(({ id, icon, title, desc }) => (
                <div key={id} className={styles.reason__card}>
                  <div className={styles.reason__icon}>{icon}</div>
                  <div className={styles.reason__body}>
                    <div className={styles.reason__title}>{title}</div>
                    <div className={styles.reason__desc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div className={styles.stats__bar}>
              {dataStats.map(({ id, value, label }) => (
                <div key={id} className={styles.stat__item}>
                  <div className={styles.stat__value}>{value}</div>
                  <div className={styles.stat__label}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
