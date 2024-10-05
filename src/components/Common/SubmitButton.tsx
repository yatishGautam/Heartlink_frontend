import React from "react";

type SubmitButtonProps = {
	text: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => {};
	type?: "button" | "submit" | "reset";
	color?: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
	text,
	onClick,
	type = "button",
	color = "bg-customYellow",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${color} w-full p-2 text-charcoalGray rounded-lg font-bold shadow-md hover:bg-opacity-90`}
		>
			{text}
		</button>
	);
};

export default SubmitButton;
