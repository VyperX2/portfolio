"use client";
import { Anim4, Anim5 } from "@/animations/animation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface CardProps {
	i: number;
	title: string;
	desc: string;
	src: string;
	technologies: string[];
	site: string;
	github: string;
}
const ProjectCard = ({
	desc,
	src,
	technologies,
	title,
	i,
	site,
	github,
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
			(card as HTMLElement).onmousemove = (e: any) => handleMouseMove(e);
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
			<CardContainer className="w-full">
				<CardBody className="w-full">
					<div
						ref={container}
						className={`card relative flex ${
							i % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
						} flex-col gap-8 p-4 border border-primary/80 bg-primary/10 transition-all hover:shadow-2xl hover:shadow-primary/20 rounded-2xl anim7 lg:h-fit h-[520px]`}
					>
						{/* <CardItem
							translateZ="70"
							className="relative lg:flex-1  rounded-2xl overflow-hidden projectimg"
						> */}
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
						{/* </CardItem> */}
						<CardItem translateZ="50" className="flex-1 anim6 flex flex-col ">
							<h2 className="2xl:text-3xl lg:text-2xl text-2xl text-primary font-semibold anim4">
								{title}
							</h2>
							<p className="text-muted-foreground font-semibold sm:w-[85%]">
								{desc}
							</p>
							<div className="flex items-center gap-4 lg:mt-auto mt-6">
								<a
									className=" border border-primary text-white px-4 py-2 bg-primary rounded-lg hover:rotate-[-18deg] transition-all"
									href={site}
									target="_blank"
								>
									Visit Site
								</a>
								<a
									className=" border border-primary px-4 py-2 bg-transparent  rounded-lg hover:rotate-[18deg] transition-all"
									href={github}
									target="_blank"
								>
									View Code
								</a>
							</div>
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
		</div>
	);
};

export default ProjectCard;
