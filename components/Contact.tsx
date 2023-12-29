"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`service_sdraqp7`,
				"template_0e1pzik",
				(form as any).current,
				"Y2BiUWiXEE9GSnzDv"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setMessage("");
		setEmail("");
		setName("");
	};

	return (
		<section className="flex flex-col mt-60 gap-8 mb-5">
			<h1
				className="2xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-primary font-semibold w-fit inline-block mr-4"
				data-value="Contact Me"
			>
				Contact Me
			</h1>
			<form className="flex flex-col gap-6 " ref={form} onSubmit={sendEmail}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					name="user_name"
					placeholder="Name"
					className=" py-4 rounded-lg px-4 border border-primary  bg-primary/20 placeholder:text-white outline-none"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="user_email"
					placeholder="Email"
					className=" py-4 rounded-lg px-4 border border-primary  bg-primary/20 placeholder:text-white outline-none"
				/>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					placeholder="Your Message"
					className="py-4 rounded-lg px-4 border border-primary  bg-primary/20 h-80 placeholder:text-white outline-none"
				/>

				<input
					className="w-fit border border-primary px-4 py-2 bg-transparent  rounded-lg hover:rotate-[-18deg] transition-all"
					type="submit"
					value="Send"
				/>
			</form>
		</section>
	);
};