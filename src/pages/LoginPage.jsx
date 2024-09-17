import React from "react";
import GradientBackground from "../components/Common/Gradient";
import LoginForm from "../components/Auth/Login";

const LoginPage = () => {
	const colors = [
		"#EFBC9B", // Custom yellow (primary)
		"#FBF3D5", // Custom cream
		"#D6DAC8", // Custom gray
	];

	return (
		<div className="grid grid-cols-2 h-screen">
			<div className="hidden md:flex items-center">
				<GradientBackground colors={colors} />
			</div>
			<div className="flex col-span-2 md:col-span-1 justify-center items-center ">
				<LoginForm></LoginForm>
			</div>
		</div>
	);
};

export default LoginPage;
