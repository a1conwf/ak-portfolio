import React from "react";
import CtaButton from "../../../ui/CtaButton/CtaButton";

//styles
import "./ProjectItem.scss";

const ProjectItem = (props) => {
  const { img, name, techList, liveLink, gitRepo } = props;

  return (
    <article className="project">
      <div className="project__img">
        <div className="project__img-overlay"></div>
        <img src={img} alt="project-img" />

        <div className="project__cta-desk fadeIn-bottom">
          <CtaButton text="View Project" link={liveLink} linkTarget="_blank" />
          <CtaButton text="View code" link={gitRepo} linkTarget="_blank" />
        </div>
      </div>

      <span className="project__title">{name}</span>

      <ul className="project__tech-list">
        {techList.map((item) => (
          <li key={item} className="project__tech-list-item">
            {item}
          </li>
        ))}
      </ul>

      <div className="project__cta-mob">
        <CtaButton text="View Project" link={liveLink} linkTarget="_blank" />
        <CtaButton text="View code" link={gitRepo} linkTarget="_blank" />
      </div>
    </article>
  );
};

export default ProjectItem;
