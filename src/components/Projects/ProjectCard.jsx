import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.skills}>
        {project.skills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.documentation && (
          <a
            href={project.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            📄 Documentation
          </a>
        )}
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            💻 Source Code
          </a>
        )}
      </div>
    </div>
  );
};
