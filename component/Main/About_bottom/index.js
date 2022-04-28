import React from "react";
import styles from "./index.module.css";
export default function index() {
  return (
    <div className="container">
      <div className={styles["about_bottom"]}>
        <div className={styles["flag"]}>
          <img src="/Images/flag.png" alt="" />
        </div>
        <div className={styles["info"]}>
          <h3>See why we are trusted the world over</h3>
          <span>
            The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency.
          </span>
          <div className={styles["acordian"]}>
            <div className={styles["wrapper"]}>
              <div className={styles["half"]}>
                <div className={styles["tab"]}>
                  <input id="tab-one" type="checkbox" name="tabs" />
                  <label htmlFor="tab-one"><span>Do you provide customer support?</span></label>
                  <div className={styles["tab-content"]}>
                    <p>
                      Ваша идеальная тема также зависит от типа контента,
                      который публикует ваш сайт. По сути, вы хотите смотреть на
                      такие вещи, как скорость загрузки, хотите ли вы
                      современный дизайн или что-то действительно простое, такие
                      функции, как магазин электронной коммерции, блог или
                      видеоблог, а также количество изображений и текст в теме.
                    </p>
                  </div>
                </div>
                <div className={styles["tab"]}>
                  <input id="tab-two" type="checkbox" name="tabs" />
                  <label htmlFor="tab-two"><span style={{color:'#FCBD17'}}>How much traffic can the hosting handle?</span></label>
                  <div className={styles["tab-content"]}>
                    <p>
                      Ваша идеальная тема также зависит от типа контента,
                      который публикует ваш сайт. По сути, вы хотите смотреть на
                      такие вещи, как скорость загрузки, хотите ли вы
                      современный дизайн или что-то действительно простое, такие
                      функции, как магазин электронной коммерции, блог или
                      видеоблог, а также количество изображений и текст в теме.
                    </p>
                  </div>
                </div>
                <div className={styles["tab"]}>
                  <input id="tab-three" type="checkbox" name="tabs" />
                  <label htmlFor="tab-three"><span>Do you have any questions for us?</span></label>
                  <div className={styles["tab-content"]}>
                    <p>
                      Ваша идеальная тема также зависит от типа контента,
                      который публикует ваш сайт. По сути, вы хотите смотреть на
                      такие вещи, как скорость загрузки, хотите ли вы
                      современный дизайн или что-то действительно простое, такие
                      функции, как магазин электронной коммерции, блог или
                      видеоблог, а также количество изображений и текст в теме.
                    </p>
                  </div>
                </div>
                <div className={styles["tab"]}>
                  <input id="tab-four" type="checkbox" name="tabs" />
                  <label htmlFor="tab-four"><span style={{color:'#FCBD17'}}>Do you have any questions for us?</span></label>
                  <div className={styles["tab-content"]}>
                    <p>
                      Ваша идеальная тема также зависит от типа контента,
                      который публикует ваш сайт. По сути, вы хотите смотреть на
                      такие вещи, как скорость загрузки, хотите ли вы
                      современный дизайн или что-то действительно простое, такие
                      функции, как магазин электронной коммерции, блог или
                      видеоблог, а также количество изображений и текст в теме.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
