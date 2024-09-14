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
		const { name, value } = e.target.value;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = () => {};

	return (
		<div>
			<h1>
				<form>
					<input type="text" placeholder="Enter your username" />
					<br />
					<input type="text" placeholder="Enter your name"></input>
					<br />
					<input type="password" placeholder="Enter your password" />
					<br />
					<button type="subit">Sign Up</button>
				</form>
			</h1>
		</div>
	);
};

export default SignupForm;
