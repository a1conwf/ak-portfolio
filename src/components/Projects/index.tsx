import React, { useEffect, useState } from "react";
import AOS from "aos";

import CtaButton from "../../ui/CtaButton";
import ProjectItem from "./ProjectItem";

import { projectsData } from "../../constants";

import "./Projects.scss";

const Projects: React.FC = () => {
	const [visibleProjects, setVisibleProjects] = useState(3);

	useEffect(() => {
		AOS.refresh();
	}, [visibleProjects]);

	return (
		<section className="projects" id="projects" data-aos="fade-up" data-aos-delay="100">
			<div className="container">
				<div className="projects__header">
					<h2 className="projects__title">Projects</h2>
					<CtaButton text="Contact me" link="#contact" />
				</div>

				<div className="projects__grid">
					{projectsData?.slice(0, visibleProjects).map((project, idx) => (
						<div key={project.id} data-aos="fade-up" data-aos-delay={100 + (idx % 3) * 80}>
							<ProjectItem
								img={project.img}
								name={project.name}
								techList={project.techList}
								liveLink={project.liveLink}
								gitRepo={project.gitRepo}
							/>
						</div>
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
