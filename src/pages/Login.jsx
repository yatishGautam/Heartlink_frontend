import React from "react";
import SignupForm from "../components/Auth/Signup";
import GradientBackground from "../components/Common/Gradient";

const LoginPage = () => {
	const colors = [
		"#EFBC9B", // Custom yellow (primary)
		"#FBF3D5", // Custom cream
		"#D6DAC8", // Custom gray
	];

	return (
		<div className="grid grid-cols-2 h-screen">
			<div className="flex item-center">
				<GradientBackground colors={colors} />
			</div>
			<div className="flex col-span-1 ">
				<SignupForm></SignupForm>
			</div>
		</div>
	);
};

export default LoginPage;
