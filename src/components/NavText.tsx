'use client';
import {
	BACKGROUND_GRAY,
	DARK_BLUE_3,
	DARK_BLUE_4,
	LIGHT_GRAY_4,
} from '@/const/Color';
import Link from 'next/link';
import styled from 'styled-components';

export default function NavText({ text, activate, onClick, url }: any) {
	const BackGroundStyle = styled(Link)`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 150px;
		height: 60px;
		cursor: pointer;
		font-size: 20px;
		text-decoration: none;
		border-radius: 20px;
		color: ${LIGHT_GRAY_4};
		background-color: ${DARK_BLUE_4};
		&:hover {
			box-shadow: 0 0 0 5px ${DARK_BLUE_3};
		}
	`;

	let textStyle: any = {};
	if (activate) {
		// 선택시
		textStyle = {
			...textStyle,
			color: 'white',
			backgroundColor: DARK_BLUE_3,
		};
	}

	return (
		<BackGroundStyle href={url} onClick={onClick} style={textStyle}>
			{text}
		</BackGroundStyle>
	);
}
