"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { dataServices as CaruselServicesData } from "./CaruselServicesData";
import styles from "./CaruselServices.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const CaruselServices = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        className={`overflow-inherit lg__indent-x pagination__indent-top`}
        breakpoints={{
          575: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1501: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
        }}
      >
        {CaruselServicesData.map(
          ({ id, title, subtitle, srcLink, icon, srcimg, text, list }) => (
            <SwiperSlide key={id}>
              <Link href={srcLink} className={`${styles.imgbox} block`}>
                {srcimg ? (
                  <div
                    className={`${styles.imgbox__img} obj__indent-centerBefore overflow-hidden relative block leading-none`}
                  >
                    <Image
                      src={srcimg}
                      loading={`eager`}
                      width={568}
                      height={530}
                      quality={0}
                      alt={title}
                      priority
                    />
                  </div>
                ) : null}
                {/* Imgbox Holder Small */}
                <div
                  className={`${styles.contsmall__holder} absolute flex items-center z-[2]`}
                >
                  <div className={`${styles.contsmall__icon} relative`}>
                    <svg
                      className={styles.contsmall__icon_bg}
                      viewBox="0 0 100 100"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="currentColor"
                        fillOpacity="0.13"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(0 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(45 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(90 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(135 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(180 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(225 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(270 50 50)"
                      />
                      <rect
                        x="43"
                        y="3"
                        width="14"
                        height="18"
                        rx="3"
                        fill="currentColor"
                        transform="rotate(315 50 50)"
                      />
                      <circle cx="50" cy="50" r="35" fill="currentColor" />
                    </svg>
                    <span>{icon}</span>
                  </div>
                  <div className={`${styles.contsmall__cont}`}>
                    {title ? (
                      <div className={`${styles.contsmall__title} relative`}>
                        {title}
                      </div>
                    ) : null}
                    {subtitle ? (
                      <div className={`${styles.contsmall__subtitle} relative`}>
                        {subtitle}
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* Imgbox Holder Large */}
                <div
                  className={`${styles.contlarge__holder} absolute flex items-center`}
                >
                  <div className={`${styles.contlarge__cont}`}>
                    <div
                      className={`${styles.contlarge__holder_title} flex items-center`}
                    >
                      <div className={`${styles.contlarge__icon} relative`}>
                        <svg
                          className={styles.contlarge__icon_bg}
                          viewBox="0 0 100 100"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="currentColor"
                            fillOpacity="0.13"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(0 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(45 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(90 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(135 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(180 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(225 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(270 50 50)"
                          />
                          <rect
                            x="43"
                            y="3"
                            width="14"
                            height="18"
                            rx="3"
                            fill="currentColor"
                            transform="rotate(315 50 50)"
                          />
                          <circle cx="50" cy="50" r="35" fill="currentColor" />
                        </svg>
                        <span>{icon}</span>
                      </div>
                      <div className={`${styles.contlarge__title_wrapper}`}>
                        {title ? (
                          <div className={`${styles.contlarge__title}`}>
                            {title}
                          </div>
                        ) : null}
                        {subtitle ? (
                          <div
                            className={`${styles.contlarge__subtitle} relative`}
                          >
                            {subtitle}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <p>{text}</p>
                    <ul className={`${styles.list__type1} list__type1`}>
                      {list &&
                        list.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </div>
                  <div
                    className={`${styles.externallink} icon-545682 obj__inner-center`}
                  ></div>
                </div>
              </Link>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </>
  );
};
export default CaruselServices;
