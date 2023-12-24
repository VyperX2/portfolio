import type { Metadata } from "next";
import "@/styles/globals.css";
import Blob from "@/components/Blob";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
	title: "Mateen",
	description: "Mateen's Web developer portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="font-heading bg-background  ">
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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
