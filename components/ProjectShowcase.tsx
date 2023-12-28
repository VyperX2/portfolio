import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
	return (
		<div className="flex flex-col gap-20">
			<ProjectCard i={1} />
			<ProjectCard i={2} />
			<ProjectCard i={2} />
			<ProjectCard i={2} />
			<ProjectCard i={2} />
			<ProjectCard i={2} />
		</div>
	);
};

export default ProjectShowcase;
