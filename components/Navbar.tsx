import Image from "next/image";
import { title } from "process";
const Navbar = () => {
	const navItems = [
		{ title: "Home", href: "#home" },
		{ title: "About", href: "#about" },
		{ title: "Projects", href: "#projects" },
		{ title: "Contact", href: "#contact" },
	];
	return (
		<nav className="container flex justify-between text-primary font-semibold items-center fixed left-0 right-0 top-0 pt-6 bg-transparent backdrop:blur-sm">
			<Image src="DeviconGithub.svg" alt="github-Icon" width={48} height={48} />
			<ul className="flex space-x-8 cursor-pointer">
				{navItems.map((item) => (
					<a
						className="hover:opacity-60 hover:scale-125  transition-all"
						href={item.href}
					>
						{" "}
						{item.title}{" "}
					</a>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
