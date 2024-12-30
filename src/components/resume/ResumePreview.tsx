'use client';
import styled from 'styled-components';
import MTextWhite from '@/components/text/MTextWhite';
import React, { useEffect, useState } from 'react';
import { DARK_BLUE_2, DARK_BLUE_5 } from '@/const/Color';
import ResumeMarkdown from '@/components/resume/ResumeMarkdown';
import { ResumeDetailInfoType } from '@/type/Resume';
import { getResumeDetailAPI } from '@/api/ResumeApi';
import LTextWhite from '@/components/text/LTextWhite';

export default function ResumePreview({
	resumeId,
}: {
	resumeId: number | null;
}) {
	const [loading, setLoading] = useState(true);
	const [resumeDetailInfo, setResumeDetailInfo] =
		useState<ResumeDetailInfoType | null>(null);

	const BackGroundStyle = styled.div`
		// background-color: ${DARK_BLUE_5};

		max-width: 100%;
	`;

	useEffect(() => {
		getData(resumeId)
			.then(() => {
				console.log('done');
				setLoading(false);
			})
			.catch((e) => {
				console.log('ERROR!', e);
				setLoading(true);
			});
	}, [resumeId]);

	const getData = async (resumeId: number | null) => {
		if (!resumeId) {
			return;
		}

		// get contents

		const response = await getResumeDetailAPI(resumeId);

		console.log(response);
		if (!response.ok) {
			throw new Error('response Error');
		}

		setResumeDetailInfo(response.data);
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
			{loading ? (
				<div>
					<LTextWhite text={'로딩중입니다.'} />
				</div>
			) : (
				<ResumeMarkdown
					content={
						resumeDetailInfo
							? resumeDetailInfo.content
							: '이력서를 선택해주세요'
					}
				></ResumeMarkdown>
			)}
		</BackGroundStyle>
	);
}
