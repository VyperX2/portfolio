import gsap from "gsap";

export function Anim1() {
	const tl1 = gsap.timeline();
	tl1
		.from(".anim1", {
			opacity: 0,
			y: 100,
			duration: 0.8,
			delay: 0.3,
		})
		.from("#logo", { opacity: 0, y: 100 });
}
