/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				customYellow: "#EFBC9B", // Your primary color
				customCream: "#FBF3D5", // Light cream color
				customGray: "#D6DAC8", // Soft gray color
				customBlueGray: "#9CAFAA", // Blue-gray accent color
				darkBrown: "#3E2F2F", // Dark brown for text
				charcoalGray: "#333333", // Charcoal gray for text
			},
		},
	},
	plugins: [],
};
