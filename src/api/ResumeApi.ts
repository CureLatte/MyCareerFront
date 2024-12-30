import baseApi from '@/api/baseApi';
import {
	ResumeDetailInfoType,
	ResumeFilterType,
	ResumeInfoType,
} from '@/type/Resume';
import { ResponseType } from '@/type/Response';
import { sleep } from '@/utils/commonUtils';

export const getResumeListAPI = async (
	resumeFilter: ResumeFilterType,
): Promise<ResponseType<ResumeInfoType[]>> => {
	const response = await baseApi('/resume/list', {
		method: 'POST',
		data: resumeFilter,
	});
	// return response.data;

	await sleep(1000);
	return {
		ok: true,
		data: [
			{
				resumeId: 1,
				branch: 'hello',
				title: '첫번째 내용입니다.',
				createdAt: '2024-01-01',
				updatedAt: '2024-01-01',
			},
		],
	};
};

export const getResumeDetailAPI = async (
	resumeId: number,
): Promise<ResponseType<ResumeDetailInfoType>> => {
	const response = await baseApi(`/resume/${resumeId}/detail`, {
		method: 'GET',
	});

	// return response.data;
	return {
		ok: true,
		data: {
			resumeId: 1,
			branch: 'hello',
			title: '첫번째 내용입니다.',
			content: '이력서 1',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
	};
};
