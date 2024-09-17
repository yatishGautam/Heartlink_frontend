import React from "react";

const GradientBackground = ({ colors }) => {
	// Create a CSS gradient string from the array of colors
	const gradientStyle = {
		background: `linear-gradient(135deg, ${colors.join(", ")})`,
		height: "100vh", // Full height of the viewport
		width: "100%", // Full width of the viewport
	};

	return (
		<div
			style={gradientStyle}
			className="flex justify-center items-center"
		></div>
	);
};

export default GradientBackground;
