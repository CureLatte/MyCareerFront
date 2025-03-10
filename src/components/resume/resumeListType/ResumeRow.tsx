'use client';
import styled from 'styled-components';
import { ResumeInfoType } from '@/type/ResumeType';
import {
	DARK_BLUE_2,
	DARK_BLUE_3,
	DARK_BLUE_4,
	DARK_BLUE_5,
	DARK_GRAY_2,
	DARK_GRAY_3,
	LIGHT_GRAY_1,
	WHITE_1,
} from '@/const/Color';
import STextWhite from '@/components/text/STextWhite';
import BranchName from '@/components/resume/BranchName';
import MTextWhite from '@/components/text/MTextWhite';
import { useState } from 'react';

export default function ResumeRow({
	resumeInfo,
	selected,
	onClick,
}: {
	resumeInfo: ResumeInfoType;
	selected?: boolean;
	onClick?: () => void;
}) {
	const BackGroundStyle = styled.div`
		width: 100%;
		height: 40px;
		background-color: ${DARK_GRAY_3};
		border-radius: 20px;
		position: relative;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
		float: left;
		margin: 5px 0 5px 0;

		background-color: ${selected ? `${DARK_BLUE_4}` : `${DARK_GRAY_3}`};

		border: ${selected
			? `5px solid ${DARK_BLUE_2}`
			: `5px solid ${DARK_GRAY_3}`};

		&:hover {
			border: 5px solid ${DARK_BLUE_2};
		}
	`;

	return (
		<BackGroundStyle onClick={onClick}>
			<div
				style={{
					width: '50%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'start',
					gap: '10px',
				}}
			>
				<STextWhite text={resumeInfo.createdAt}></STextWhite>
				<BranchName
					branchName={resumeInfo.branch}
					style={{}}
				></BranchName>
				<MTextWhite text={resumeInfo.title}></MTextWhite>
			</div>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '10px',
				}}
			>
				<div
					style={{
						right: '0px',
						bottom: '10px',
						backgroundColor: DARK_BLUE_4,
						color: 'white',
						width: '80px',
						height: '30px',
						borderRadius: '20px',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '12px',
					}}
				>
					수정하기
				</div>
				<div
					style={{
						width: '20px',
						height: '20px',
						borderRadius: '10px',
						backgroundColor: LIGHT_GRAY_1,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					x
				</div>
			</div>
		</BackGroundStyle>
	);
}
