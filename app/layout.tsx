import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/extras.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
			<body className="font-heading bg-gradient overflow-hidden relative pb-14">
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
