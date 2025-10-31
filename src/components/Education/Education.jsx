import React from "react";
import "./Education.css";
import educationData from "../../data/education.json";

const Education = () => {
  return (
    <section className="education-container" id="education">
      <h2 className="education-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="edu-inst">{edu.institution}</p>
              <p className="edu-year">{edu.year}</p>
              <ul className="edu-details">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
