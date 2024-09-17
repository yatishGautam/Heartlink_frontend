import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import SubmitButton from "../Common/SubmitButton";
import { signup } from "../../services/userService";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
	});
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState({
		email: null,
		name: null,
		password: null,
	});

	const handleChangeInValue = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error for the field as soon as the user starts typing
		setError((prev) => ({
			...prev,
			[name]: null,
		}));
	};

	// Validate form inputs and set corresponding error messages
	const inputValidation = () => {
		const newErrors = {};

		if (!name) newErrors.name = "User needs to have a name";
		if (!email) newErrors.email = "User needs to have an email";
		if (!password) newErrors.password = "User needs to have a password";

		setError(newErrors);

		return Object.keys(newErrors).length === 0; // Return true if no errors
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (inputValidation) {
			console.log("form data", formData);
			try {
				const data = await signup(formData);
			} catch (error) {}
		}
	};

	return (
		<div className="min-h-screen w-screen  grid  place-items-center">
			<div className="bg-white p-8 rounded-lg shadow-lg  w-full  max-w-lg">
				<h1 className="text-2xl font-bold mb-6 text-center ">Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<FormInput
						type="text"
						label="Email"
						name="email"
						placeholder="Enter your email"
						onChange={handleChangeInValue}
						error={error.email}
					/>
					<br />
					<FormInput
						type="text"
						label="Name"
						name="name"
						placeholder="Enter your name"
						onChange={handleChangeInValue}
						error={error.name}
					/>
					<br />
					<FormInput
						type="password"
						label="Password"
						name="password"
						placeholder="Enter your password"
						onChange={handleChangeInValue}
						error={error.password}
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
