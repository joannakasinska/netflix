import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const requestInterceptor = (request: AxiosRequestConfig): AxiosRequestConfig => {
  return request;
};

export const responseSuccessInterceptor = async (response: AxiosResponse) => {
  const res = await Promise.resolve(response.data);

  return res.data;
};

export const responseErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error.response);
};
