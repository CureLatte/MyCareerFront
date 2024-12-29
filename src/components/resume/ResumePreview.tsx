'use client';
import styled from 'styled-components';
import MTextWhite from '@/components/text/MTextWhite';
import React, { useEffect, useState } from 'react';
import { DARK_BLUE_2, DARK_BLUE_5 } from '@/const/Color';
import ResumeMarkdown from '@/components/resume/ResumeMarkdown';
import { ResumeDetailInfoType } from '@/type/Resume';

export default function ResumePreview({
	resumeId,
}: {
	resumeId: number | null;
}) {
	const [resumeDetailInfo, setResumeDetailInfo] =
		useState<ResumeDetailInfoType | null>(null);

	const BackGroundStyle = styled.div`
		// background-color: ${DARK_BLUE_5};

		max-width: 100%;
	`;

	useEffect(() => {
		getData().then(() => {
			console.log('done');
		});
	}, [resumeId]);

	const getData = async () => {
		// get contents

		const content = `
# 대제목

## 소제목

### 소제목 2


*** 

- [ ] 리스트 11
	- [ ] 리스트 11
	
> line



~~~js
console.log('It works!')

~~~



~~~ 
hello
~~~



~~~ 
hello
~~~


~~~ 
hello
~~~


~~~ 
hello
~~~


~~~
hello
~~~


~~~ 
hello
~~~


adfafadsfadsfadsfadfadsfadsfadsfadsfadsfadsfasdf  
  adfadfadsfadfa
그래서~~


~~~mysql
hello
select * from database;
~~~


- heloow
* hellow 22
`;

		if (resumeId === 1) {
			setResumeDetailInfo({
				resume_id: 1,
				branch: 'string',
				title: 'string',
				content: content,
				createdAt: 'string',
				updatedAt: 'string',
			});
		} else if (resumeId === 2) {
			setResumeDetailInfo({
				resume_id: 1,
				branch: 'string',
				title: 'string',
				content: `
그래서


## hello

~~~js
const test = updasted;
console.log('itWorkds');
~~~

`,
				createdAt: 'string',
				updatedAt: 'string',
			});
		} else if (resumeId === 3) {
			setResumeDetailInfo({
				resume_id: 1,
				branch: 'string',
				title: 'string',
				content: `
# 대제목 

## 소제목

### 소제목 2


***


- [ ] 리스트 11
	- [ ] 리스트 11
	
> line

그래서~~
~~~
hello
~~~
~~~ 
hello
~~~
~~~
hello
~~~
~~~ 
hello
~~~
~~~mysql
hello
select * from database;
~~~

- heloow
	* hellow 22

`,
				createdAt: 'string',
				updatedAt: 'string',
			});
		}
	};

	return (
		<BackGroundStyle>
			<div
				style={{
					backgroundColor: DARK_BLUE_2,
					width: '80px',
					height: '30px',
					borderRadius: '15px',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<MTextWhite text={'미리보기'}></MTextWhite>
			</div>
			<ResumeMarkdown
				content={
					resumeDetailInfo
						? resumeDetailInfo.content
						: '이력서를 선택해주세요'
				}
			></ResumeMarkdown>
		</BackGroundStyle>
	);
}
