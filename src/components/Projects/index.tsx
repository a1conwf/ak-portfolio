import React, { useState } from "react";

import CtaButton from "../../ui/CtaButton";
import ProjectItem from "./ProjectItem";

import { projectsData } from "../../constants";

import "./Projects.scss";

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <CtaButton text="Contact me" link="#contact" />
        </div>

        <div className="projects__grid">
          {projectsData?.slice(0, visibleProjects).map((project) => (
            <ProjectItem
              key={project.id}
              img={project.img}
              name={project.name}
              techList={project.techList}
              liveLink={project.liveLink}
              gitRepo={project.gitRepo}
            />
          ))}
        </div>

        {projectsData.length > visibleProjects && (
          <button
            className="btn load-more"
            onClick={() => setVisibleProjects((prevValue) => prevValue + 3)}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
