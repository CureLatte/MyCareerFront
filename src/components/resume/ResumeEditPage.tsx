'use client';

import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import { ResumeDetailInfoType } from '@/type/ResumeType';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import { DARK_BLUE_2, DARK_BLUE_4 } from '@/const/Color';
import { className } from 'postcss-selector-parser';
import { getResumeDetailAPI } from '@/api/ResumeApi';
import TitleInput from '@/components/input/TitleInput';

export default function ResumeEditPage({
	resumeId,
}: {
	resumeId: number | null;
}) {
	const [resumeDetailInfo, setResumeDetailInfo] =
		useState<ResumeDetailInfoType>({
			title: '',
			resumeId: 0,
			branch: 'new',
			content: '',
			createdAt: new Date().toISOString().split('T')[0],
			updatedAt: new Date().toISOString().split('T')[0],
		});

	const [popUp, setPopUp] = useState<boolean>(false);

	useEffect(() => {
		getResumeInfo().then(() => {});
	}, [popUp]);

	const getResumeInfo = async () => {
		if (!resumeId) {
			setPopUp(true);

			return;
		}
		const response = await getResumeDetailAPI(resumeId);
	};

	return (
		<RoundBoxTemplate>
			{popUp && (
				<div
					style={{
						width: '500px',
						height: '500px',
						background: DARK_BLUE_4,
						zIndex: 999,
						border: `2px solid ${DARK_BLUE_2}`,
						borderRadius: '20px',
						color: 'white',
						position: 'absolute',
						left: 'calc((100% - 500px)/2)',
						top: 'calc((100% - 500px)/2)',
						justifySelf: 'center',
						textAlign: 'center',
					}}
				>
					이력서를 선택해주세요...
				</div>
			)}
			<TitleInput
				value={resumeDetailInfo.title}
				onChange={(e) => {
					setResumeDetailInfo({
						...resumeDetailInfo,
						title: e.target.value,
					});
				}}
				placeHolder={'제목'}
			></TitleInput>
			<MDEditor
				key={'editor'}
				value={resumeDetailInfo.content}
				onChange={(value: string | undefined): void => {
					if (value === undefined) {
						return;
					}

					setResumeDetailInfo({
						...resumeDetailInfo,
						content: value,
					});
				}}
			/>
			;
		</RoundBoxTemplate>
	);
}
