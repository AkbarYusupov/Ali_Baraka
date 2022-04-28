import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.css";
import { Navigation } from "swiper";
export default function Swiper_home() {
  return (
    <>
      <div className={styles["swiper_top"]}>
        <span>ВСЕ ДЛЯ ТЕПЛИЦ</span>
      </div>
      <Swiper
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={20}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        className="mySwiper"
        modules={[Navigation]}
      >
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src="./Images/swiper 1.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src="./Images/swiper 1.png" />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src="./Images/swiper 1.png" />
        </SwiperSlide>
       
      </Swiper>
      <div className="container">
          <div className={styles["button"]}>
            <div className="prev">
              <img src="/Images/prev.png" />
            </div>
            <div className="next">
              <img src="/Images/Vector.png" />
            </div>
          </div>
        </div>
    </>
  );
}
