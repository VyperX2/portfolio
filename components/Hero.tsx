import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
const Hero = () => {
	return (
		<section className="flex lg:flex-row flex-col items-center n gap-y-12 w-full h-[90vh] mt-6 lg:mt-0">
			<div className="lg:flex-1">
				<h1 className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-primary font-semibold ">
					Mateen Ahmed
				</h1>
				<h3 className="2xl:text-4xl lg:text-2xl text-2xl text-muted-foreground font-semibold">
					A Front-End <br className=" md:hidden lg:block " /> Web-Developer
				</h3>
			</div>
			<div className="flex-1 w-full ">
				<AspectRatio ratio={3 / 2}>
					<Image
						src="/illustration.png"
						layout="fill"
						alt="Illustration"
						draggable="false"
						className="object-cover"
					/>
				</AspectRatio>
			</div>
		</section>
	);
};

export default Hero;
