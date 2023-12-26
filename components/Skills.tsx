"use client";
import { useGSAP } from "@gsap/react";
import SkillsGrid from "./SkillsGrid";
import { useRef } from "react";
import { Anim2 } from "@/animations/animation";

const Skills = () => {
	let container = useRef(null);
	useGSAP(
		() => {
			Anim2();
		},
		{ scope: container }
	);
	return (
		<section ref={container} className=" mt-20 flex flex-col ">
			<h1
				data-value="My Skills"
				className="2xl:text-4xl lg:text-3xl md:text-3xl text-2xl text-primary font-semibold inline-block w-fit mb-8 anim3 "
			>
				My Skills
			</h1>
			<SkillsGrid />
		</section>
	);
};

export default Skills;
