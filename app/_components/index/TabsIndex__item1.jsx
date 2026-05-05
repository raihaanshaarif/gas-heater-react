import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

import BoxIcon2 from "../Common/BoxIcon2";
export const BoxIcon2Data = [
  {
    id: 1,
    icon: `icon-2891086`,
    title: `Gas Heating Specialists`,
    text: `Our team will assess your gas heating needs and recommend the most effective solution, ensuring seamless installation or repair every time.`,
  },
  {
    id: 2,
    icon: `icon-3731419`,
    title: `Personalized, Friendly Service`,
    text: `We take time to explain your gas heating options and answer all your questions, so you feel confident and comfortable with your gas heater system.`,
  },
  {
    id: 3,
    icon: `icon-1365455`,
    title: `Industry Leaders`,
    text: `We stay ahead in the Melbourne gas heating industry by adopting the latest technology and best practices for efficient, safe, and reliable results.`,
  },
];
const TabsIndex__item1 = () => {
  return (
    <>
      <div className="md:grid-cols-2 md:grid  md:grid-flow-col md:gap-[30px]">
        <div className={`basis-1/2 md-max:mt-[-8px]`}>
          <SectionTitle
            dataSubtitle="what expect from us"
            dataTitle="Our Approach"
            dataMaxWidth="422px"
          />
          <p>
            Our approach is straightforward: deliver top-quality gas heater
            services in Melbourne at competitive prices, with no hidden costs
            and a 100% satisfaction guarantee on all workmanship. Our licensed
            gas heating technicians are available for fast, reliable gas heater
            repairs, servicing, and installation for your home or business.
          </p>
          <ul className="list__type1 lg-max:mt-[19px] lg:mt-[33px]">
            <li>Transparent pricing options for every gas heater service</li>
            <li>Expert, fully guaranteed workmanship on every job</li>
          </ul>
        </div>
        <div
          className={`basis-1/2 sm-max:mt-[35px] only-md:mt-[40px] md:mt-[7px]`}
        >
          <div className="img__fixed-height">
            <Image
              src="/images/home__tabimg01.jpg"
              fill
              quality={0}
              style={{ objectFit: "cover" }}
              alt="Our Approach"
            />
          </div>
        </div>
      </div>
      <div
        className={`relative sm-max:mt-[35px] only-md:mt-[40px] md:mt-[55px] grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg-max:gap-[20px]`}
      >
        <BoxIcon2 dataSrcData={BoxIcon2Data} />
      </div>
    </>
  );
};
export default TabsIndex__item1;
