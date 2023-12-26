import React from "react";
import SkillsGrid from "./SkillsGrid";

const Skills = () => {
	return (
		<section className=" mt-20 flex flex-col">
			<h1
				data-value="My Skills"
				className="2xl:text-4xl lg:text-3xl md:text-3xl text-2xl text-primary font-semibold inline-block w-fit mb-8 "
			>
				My Skills
			</h1>
      <SkillsGrid />
		</section>
	);
};

export default Skills;
