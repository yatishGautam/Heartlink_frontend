import apiClient from "./apiClient";
import { getAuthToken, refreshAuthToken } from "./authService";

apiClient.interceptors.request.use(
	(config) => {
		if (config.useAuth) {
			const token = getAuthToken();
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);
