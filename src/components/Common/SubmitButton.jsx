import React from "react";

const SubmitButton = ({
	text,
	onClick,
	type = "button",
	color = "bg-customYellow",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${color} text-charcoalGray rounded-lg font-bold shadow-md hover:bg-opacity-90`}
		>
			{text}
		</button>
	);
};

export default SubmitButton;
