"use client";
import { useEffect } from "react";

const Blob = () => {
	useEffect(() => {
		const blob = document.getElementById("blob");

		document.onpointermove = (e) => {
			const { clientX, clientY } = e;
			blob?.animate(
				{
					top: `${clientY}px`,
					left: `${clientX}px`,
				},
				{ duration: 1500, fill: "forwards" }
			);
		};
	}, []);

	return <div id="blob" className="hidden lg:block" />;
};

export default Blob;
