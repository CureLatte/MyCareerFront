'use client';

import STextWhite from '@/components/text/STextWhite';
import styled from 'styled-components';
import { DARK_BLUE_4, WHITE_SKY_0 } from '@/const/Color';
import SText from '@/components/text/SText';

export default function BranchName({
	branchName,
	style,
}: {
	branchName: string;
	style?: any;
}) {
	const textWidth = branchName.length * 10;

	if (textWidth > 100) {
		branchName = branchName.substring(0, 10) + '...';
	}

	const BackGroundStyle = styled.div`
		left: 10px;
		top: 10px;
		min-width: 50px;
		max-width: 100px;
		width: ${textWidth}px;
		height: 20px;
		background-color: ${DARK_BLUE_4};
		border-radius: 30px;
		border: 2px solid white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-overflow: ellipsis;
		color: white;

		&:hover {
			background-color: white;
			color: black;
			border: 2px solid ${WHITE_SKY_0};
		}
	`;

	return (
		<BackGroundStyle style={style}>
			<SText text={branchName} style={{}} />
		</BackGroundStyle>
	);
}
