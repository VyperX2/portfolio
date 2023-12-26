"use client";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/utils/constants";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Anim1 } from "@/animations/animation";

const Navbar = () => {
	let container = useRef(null);
	useGSAP(
		() => {
			Anim1();
		},
		{ scope: container }
	);

	return (
		<nav
      id="nav"
			ref={container}
			className=" backdrop-blur-md container flex justify-between items-center text-primary font-semibold fixed left-0 right-0 top-0 pt-6 z-10 pb-4 "
		>
			<div className="flex items-center gap-2 noselect anim1">
				<div id="logo" className=" hover:rotate-90">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="32px"
						width="32px"
						viewBox="0 0 32 32"
					>
						<path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></path>
						<path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor"></path>
						<path d="M30 11V2h-9v2h7v7h2z" fill="currentColor"></path>
						<path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor"></path>
						<path
							d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z"
							fill="currentColor"
						></path>
					</svg>
				</div>
				<h2 id="name" className=" text-2xl">
					Mateen Ahmed
				</h2>
			</div>

			{/* DESKTOP VIEW */}
			<div className="md:flex space-x-8  hidden anim1">
				{navItems.map((item) => (
					<a
						key={item.href}
						className="hover:opacity-60 hover:scale-110  transition-all ease-in"
						href={item.href}
					>
						{" "}
						{item.title}{" "}
					</a>
				))}
				<ThemeToggle />
			</div>
			<div className=" md:hidden flex space-x-2">
				<Sheet>
					<SheetTrigger>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							viewBox="0 0 24 24"
							className="anim1"
						>
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
							></path>
						</svg>
					</SheetTrigger>
					<SheetContent className="border-l-primary">
						<nav className="flex flex-col gap-y-6">
							{navItems.map((item) => (
								<a
									key={item.href}
									className="hover:opacity-60 hover:scale-110 text-lg font-semibold text-primary transition-all ease-in relative"
									href={item.href}
								>
									{" "}
									{item.title}{" "}
								</a>
							))}
							<ThemeToggle />
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
