import React from "react";

//data
import { skillsData } from "../../data/data";

//styles
import "./Skills.scss";

const Skills: React.FC = () => {
  return (
    <section
      className="skills"
      id="skills"
      data-aos="fade-up"
      data-aos-delay="1200"
    >
      <div className="container">
        <ul className="skills__list">
          {skillsData.map((skill) => (
            <li key={skill.id} className="skills__list-item">
              <span className="skills__list-item-title">{skill.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
