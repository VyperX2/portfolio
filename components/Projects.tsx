"use client";
import { useRef } from "react";
import ProjectShowcase from "./ProjectShowcase";
import { useGSAP } from "@gsap/react";
import { Anim3 } from "@/animations/animation";

const Projects = () => {
	let container = useRef(null);
	useGSAP(
		() => {
			Anim3();
		},
		{ scope: container }
	);
	return (
		<section id="projects" ref={container} className=" mt-40 flex flex-col ">
			<h1
				data-value="My Projects"
				className=" w-fit 2xl:text-4xl lg:text-3xl md:text-3xl text-2xl text-primary font-semibold inline-block mb-8 anim5"
			>
				My Projects
			</h1>
			<ProjectShowcase />
		</section>
	);
};

export default Projects;
