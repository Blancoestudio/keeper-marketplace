import { AxiosError, AxiosResponse } from 'axios';
import api from './api';
import { CommuneData } from 'src/interfaces/Plan';

export class PlanService {
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

  static async getPlans() {

    try {
      const response: AxiosResponse<CommuneData[]> = await api.get('/comuna-audience?search=');
      
      return { 
        status: true,
        data: response.data
      };
    } catch (error: unknown) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        // return axiosError.response.data;
        // return axiosError.response.status;
        return {
          status: false,
        }
      } else {
        return {
          error: true,
        };
      }
    }
  }
}
