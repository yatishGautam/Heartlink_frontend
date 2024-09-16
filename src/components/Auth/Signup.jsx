import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import SubmitButton from "../Common/SubmitButton";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
	});

	const handleChangeInValue = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form data", formData);
	};

	return (
		<div className="min-h-screen w-screen  grid  place-items-center">
			<div className="bg-white p-8 rounded-lg shadow-lg  w-full  max-w-lg">
				<h1 className="text-2xl font-bold mb-6 text-center ">Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<FormInput
						type="text"
						label="Username"
						placeholder="Enter your username"
						onChange={handleChangeInValue}
					/>
					<br />
					<FormInput
						type="text"
						label="Name"
						placeholder="Enter your name"
						onChange={handleChangeInValue}
					/>
					<br />
					<FormInput
						type="password"
						label="Password"
						placeholder="Enter your password"
						onChange={handleChangeInValue}
					/>
					<br />
					<SubmitButton type="subit" text="Sign up">
						Sign Up
					</SubmitButton>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
