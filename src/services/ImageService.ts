import { AxiosError } from "axios";
import api from "./api";
import {
	DEFAULT_ERROR_RESPONSE,
	DEFAULT_SUCCESS_RESPONSE,
} from "src/utils/constants";

export class ImageService {
	private static readonly baseUrl = "/admin/store/image";
	static uploadImage = async (data: FormData) => {
		try {
			const response = await api.post(`${this.baseUrl}`, data);
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
