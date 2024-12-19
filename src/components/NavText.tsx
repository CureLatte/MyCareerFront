'use client';
import {
	BACKGROUND_GRAY,
	DARK_BLUE_3,
	DARK_BLUE_4,
	LIGHT_GRAY_4,
	WHITE_0,
} from '@/const/Color';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function NavText({
	text,
	activate,
	alarmYn,
	onClick,
	url,
}: any) {
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
		gap: 10px;

		&:hover {
			box-shadow: 0 0 0 5px ${DARK_BLUE_3};
		}
	`;

	const AlarmDot = styled.div`
		width: 10px;
		height: 10px;
		background-color: ${WHITE_0};
		border-radius: 50%;
	`;

	let textStyle: any = {};
	if (activate) {
		// 선택시
		textStyle = {
			...textStyle,
			color: 'white',
			backgroundColor: DARK_BLUE_3,
		};
		alarmYn = true;
	}

	return (
		<BackGroundStyle href={url} onClick={onClick} style={textStyle}>
			{text}
			{!activate && alarmYn && <AlarmDot></AlarmDot>}
		</BackGroundStyle>
	);
}
