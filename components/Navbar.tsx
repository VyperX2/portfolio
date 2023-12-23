"use client";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/utils/constants";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useRef } from "react";
import { gsap } from "gsap";
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
			ref={container}
			className="container flex justify-between items-center text-primary font-semibold fixed left-0 right-0 top-0 pt-6 bg-transparent backdrop:blur-sm overflow-hidden"
		>
			{
				// GITHUB LOGO
				/* <a
				className="cursor-pointer md:h-12 md:w-12 h-10 w-10 block"
				href="https://github.com/VyperX2"
				target="_blank"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
					<g fill="currentColor">
						<path
							fillRule="evenodd"
							d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
							clipRule="evenodd"
						></path>
						<path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"></path>
					</g>
				</svg>
			</a> */
			}
			<div className="flex items-center gap-2 noselect anim1">
				<div id="logo">
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
			<div className="md:flex space-x-8 cursor-pointer hidden anim1">
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
									className="hover:opacity-60 hover:scale-110 text-lg font-semibold text-primary transition-all ease-in"
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
