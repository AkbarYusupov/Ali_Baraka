import React from "react";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode } from "swiper";
import { Navigation } from "swiper";

export default function Products() {
  return (
    <>
      <div className={styles["product"]}>
        <div className={styles["product_inner"]}>
          <img src="/Images/line.png" />
        </div>
        <div className="container">
          <h2>our production</h2>
          <span>
            Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work
          </span>
          <div className={styles["cards"]}>
            <div className={styles["card"]}>
              <div className={styles["card_img"]}>
                <img src="/Images/IMAGE.png" alt="" />
              </div>
              <div className={styles["card_info"]}>
                <span>Asosiy Plyonka Turlari</span>
                <span>
                  Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                  sint.
                </span>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card_img"]}>
                <img src="/Images/IMAGE.png" alt="" />
              </div>
              <div className={styles["card_info"]}>
                <span>Asosiy Plyonka Turlari</span>
                <span>
                  Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                  sint.
                </span>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card_img"]}>
                <img src="/Images/IMAGE.png" alt="" />
              </div>
              <div className={styles["card_info"]}>
                <span>Asosiy Plyonka Turlari</span>
                <span>
                  Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                  sint.
                </span>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card_img"]}>
                <img src="/Images/IMAGE.png" alt="" />
              </div>
              <div className={styles["card_info"]}>
                <span>Asosiy Plyonka Turlari</span>
                <span>
                  Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                  sint.
                </span>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card_img"]}>
                <img src="/Images/IMAGE.png" alt="" />
              </div>
              <div className={styles["card_info"]}>
                <span>Asosiy Plyonka Turlari</span>
                <span>
                  Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                  sint.
                </span>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card_img"]}>
                <img src="/Images/IMAGE.png" alt="" />
              </div>
              <div className={styles["card_info"]}>
                <span>Asosiy Plyonka Turlari</span>
                <span>
                  Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                  sint.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about"]}>
        <div className="container">
          <div className={styles["content"]}>
            <div className={styles["content_info"]}>
              <h2>little ABout our company </h2>
              <span>
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what
                you do."
              </span>
              <button>MORE ABOUT</button>
              <button>OUR YOUTUBE</button>
            </div>
            <div className={styles["content_img"]}>
              <img src="/Images/content.png" />
              <img src="/Images/image 39.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["swiper-fon"]}>
        <div className={styles["swiper_fon-img"]}>
          <img src="/Images/swiper-fon.png" alt="" />
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next",
          }}
          modules={[FreeMode, Navigation]}
          className={styles["mySwiper"]}
        >
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <img src="/Images/logos_google.png" alt="" />
          </SwiperSlide>
        </Swiper>
     <div className="next">
     <div className={styles["next"]}>
          <img src="/Images/next.png" />
        </div>
     </div>
      </div>
    </>
  );
}
