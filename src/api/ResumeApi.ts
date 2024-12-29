import baseApi from '@/api/baseApi';
import { ResumeFilterType } from '@/type/Resume';

export const getResumeListAPI = async (resumeFilter: ResumeFilterType) => {
	const response = await baseApi('/resume/list', {
		method: 'POST',
		data: resumeFilter,
	});
	return response.data;
};
