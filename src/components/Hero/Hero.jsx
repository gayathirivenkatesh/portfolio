import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gayathiri V</h1>
        <p className={styles.description}>
          Passionate Computer Technology undergraduate with hands-on experience in software development, full-stack development, and AI-driven solutions.  
          Interested in cloud computing and machine learning, eager to contribute innovative ideas to dynamic development teams.
        </p>

      <a
        href="/portfolio/resume/GayathiriV_Resume.pdf"
        className={styles.contactBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        View CV
      </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Gayathiri"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
