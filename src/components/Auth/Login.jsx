import React, { useEffect, useState } from "react";
import FormInput from "../Common/FormInput";
import SubmitButton from "../Common/SubmitButton";
import { getAuthToken, login, setAuthToken } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const onChange = (e) => {
		const { value, name } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const data = await login(formData);
			console.log(data);
			setAuthToken(data.token);
			console.log("saved token is: ", getAuthToken());
		} catch (error) {
			console.log("error while logging in ", error);
		}
	};

	const onClickToSignup = () => {
		navigate("/signup");
	};

	return (
		<div className="min-h-screen w-screen grid  place-items-center">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
				<h1 className="text-2xl font-bold mb-6 text-center ">Login</h1>
				<form onSubmit={handleSubmit}>
					<FormInput
						type="text"
						name="email"
						label="Email"
						placeholder="Enter your e-mail"
						onChange={onChange}
					></FormInput>
					<br />
					<FormInput
						type="password"
						name="password"
						label="Password"
						placeholder="enter your password"
						onChange={onChange}
					></FormInput>
					<br />
					<SubmitButton type="submit" text="Login" />
					<br />
					<p className="text-sm text-gray-500">
						In case you don't have an account,{" "}
						<button
							onClick={onClickToSignup}
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

export default LoginForm;
