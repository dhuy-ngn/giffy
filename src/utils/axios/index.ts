/*
 * Filename: GiphyApiResponse.ts
 * Author: Huy Nguyen
 * Date: December 27, 2023
 * Description: Contains the implementation of an axios instance that is used throughout the app, which already had an API key added to it
 */

import axios from 'axios';

/**
 * Creates and configures a new Axios instance with default settings.
 *
 * @remarks
 * This instance is pre-configured with a base URL, timeout, and default headers.
 *
 * @returns {AxiosInstance} An Axios instance.
 */
const instance = axios.create({
  baseURL: import.meta.env.VITE_GIPHY_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptors for request
instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: import.meta.env.VITE_GIPHY_API_KEY
  };
  return config;
});

// Interceptors for response
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('Axios Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
