import { AxiosError } from "axios";
import api from "./api";
import { User } from "src/interfaces/User";
import {
	DEFAULT_SUCCESS_RESPONSE,
	DEFAULT_ERROR_RESPONSE,
} from "src/utils/constants";

export class AuthService {
	static readonly baseUrl = "/admin/auth";
	// static async verify(email: string) {
	//   try {
	//     const response = await api.post('/auth/verify', { email });
	//     return response.data;
	//   } catch (error: unknown) {
	//     const axiosError = error as AxiosError;

	//     if (axiosError.response) {
	//       return axiosError.response.data;
	//     } else {
	//       return {
	//         error: true,
	//       };
	//     }
	//   }
	// }

	static async login(email: string, password: string) {
		try {
			const response = await api.post(`${this.baseUrl}/login`, {
				email,
				password,
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
					data: "Ocurred an error to login",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	}

	static async register(user: User) {
		try {
			const response = await api.post(`${this.baseUrl}/register`, user);
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
					data: "Ocurred an error to register",
					...DEFAULT_ERROR_RESPONSE,
				};
			}
		}
	}
}
