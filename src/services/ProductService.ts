import { AxiosError } from "axios";
import api from "./api";
import {
	DEFAULT_ERROR_RESPONSE,
	DEFAULT_SUCCESS_RESPONSE,
} from "src/utils/constants";
import { Product } from "src/interfaces/Product";

export class ProductService {
	static readonly baseUrl = "/admin/products";
	static readonly user = JSON.parse(localStorage.getItem("user")!);

	static getProductsByStore = async () => {
		try {
			const response = await api.get(`${this.baseUrl}`, {
				headers: {
					Authorization: `Bearer ${this.user.token}`,
				},
			});
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
			const response = await api.post(`${this.baseUrl}`, product, {
				headers: {
					Authorization: `Bearer ${this.user.token}`,
				},
			});
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
