'use client';
import styled from 'styled-components';
import { ResumeInfo } from '@/type/Resume';
import {
	DARK_BLUE_4,
	DARK_BLUE_5,
	DARK_GRAY_3,
	LIGHT_GRAY_1,
} from '@/const/Color';
import STextWhite from '@/components/text/STextWhite';
import BranchName from '@/components/resume/BranchName';
import MTextWhite from '@/components/text/MTextWhite';
import { useState } from 'react';

export default function ResumeRow({ resumeInfo }: { resumeInfo: ResumeInfo }) {
	const BackGroundStyle = styled.div`
		width: 100%;
		height: 40px;
		background-color: ${DARK_GRAY_3};
		border-radius: 20px;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
		float: left;
		&:hover {
			background-color: ${DARK_BLUE_5};
		}
	`;

	return (
		<BackGroundStyle>
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
