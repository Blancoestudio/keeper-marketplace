import { AxiosError } from "axios";
import api from "./api";
import {
	DEFAULT_ERROR_RESPONSE,
	DEFAULT_SUCCESS_RESPONSE,
} from "src/utils/constants";
import { Product } from "src/interfaces/Product";

export class ProductService {
	private static readonly baseUrl = "/admin/products";
	private static readonly baseUrlCategories = "/admin/categories"


	static getProductsByStore = async () => {
		try {
			const response = await api.get(`${this.baseUrl}`);
			return {
				data: response.data,
				...DEFAULT_SUCCESS_RESPONSE,
			};
		} catch (error: unknown) {
			const axiosError = error as AxiosError;

			if (axiosError.response) {
				const err = axiosError.response.data;
				return {
					data: err,
					...DEFAULT_ERROR_RESPONSE,
				};
			} else {
				return {
					data: "Ocurred an error",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	};

	static createProduct = async (product: Product) => {
		try {
			const response = await api.post(`${this.baseUrl}`, product);
			return {
				data: response.data,
				...DEFAULT_SUCCESS_RESPONSE,
			};
		} catch (error: unknown) {
			const axiosError = error as AxiosError;

			if (axiosError.response) {
				const err = axiosError.response.data;
				return {
					data: err,
					...DEFAULT_ERROR_RESPONSE,
				};
			} else {
				return {
					data: "Ocurred an error",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	};

	static updateProduct = async (productId: string, product: Product) => {
		try {
			const response = await api.put(`${this.baseUrl}/${productId}`, product);
			return {
				data: response.data,
				...DEFAULT_SUCCESS_RESPONSE,
			};
		} catch (error: unknown) {
			const axiosError = error as AxiosError;

			if (axiosError.response) {
				const err = axiosError.response.data;
				return {
					data: err,
					...DEFAULT_ERROR_RESPONSE,
				};
			} else {
				return {
					data: "Ocurred an error",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	};

	static getProductById = async (idProduct: string) => {
		try {
			const response = await api.get(`${this.baseUrl}/${idProduct}`);
			return {
				data: response.data,
				...DEFAULT_SUCCESS_RESPONSE,
			};
		} catch (error: unknown) {
			const axiosError = error as AxiosError;

			if (axiosError.response) {
				const err = axiosError.response.data;
				return {
					data: err,
					...DEFAULT_ERROR_RESPONSE,
				};
			} else {
				return {
					data: "Ocurred an error",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	};

	static getCategories = async () => {
		try {
			const response = await api.get(this.baseUrlCategories);
			return {
				data: response.data,
				...DEFAULT_SUCCESS_RESPONSE,
			};
		} catch (error: unknown) {
			const axiosError = error as AxiosError;

			if (axiosError.response) {
				const err = axiosError.response.data;
				return {
					data: err,
					...DEFAULT_ERROR_RESPONSE,
				};
			} else {
				return {
					data: "Ocurred an error",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	};
}
