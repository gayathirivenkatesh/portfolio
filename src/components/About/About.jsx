import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Gayathiri working on a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive and user-friendly interfaces using React, HTML, and CSS. My focus is on delivering seamless user experiences and visually consistent designs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in creating scalable RESTful APIs using FastAPI, Node.js, and Django, with database integration using MongoDB and SQL. I focus on performance and reliability in server-side development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="AI/Full-Stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack & AI Enthusiast</h3>
              <p>
                Passionate about building end-to-end applications that integrate AI-driven features. I have experience with project workflows involving backend logic, frontend interfaces, and AI-based solutions for smarter applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
