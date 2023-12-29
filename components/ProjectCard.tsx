"use client";
import { Anim4, Anim5 } from "@/animations/animation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CardProps {
	i: number;
	title: string;
	desc: string;
	src: string;
	technologies: string[];
	site: string;
}
const ProjectCard = ({
	desc,
	src,
	technologies,
	title,
	i,
	site,
}: CardProps) => {
	let container = useRef(null);
	let cardContainer = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e: any) => {
			const { currentTarget: target } = e;
			const rect = target.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			target.style.setProperty("--mouse-x", `${x}px`);
			target.style.setProperty("--mouse-y", `${y}px`);
		};

		for (const card of document.querySelectorAll(".card")) {
			card.onmousemove = (e) => handleMouseMove(e);
		}
	}, []);
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
				className={`card relative flex ${
					i % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
				} flex-col gap-8 p-4 border border-primary/80 bg-primary/10 transition-all hover:shadow-2xl hover:shadow-primary/20 rounded-2xl anim7`}
			>
				<a
					href={`${site}`}
					target="_blank"
					className="relative lg:flex-1 h-96 rounded-2xl overflow-hidden projectimg anim6"
				>
					<Image
						src={`/${src}`}
						alt="projectImg"
						layout="fill"
						objectFit="cover"
					/>
					<div className="absolute h-full w-full bg-primary/20 hover:bg-transparent transition-all" />
				</a>
				<div className="flex-1 anim6 flex flex-col ">
					<h2 className="2xl:text-3xl lg:text-2xl text-2xl text-primary font-semibold anim4">
						{title}
					</h2>
					<p className="text-muted-foreground font-semibold w-[85%]">{desc}</p>
					<div className="flex items-center mt-auto">
						<button className="">Visit Site</button>
						<button>View Code</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
