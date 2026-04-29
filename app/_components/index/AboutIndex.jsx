import styles from "./AboutIndex.module.css";
import SectionTitle from "../Common/SectionTitle";
import BoxIcon from "../Common/BoxIcon";
import { BoxIconData } from "../Common/BoxIconData";
import Link from "next/link";

const features = [
  {
    id: 1,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26" aria-hidden="true">
        <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2zm0 2a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm.75 3.5v5.19l3.53 2.04-.75 1.3L11 13.5V7.5h1.75z" fill="currentColor"/>
      </svg>
    ),
    title: "24/7 Emergency Response",
    desc: "Same-day callouts across Melbourne — we're there when your heating fails most.",
  },
  {
    id: 2,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26" aria-hidden="true">
        <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17l-6.18 3.02L7 13.14 2 8.27l6.91-1.01L12 1z" fill="currentColor"/>
      </svg>
    ),
    title: "Licensed & Certified Technicians",
    desc: "All work performed by fully licensed gas fitters — safe, compliant, and guaranteed.",
  },
  {
    id: 3,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26" aria-hidden="true">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" fill="currentColor"/>
      </svg>
    ),
    title: "All Major Brands Serviced",
    desc: "Rinnai, Brivis, Bonaire, Braemar, Vulcan, Pyrox & more — we know them all.",
  },
  {
    id: 4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="currentColor"/>
      </svg>
    ),
    title: "Carbon Monoxide Safety Testing",
    desc: "Protect your family with professional CO detection and heater safety audits.",
  },
];

const AboutIndex = () => {
  return (
    <>
      <div className="container container__fluid-lg section__inner">
        <div className={`sm:flex sm:items-start lg-max:gap-[30px] relative`}>
          {/* Left column: image */}
          <div className="basis-1/2">
            <div className={`${styles.img__align} relative`}>
              <picture>
                <source srcSet="/images/img-01.jpg" type="image/jpg" />
                <source srcSet="/images/img-01.webp" type="image/webp" />
                <img
                  width={565}
                  height={514}
                  className="object-cover"
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Melbourne gas heater specialists"
                />
              </picture>
              <div
                className={`${styles.img__label} obj__inner-center flex-col absolute`}
              >
                <picture>
                  <source srcSet="/images/home__form-label_bg.png" type="image/png" />
                  <source srcSet="/images/home__form-label_bg.webp" type="image/webp" />
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    className="size-full block object-cover absolute t-[0] l-[0]"
                    alt="100% Satisfaction Guarantee"
                    loading="lazy"
                  />
                </picture>
                <div className={`${styles.img__label_icon} icon-1701875`}></div>
                <div className={`${styles.img__label_text1} font-bold`}>
                  100<sub className="relative">%</sub>
                </div>
                <div className={`${styles.img__label_text2}`}>
                  Satisfaction Guarantee
                </div>
              </div>
              {/* Experience ribbon */}
              <div className={styles.img__ribbon}>
                <span className={styles.img__ribbon_num}>15+</span>
                <span className={styles.img__ribbon_label}>Years Serving Melbourne</span>
              </div>
            </div>
          </div>

          {/* Right column: content */}
          <div className="basis-1/2 sm-max:mt-[35px]">
            <SectionTitle
              dataSubtitle="about company"
              dataTitle={"Melbourne's Gas Heating Specialists\nService You Can Trust"}
              dataMaxWidth="500px"
            />
            <p className="indent__top">
              For over 15 years, Melbourne households and businesses have relied
              on our licensed technicians for fast, honest, and affordable gas
              heating solutions. From routine servicing and new installations to
              urgent emergency call-outs, we handle every job with care —
              leaving your home warm, safe, and fully compliant.
            </p>

            {/* Feature highlight grid */}
            <div className={styles.feature__grid}>
              {features.map(({ id, svg, title, desc }) => (
                <div key={id} className={styles.feature__item}>
                  <div className={styles.feature__icon}>{svg}</div>
                  <div className={styles.feature__body}>
                    <div className={styles.feature__title}>{title}</div>
                    <div className={styles.feature__desc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats + CTA */}
            <div className={styles.bottom__row}>
              <div
                className={`${styles.boxicon__wrapper} relative grid grid-cols-2 lg:gap-[30px] lg-max:gap-[20px]`}
              >
                <BoxIcon dataSrcData={BoxIconData} />
              </div>
              <Link href="/services" className={`${styles.about__cta} btn`}>
                <span>Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutIndex;
