import axios, { InternalAxiosRequestConfig } from "axios";
import { StorageService } from "./StorageService";

const api = axios.create({
	baseURL: 'https://keeper-api-dev-hx79d.ondigitalocean.app/v1/market',
	// baseURL: "http://localhost:3300/v1/market",
});

const updateHeaders = (request: InternalAxiosRequestConfig) => {
	const user = StorageService.get("user");
	request.headers.Authorization = `Bearer ${user?.token}`;
	return request;
};

api.interceptors.request.use(
	(request) => {
		if (
			request.url?.includes("auth/login") ||
			request.url?.includes("auth/register")
		) {
			return request;
		}
		return updateHeaders(request);
	},
	(error) => {
		// Aquí puedes manejar cualquier error que ocurra durante la solicitud.
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		// Aquí puedes manejar cualquier error que ocurra en la respuesta.
		return Promise.reject(error);
	}
);

export default api;
