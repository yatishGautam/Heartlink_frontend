import apiClient from "./apiClient";

export const login = async (credential) => {
	try {
		const response = await apiClient.post("/auth/login", credential);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getAuthToken = () => {
	return localStorage.getItem("authToken");
};

export const setAuthToken = (token) => {
	localStorage.setItem("authToken", token);
};

export const refreshAuthToken = async () => {
	try {
		const response = await apiClient.post("/auth/refresh-token", refreshToken);
		const { token } = response.data;
		setAuthToken(token);
		return token;
	} catch (error) {
		throw error;
	}
};
