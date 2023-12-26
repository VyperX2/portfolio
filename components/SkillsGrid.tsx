"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { techArray } from "@/utils/constants";

const SkillsGrid = () => {
	return (
		<div>
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
				className="w-full "
			>
				<CarouselPrevious className=" border-primary/80 bg-primary/10 hover:bg-primary/5 transition-all hover:shadow-2xl hover:shadow-primary/20" />
				<CarouselNext className="border-primary/80 bg-primary/10 hover:bg-primary/5 transition-all hover:shadow-2xl hover:shadow-primary/20" />
				<CarouselContent>
					{techArray.map((tech, index) => (
						<CarouselItem
							className="2xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full"
							key={index}
						>
							<div className="p-1">
								<Card className="border-primary/80 bg-primary/10 hover:bg-primary/5 transition-all hover:shadow-2xl hover:shadow-primary/20 ">
									<CardContent className=" flex flex-col aspect-square items-center justify-between py-12">
										<Image
											src={tech.src}
											alt={tech.title}
											width={120}
											height={120}
										/>
										<h4 className=" text-muted-foreground text-lg font-semibold">
											{tech.title}
										</h4>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default SkillsGrid;
