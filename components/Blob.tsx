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

	return (
		<div className=" hidden lg:block">
			<div id="blob"></div>
			<div id="blur"></div>
		</div>
	);
};

export default Blob;
