"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef(null);

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${process.env.SERVICE_ID}`,
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
	};

	return (
		<form className=" mt-60" ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
};
