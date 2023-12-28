"use client";
import { Anim4, Anim5 } from "@/animations/animation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
const ProjectCard = ({ i }: { i: number }) => {
	let container = useRef(null);
	let cardContainer = useRef(null);
	useGSAP(
		() => {
			Anim4();
		},
		{ scope: container }
	);
	useGSAP(
		() => {
			Anim5();
		},
		{ scope: cardContainer }
	);

	return (
		<div ref={cardContainer}>
			<div
				ref={container}
				className={` flex ${
					i % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
				} flex-col gap-8 p-4 border border-primary/80 bg-primary/10 transition-all hover:shadow-2xl hover:shadow-primary/20 rounded-2xl anim7`}
			>
				<a className="relative lg:flex-1 h-96 rounded-2xl overflow-hidden projectimg anim6">
					<Image
						src="/cinemania.png"
						alt="projectImg"
						layout="fill"
						objectFit="cover"
					/>
					<div className="absolute h-full w-full bg-primary/30 hover:bg-transparent transition-all" />
				</a>
				<div className="flex-1 anim6">
					<h2 className="2xl:text-3xl lg:text-2xl text-2xl text-primary font-semibold anim4">
						This is a project
					</h2>
					<p className=" text-card-foreground text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut
						eius necessitatibus laboriosam dolorum adipisci explicabo. Culpa
						tempore voluptas, deleniti iure beatae ad, et quia sit sequi
						voluptatum ducimus dolore?
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
