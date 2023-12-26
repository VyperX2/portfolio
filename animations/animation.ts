import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Anim1() {
	const tl1 = gsap.timeline();
	tl1
		.from(".anim2", {
			opacity: 0,
			y: 100,
			duration: 0.8,
			stagger: 0.3,
		})
		.from(".anim1", {
			opacity: 0,
			y: 100,
			duration: 0.8,
			delay: 0.3,
		})
		.from("#logo", { opacity: 0, y: 100 });
}

export function Anim2() {
	const tl2 = gsap.timeline();
	tl2.from(".anim3", {
		opacity: 0,
		y: 100,
		duration: 0.8,
		stagger: 0.3,
	});
}
