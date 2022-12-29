import React from "react";

//data
import {skillsData} from "../../data/data";

//styles
import "./Skills.scss";

const Skills = () => {
	return (
		<section className="skills" id="skills" data-aos="fade-in">
			<div className="container">
				<ul className="skills__list">
					{skillsData.map((skill) => (
						<li key={skill.id} className="skills__list-item">
							<span className="skills__list-item-title">{skill.title}</span>
							<span className="skills__list-item-experience">{skill.experience}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
