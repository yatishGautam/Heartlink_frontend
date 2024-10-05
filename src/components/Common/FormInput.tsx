import React from "react";

type FormInputProps = {
	label: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	name: string;
	error?: string;
};

const FormInput: React.FC<FormInputProps> = ({
	label,
	type,
	value,
	onChange,
	placeholder,
	name,
	error,
}) => {
	return (
		<div className="mb-4">
			{/* Label */}
			<label className="block text-gray-400 text-xs font-medium mb-2">
				{label}
			</label>

			{/* Input Field */}
			<input
				type={type}
				value={value}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				className={`w-full p-3 border rounded-md shadow-sm transition duration-150 ease-in-out
          ${
						error
							? "border-red-500 focus:border-red-500 focus:ring-red-500"
							: "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
					}
        `}
			/>

			{/* Error Message */}
			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	);
};

export default FormInput;
