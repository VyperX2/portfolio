"use client";
import { navItems } from "@/utils/constants";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import gsap from "gsap";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			gsap.from("#navbar", { opacity: 0 });
		}
	}, []);

	return (
		<div onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48px"
				height="48px"
				viewBox="0 0 24 24"
			>
				<path
					fill="none"
					stroke="var(--primary)"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
				></path>
			</svg>

			<div
				id="navbar"
				className={` ${
					isOpen ? "translate-x-full" : ""
				}  fixed flex flex-col items-center bg-accent z-10  top-0 bottom-0 left-0 right-0 `}
			>
				<div className="flex flex-col justify-center flex-1 items-center cursor-pointer space-y-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="48px"
						height="48px"
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
						></path>
					</svg>
					{navItems.map((item) => (
						<a
							key={item.href}
							className="hover:opacity-60 hover:scale-110 text-xl transition-all ease-in"
							href={item.href}
						>
							{" "}
							{item.title}{" "}
						</a>
					))}
					<div onClick={(e) => {
            setIsOpen(false)
            e.stopPropagation()
          }}>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
