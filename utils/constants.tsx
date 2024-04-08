const navItems = [
	{ title: "Home", href: "#home" },
	{ title: "Projects", href: "#projects" },
	{ title: "About", href: "#about" },
	{ title: "Contact", href: "#contact" },
];

const techArray = [
	{
		title: "HTML5",
		src: "DeviconHtml5.svg",
	},
	{
		title: "CSS3",
		src: "DeviconCss3.svg",
	},
	{
		title: "Javascript",
		src: "DeviconJavascript.svg",
	},
	{
		title: "Tailwind",
		src: "DeviconTailwindcss.svg",
	},
	{
		title: "React",
		src: "DeviconReact.svg",
	},
	{
		title: "Nextjs",
		src: "DeviconNextjs.svg",
	},
	{
		title: "Typescript",
		src: "DeviconTypescript.svg",
	},
];

const techTools = [
	{
		title: "Git",
		src: "DeviconGit.svg",
	},
	{
		title: "VS Code",
		src: "DeviconVscode.svg",
	},
	{
		title: "Firebase",
		src: "DeviconFirebase.svg",
	},
	{
		title: "MongoDB",
		src: "DeviconMongodb.svg",
	},
	{
		title: "Github",
		src: "DeviconGithub.svg",
	},
];

const projectsData = [
	{
		title: "Vortex",
		desc: "Vortex is a fullstack social media website that allows you to upload images for others to see. It also contains authentication and other features such as the ability to like and save posts, follow other users and search for them.",
		src: "vortex.png",
		technologies: ["NextJs", "Typescript", "MongoDB"],
		site: "https://vortex-neon.vercel.app",
		github: "https://github.com/VyperX2/vortex",
	},
	{
		title: "Cinemania",
		desc: "Cinemania, created using the TMDB API, is your gateway to the cinematic universe. Discover the latest releases, effortlessly search for your favorites, and delve into comprehensive actor profiles. Immerse yourself in the world of movies with this dynamic and information-rich platform",
		src: "cinemania.png",
		technologies: ["NextJs", "Typescript", "TailwindCSS"],
		site: "https://cinemania-eight.vercel.app/",
		github: "https://github.com/VyperX2/Cinemania",
	},
	{
		title: "Youtube Clone",
		desc: "A Youtube Clone, created using RapidApi that allows you to find the latest videos, discover categories, discover new channels, watch videos and browse comments.",
		src: "yt-clone.png",
		technologies: ["React", "Javascript", "TailwindCSS"],
		site: "https://mateen-tube.netlify.app/",
		github: "https://github.com/VyperX2/yt-clone-react",
	},
];

export { navItems, techArray, techTools, projectsData };
