'use client';
import styled from 'styled-components';
import { ResumeInfoType } from '@/type/Resume';
import { DARK_BLUE_4, DARK_GRAY_1, DARK_GRAY_2 } from '@/const/Color';
import LTextWhite from '@/components/text/LTextWhite';
import STextWhite from '@/components/text/STextWhite';
import BranchName from '@/components/resume/BranchName';
import { useState } from 'react';

export default function ResumeCard({
	resumeInfo,
}: {
	resumeInfo: ResumeInfoType;
}) {
	const [hover, setHover] = useState<boolean>(false);

	const BackGroundStyle = styled.div`
		width: 150px;
		height: 150px;
		background-color: ${DARK_GRAY_2};
		border-radius: 20px;
		position: relative;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin: 10px;
		cursor: pointer;
	`;

	return (
		<BackGroundStyle
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<BranchName
				branchName={resumeInfo.branch}
				style={{
					position: 'absolute',
				}}
			/>
			<LTextWhite text={resumeInfo.title} />
			<STextWhite text={resumeInfo.updatedAt} />
			{hover && (
				<div
					style={{
						position: 'absolute',
						bottom: '10px',
						backgroundColor: DARK_BLUE_4,
						color: 'white',
						width: '130px',
						height: '30px',
						borderRadius: '20px',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					수정하기
				</div>
			)}
		</BackGroundStyle>
	);
}
