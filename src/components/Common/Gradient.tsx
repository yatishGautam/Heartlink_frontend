import React from "react";

type GradientBackgroundTypes = {
	colors: string[];
};

const GradientBackground: React.FC<GradientBackgroundTypes> = ({ colors }) => {
	// Create a CSS gradient string from the array of colors
	const gradientStyle = {
		background: `linear-gradient(125deg, ${colors.join(", ")})`,
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
