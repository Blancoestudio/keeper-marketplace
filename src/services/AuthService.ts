import { AxiosError } from 'axios';
import api from './api';

export class AuthService {
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

  static async login(email: string, code: string) {
    try {
      const response = await api.post('/auth/login', { email, code });
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        return {
          error: true,
        };
      }
    }
  }
}
