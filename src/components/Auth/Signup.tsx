import React, { useState } from "react";
import FormInput from "../Common/FormInput";
import SubmitButton from "../Common/SubmitButton";
import { signup } from "../../services/userService";
import { useNavigate } from "react-router-dom";

type SignupFormData = {
	email: string;
	password: string;
	name: string;
};

type ErrorType = {
	email?: string;
	password?: string;
	name?: string;
};

const SignupForm: React.FC = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<SignupFormData>({
		email: "",
		password: "",
		name: "",
	});
	const [success, setSuccess] = useState<boolean | null>(null);
	const [error, setError] = useState<ErrorType>({});

	const handleChangeInValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error for the field as soon as the user starts typing
		setError((prev) => ({
			...prev,
			[name]: undefined,
		}));
	};

	const onClickToLogin = () => {
		navigate("/login");
	};

	// Validate form inputs and set corresponding error messages
	const inputValidation = (): boolean => {
		const newErrors: ErrorType = {};

		if (!formData.name) newErrors.name = "User needs to have a name";
		if (!formData.email) newErrors.email = "User needs to have an email";
		if (!formData.password)
			newErrors.password = "User needs to have a password";

		setError(newErrors);

		return Object.keys(newErrors).length === 0; // Return true if no errors
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const submitForm = async () => {
			if (inputValidation()) {
				console.log("form data", formData);
				try {
					const data = await signup(formData);
					if (data) {
						navigate("/login");
					}
				} catch (error) {
					console.log("signup error ", error);
				}
			}
		};

		submitForm();
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
						value={formData.email}
						placeholder="Enter your email"
						onChange={handleChangeInValue}
						error={error.email}
					/>
					<br />
					<FormInput
						type="text"
						label="Name"
						name="name"
						value={formData.name}
						placeholder="Enter your name"
						onChange={handleChangeInValue}
						error={error.name}
					/>
					<br />
					<FormInput
						type="password"
						label="Password"
						name="password"
						value={formData.password}
						placeholder="Enter your password"
						onChange={handleChangeInValue}
						error={error.password}
					/>
					<br />
					<SubmitButton type="submit" text="Sign up"></SubmitButton>
					<p className="text-sm text-gray-500">
						In case you already have an account,{" "}
						<button
							onClick={onClickToLogin}
							className="text-blue-500 underline hover:text-blue-700 focus:outline-none"
						>
							click here
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
