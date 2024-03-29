import { projectsData } from "@/utils/constants";
import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
	return (
		<div className="flex flex-col lg:gap-20 gap-40  ">
			{projectsData.map((project, i) => (
				<ProjectCard {...project} i={i} />
			))}
		</div>
	);
};

export default ProjectShowcase;
