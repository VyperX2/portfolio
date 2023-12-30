import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AnimatedCursor from "react-animated-cursor";
export default function Home() {
	return (
		<main className="container flex flex-col mt-20 overflow-hidden relative gap-y-60">
			<div className="hidden lg:block absolute">
				<AnimatedCursor
					innerSize={8}
					outerSize={35}
					innerScale={1}
					outerScale={2}
					outerAlpha={0}
					// hasBlendMode={true}
					// The library had an issue where the type wasnt described so i added it and it runs okay locally but not when deployed so i will later on submit a pull request to the github
					innerStyle={{
						backgroundColor: "rgb(124, 58 , 237)",
					}}
					outerStyle={{
						border: "3px solid rgb(124, 58 , 237)",
					}}
					clickables={["a", "button", ".projectimg"]}
				/>
			</div>
			<Hero />
			<Skills />
			<Projects />
			<About />
			<Contact />
		</main>
	);
}
