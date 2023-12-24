import Hero from "@/components/Hero";
import AnimatedCursor from "react-animated-cursor";
// import Blob from "@/components/Blob";
// TODO FIX BLOB COMPONENT
export default function Home() {
	return (
		<main className="container flex flex-col mt-20 overflow-hidden">
			{/* <Blob /> */}
			<Hero />
			<AnimatedCursor
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={2}
				outerAlpha={0}
				hasBlendMode={true}
				innerStyle={{
					backgroundColor: "rgb(124, 58 , 237)",
				}}
				outerStyle={{
					border: "3px solid rgb(124, 58 , 237)",
				}}
				clickables={["a", "button"]}
			/>
		</main>
	);
}
