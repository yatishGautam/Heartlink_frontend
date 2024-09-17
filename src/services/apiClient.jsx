import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
console.log("api url is ", apiUrl);
//creating an axios instance
const apiClient = axios.create({
	baseURL: apiUrl,
	timeout: 1000,
	header: {
		"Content-Type": "application/json",
	},
});

export default apiClient;
