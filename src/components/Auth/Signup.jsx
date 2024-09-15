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
		e.preventDefaullt();
		console.log("form data", formData);
	};

	return (
		<div className="min-h-screen  flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg">
				<h1>
					<form onSubmit={handleSubmit}>
						<FormInput
							type="text"
							placeholder="Enter your username"
							onChange={handleChangeInValue}
						/>
						<br />
						<FormInput
							type="text"
							placeholder="Enter your name"
							onChange={handleChangeInValue}
						/>
						<br />
						<FormInput
							type="password"
							placeholder="Enter your password"
							onChange={handleChangeInValue}
						/>
						<br />
						<SubmitButton type="subit" text="Sign up">
							Sign Up
						</SubmitButton>
					</form>
				</h1>
			</div>
		</div>
	);
};

export default SignupForm;
