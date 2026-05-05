"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import styles from "./Singlepost.module.css";

export default function PostSlider({ postData }) {
  if (!postData.img__slider) return null;

  return (
    <div
      className={`${styles.post__slider} ${styles.post__img} relative pagination__inner overflow-hidden`}
    >
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectCreative]}
      >
        {postData.img__slider.map(({ idslide, slide }) => (
          <SwiperSlide key={idslide}>
            <Image
              src={slide}
              width="780"
              height="449"
              
              style={{ objectFit: "cover" }}
              quality={0}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
