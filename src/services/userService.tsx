import apiClient from "./apiClient";

export const signup = async (userData) => {
	try {
		const response = await apiClient.post("/auth/signup", userData);
		return response.data;
	} catch (error) {
		console.log("error in creating new user:::", error);
		throw error;
	}
};
