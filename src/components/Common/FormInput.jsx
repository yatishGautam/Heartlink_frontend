import React from "react";

const FormInput = ({ label, type, value, onChange, placeHolder }) => {
	return (
		<div>
			<label className="block text-charcoalGray text-sm font-medium mb-1">
				{label}
			</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeHolder={placeHolder}
				className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none"
			></input>
		</div>
	);
};

export default FormInput;
