import axios, { type AxiosInstance } from 'axios';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const $api: AxiosInstance = axios.create({
    //baseURL:  __API__,
    //baseURL:  'http://localhost:8000',
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    config.headers.authorization =
        localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    return config;
});
