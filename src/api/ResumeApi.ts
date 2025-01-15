import baseApi from '@/api/baseApi';
import {
	ResumeDetailInfoType,
	ResumeFilterType,
	ResumeInfoType,
} from '@/type/ResumeType';
import { ResponseType } from '@/type/ResponseType';
import { sleep } from '@/utils/commonUtils';

export const getResumeListAPI = async (
	resumeFilter: ResumeFilterType,
): Promise<ResponseType<ResumeInfoType[]>> => {
	// const response = await baseApi('/api/resume/list', {
	// 	method: 'POST',
	// 	data: resumeFilter,
	// });
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
	return {
		ok: true,
		data: {
			resumeId: 1,
			branch: 'hello',
			title: '첫번째 내용입니다.',
			content: `
그래서 

## 김재성

* 테스트	


~~~js
hello
~~~

~~~js
hello
~~~
~~~js
hello
~~~
~~~js
hello
~~~
~~~js
hello
~~~
~~~js
hello
~~~

~~~js
hello
~~~

~~~js
hello
~~~
~~~js
hello
~~~
~~~js
hello
~~~
~~~js
hello
~~~

~~~js
hello
~~~







~~~js
console.log('hello');
~~~




  
 
  
  
  





			`,
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
	};

	// const response = await baseApi(`/resume/${resumeId}/detail`, {
	// 	method: 'GET',
	// });

	// return response.data;
};
