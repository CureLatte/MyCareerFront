'use client';
import styled from 'styled-components';
import { ResumeInfoType } from '@/type/ResumeType';
import {
	DARK_BLUE_2,
	DARK_BLUE_4,
	DARK_GRAY_1,
	DARK_GRAY_2,
	DARK_GRAY_3,
	WHITE_0,
} from '@/const/Color';
import LTextWhite from '@/components/text/LTextWhite';
import STextWhite from '@/components/text/STextWhite';
import BranchName from '@/components/resume/BranchName';
import { useState } from 'react';
import Link from 'next/link';
const BackGroundStyle = styled.div<{ selected: boolean | undefined }>`
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
	border: ${(props: any) =>
		props.selected
			? `5px solid ${DARK_BLUE_2}`
			: `5px solid ${DARK_GRAY_2}`};
`;
export default function ResumeCard({
	resumeInfo,
	selected,
	onClick,
}: {
	resumeInfo: ResumeInfoType;
	selected?: boolean;
	onClick?: () => void;
}) {
	const [hover, setHover] = useState<boolean>(false);

	return (
		<BackGroundStyle
			selected={selected}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={onClick}
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
				<Link
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
					href={`/resume/edit/${resumeInfo.resumeId}`}
				>
					수정하기
				</Link>
			)}
		</BackGroundStyle>
	);
}
