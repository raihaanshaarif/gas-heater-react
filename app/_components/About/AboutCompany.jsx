import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Signature from "../Common/Signature";
import styles from "./AboutCompany.module.css";
import imageLayout from "../../../public/images/about_img01.jpg";
import imageLayout2 from "../../../public/images/about_img02.jpg";
const AboutCompany = () => {
  return (
    <div className="section__indent">
      <div className="container container__fluid-lg">
        <div className={`sm:flex xl-max:gap-[30px]  xl:gap-[54px]`}>
          <div className={`sm:basis-1/2 md:basis-5/12 lg:basis-1/2`}>
            <div className="relative">
              <div className={`${styles.img__large} leading-none`}>
                <Image
                  src={imageLayout}
                  loading={`eager`}
                  width={533}
                  height={421}
                  style={{ objectFit: "cover" }}
                  quality={0}
                  alt="img"
                />
              </div>
              <div className={`${styles.img__small} relative leading-none`}>
                <Image
                  src={imageLayout2}
                  loading={`eager`}
                  width={284}
                  height={205}
                  style={{ objectFit: "cover" }}
                  quality={0}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div
            className={`${styles.col__content} sm:basis-1/2 md:basis-1/2 lg:basis-1/2`}
          >
            <SectionTitle
              dataSubtitle="about company"
              dataTitle="Melbourne's Trusted Heating Specialists - Gas Heater Service Melbourne"
              dataAddClass="blocktitle__topNone"
            />
            <div className={`${styles.custom__width}`}>
              <strong className="base__color">
                At Gas Heater Service Melbourne, we deliver expert heating
                solutions for homes and businesses across Melbourne.
              </strong>
              <p>
                Our experienced team ensures every installation, repair, and
                maintenance job is completed with precision, efficiency, and a
                commitment to your comfort. From gas heating to ducted heating
                systems, we tailor our services to suit your needs and budget.
                With over 35,000+ services completed and 15+ years of industry experience, 
                we take pride in solving any heating problem you may have in a quick, professional 
                and friendly manner.
              </p>
              <p>
                Our quality gas heating service and our personal customer
                service touch, sets us apart from other heating companies.
                Because we are family-owned and operated we are able to provide
                a Higher Standard of Heating Service at a competitive price.
              </p>
              <p>
                We are fully licensed and insured, with all technicians certified to work with 
                gas appliances according to Victorian safety standards. Our commitment to excellence, 
                transparent pricing, and customer satisfaction has earned us a 4.9-star rating 
                from over 127 verified customer reviews.
              </p>
              <p>
                Whether you need emergency repairs for your gas heater, scheduled maintenance to keep 
                your system running efficiently, or professional installation of a new heating system, 
                our team is here to help 24/7. We service all major brands including Braemar, Rinnai, 
                Brivis, Bonaire, Vulcan, Rheem, Bosch, and Dux across 144+ Melbourne suburbs.
              </p>
              <div className={styles.signature__indent}>
                {/* <Signature
                  dataSrcImg="/images/signature-img01.png"
                  dataTitle="Founder & Lead Technician"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCompany;
