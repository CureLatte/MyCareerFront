import axios from 'axios';

const baseApi = axios.create({
	baseURL: '/',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

// 요청전 setting
baseApi.interceptors.request.use((config) => {
	return config;
});

// 요청후 setting
baseApi.interceptors.response.use((config) => {
	return config;
});

export default baseApi;
