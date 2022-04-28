import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
export default function Header() {
  return (
    <>
      <div className="container">
        <div className={styles["header"]}>
          <div className={styles["header_inner"]}>
            <div className={styles["header_logo"]}>
              <img src="/Images/Logo.png" />
            </div>
            <div className={styles["nav"]}>
              <ul>
                <li>
                  <Link href="/">
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>галерия</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>партнеры</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>контакы</a>
                  </Link>
                </li>
              </ul>
              <div className={styles["phone"]}>
             <div className={styles["phone_img"]}>
             <img src="/Images/Phone.png" />
             </div>
            <div className={styles["phone_num"]}>
            <Link href="tel:95-004-80-90">
                <a>95-004-80-90</a>
              </Link>
              <Link href="tel:94-641-40-00">
                <a>94-641-40-00</a>
              </Link>
            </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
