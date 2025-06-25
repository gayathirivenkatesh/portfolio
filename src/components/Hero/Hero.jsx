import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gayathiri</h1>
<p className={styles.description}>
  I'm an enthusiastic full-stack developer skilled in React, Flask, Django, and MongoDB.  
  I have a strong foundation in UI/UX design, database systems, and scalable web application development.  
  I’m eager to apply my skills in dynamic tech environments to build impactful software solutions.
</p>

<a
  href="/resume/Gayathiri_Resume.pdf"
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
