import baseApi from '@/api/baseApi';

export const getApplyStatusAPI = async () => {
	const response = await baseApi.get('/apply/period');

	return response.data;
};
