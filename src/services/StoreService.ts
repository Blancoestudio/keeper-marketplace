import { AxiosError } from "axios";
import api from "./api";
import {
	DEFAULT_SUCCESS_RESPONSE,
	DEFAULT_ERROR_RESPONSE,
} from "src/utils/constants";

export class StoreService {
	static readonly baseUrl = "/admin/store";

	static async getStore() {
		try {
			const response = await api.get(this.baseUrl, {
				headers: {
					Authorization: `Bearer ${
						JSON.parse(localStorage.getItem("user")!).token
					}`,
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
	}
}