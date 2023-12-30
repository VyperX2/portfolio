"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { Anim1 } from "@/animations/animation";

const Hero = () => {
	const container = useRef(null);
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	function handleMouseOver(event: any) {
		let iterations = 0;

		const interval = setInterval(() => {
			event.target.innerText = event.target.innerText
				.split("")
				.map((letter: any, index: number) => {
					if (index < iterations) {
						return event.target.dataset.value[index];
					}

					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iterations >= event.target.dataset.value.length) {
				clearInterval(interval);
			}

			iterations += 1 / 3;
		}, 30);
	}
	useEffect(() => {
		const h1s = document.querySelectorAll("h1")!;

		h1s.forEach((h1) => {
			h1.addEventListener("mouseover", handleMouseOver);
		});

		document.onmousemove = (e: any) => {
			let windowHeight = window.innerHeight;
			let windowWidth = window.innerWidth;
			let xValue = e.x;
			let yValue = e.y;

			let mousePosX = -1 + (xValue / windowWidth) * 2;
			let mousePosY = -(1 - (yValue / windowHeight) * 2);

			if (windowWidth > 425) {
				document.querySelector("#intro")!.animate(
					{
						transform: `translate(${mousePosX * 10}% , ${mousePosY * 10}%)`,
					},
					{ duration: 200, fill: "forwards" }
				);
			}
		};
	}, []);

	useGSAP(
		() => {
			Anim1();
		},
		{ scope: container }
	);
	return (
		<section
			id="home"
			className="flex lg:flex-row flex-col items-center justify-center gap-y-12 w-full h-[90vh] "
		>
			<div
				ref={container}
				id="intro"
				className=" mx-auto text-center leading-none absolute "
			>
				<h3 className="2xl:text-4xl lg:text-2xl text-2xl text-muted-foreground font-semibold anim2">
					Hi, My Name is
				</h3>
				<h1
					data-value="MATEEN"
					className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-primary font-semibold inline-block mr-4 anim2"
				>
					MATEEN
				</h1>
				<h1
					data-value="AHMED"
					className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-primary font-semibold inline-block anim2"
				>
					AHMED
				</h1>
				<p className="text-muted-foreground font-semibold anim2 leading-snug text-center w-[100vw]">
					I am a passionate front end web developer <br className="md:block " />
					I will help turn your ideas into reality
				</p>
			</div>
		</section>
	);
};

export default Hero;
