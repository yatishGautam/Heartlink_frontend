import React from "react";
import FormInput from "../Common/FormInput";
import SubmitButton from "../Common/SubmitButton";

const LoginForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="min-h-screen w-screen grid grid place-items-center">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
				<h1 className="text-2xl font-bold mb-6 text-center ">Login</h1>
				<form onSubmit={handleSubmit}>
					<FormInput
						type="text"
						label="Email"
						placeholder="Enter your e-mail"
					></FormInput>
					<br />
					<FormInput
						type="password"
						label="Password"
						placeholder="enter your password"
					></FormInput>
					<br />
					<SubmitButton type="subit" text="Login" />
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
