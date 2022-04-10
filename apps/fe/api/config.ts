import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import getConfig from 'next/config';
import { requestInterceptor, responseErrorInterceptor, responseSuccessInterceptor } from './interceptors';

const { publicRuntimeConfig } = getConfig();

export const API_URL = publicRuntimeConfig.BFF_HOST;

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

const prepareRequest = <T>(config: AxiosRequestConfig): Promise<T> => instance.request(config);

export default prepareRequest;
