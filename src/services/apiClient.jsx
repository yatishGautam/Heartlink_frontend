import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
//creating an axios instance
const apiClient = axios.create({
	baseURL: apiUrl,
	timeout: 1000,
	header: {
		"Content-Type": "application/json",
	},
});

export default apiClient;
