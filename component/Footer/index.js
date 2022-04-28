import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
export default function index() {
  return (
    <footer className={styles["footer"]}>
    <div className="container">
      <div className={styles["footer_inner"]}>
        <div>
          <div className={styles["logo"]}>
            <img src="/Images/logo_footer.png" />
          </div>
          <div className={styles["address"]}>
            <span>Tashkent, Mustakillik St, 15</span>
            <Link href="/">
              <a>Tel: +998 99 000 00 00</a>
            </Link>
            <Link href="/">
              <a>E-mail: hello@alibaraka.com</a>
            </Link>
          </div>
        </div>
        <div className={styles["about"]}>
          <ul>
            <li>About us</li>
            <li>About us</li>
            <li>Our team</li>
            <li>Frequent Questions</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={styles["about"]}>
          <ul>
            <li>Products</li>
            <li>Plyonka</li>
            <li>Zajim</li>
            <li>Isitish x Sovutish</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={styles["about"]}>
          <ul>
            <li>About us</li>
            <li>About us</li>
            <li>Our team</li>
            <li>Frequent Questions</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className={styles["footer_bottom"]}>
        <div>
          <span>Все права защищены.</span>
        </div>
        <div>
          <span>Разработано в</span>
          <img src="/Images/footer_bottom.png" alt="" />
          <img src="/Images/footer_bottom.png" alt="" />
        </div>
      </div>
     
    </div>
    <div className={styles["img"]}>
        <img src="/Images/footer_line.png" alt="" />
      </div>
    </footer>
  );
}
