import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // Priority: open documentation first if available, else source
  const handleCardClick = () => {
    if (project.documentation) {
      window.open(project.documentation, "_blank", "noopener,noreferrer");
    } else if (project.source) {
      window.open(project.source, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
    >
      {/* Project Title */}
      <h3 className={styles.projectTitle}>
        {project.title || "Untitled Project"}
      </h3>

      {/* Description */}
      {project.description && (
        <p className={styles.projectDescription}>{project.description}</p>
      )}

      {/* Skills */}
      {project.skills && project.skills.length > 0 && (
        <div className={styles.skills}>
          {project.skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Links Section */}
      <div
        className={styles.links}
        onClick={(e) => {
          // 👇 Prevent the card click event when links are clicked
          e.stopPropagation();
        }}
      >
        {project.documentation ? (
          <a
            href={project.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`View documentation for ${project.title}`}
            onClick={(e) => e.stopPropagation()} // double safety
          >
            📄 Documentation
          </a>
        ) : (
          <span className={styles.linkDisabled}>📄 No Docs</span>
        )}

        {project.source ? (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`View source code for ${project.title}`}
            onClick={(e) => e.stopPropagation()} // double safety
          >
            💻 Source Code
          </a>
        ) : (
          <span className={styles.linkDisabled}>💻 Private</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
