import React from "react";
import styles from "./index.module.css";
import Link from "next/dist/client/link";
export default function index() {
  return (
    <div className="container">
      <div className={styles["stories"]}>
        <div className={styles["stories_left"]}>
          <h3>How our client made 10x revenue</h3>
         <div className={styles["stories_image"]}>
         <img src="/Images/messi.jpg" alt="" />
         </div>
          <div className={styles["image_info"]}>
            <span>"I learned so much, even as a professional".</span>
            <span>
              "Ut vehicula lacus a lacus tempor, nec viverra justo condimentum.
              Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam
              dolor arcu, tincidunt a arcu eget."
            </span>
            <Link href="/">
              <a>Juan Huang</a>
            </Link>
          </div>
          <button>
          more stories
          </button>
        </div>
        <div className={styles["stories_info"]}>
          <h2>
          Other successful stories
          </h2>
          <div>
          <div className={styles["box"]}>
            <span>Amateur</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <Link href="/">
            <a >More Information</a>
            </Link>
          </div>
          <div className={styles["box"]}>
            <span>Amateur</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <Link href="/">
            <a >More Information</a>
            </Link>
          </div>
          <div className={styles["box"]}>
            <span>Amateur</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <Link href="/">
            <a >More Information</a>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
