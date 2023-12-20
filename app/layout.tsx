import type { Metadata } from "next";
import "@/styles/globals.css";
import Blob from "@/components/Blob";
import Navbar from "@/components/Navbar";

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
			<body className="font-heading dark bg-background text-text py-6">
				<Blob />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
