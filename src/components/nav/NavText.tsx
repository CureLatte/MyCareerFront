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
import NavIcon from '@/components/nav/NavIcon';

export default function NavText({
	text,
	activate,
	alarmYn,
	subTabYn,
	openYn,
	onClick,
	url,
}: any) {
	const BackGroundStyle = styled(Link)`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 140px;
		padding: 10px;
		box-sizing: border-box;
		height: 60px;
		cursor: pointer;
		font-size: 16px;
		text-decoration: none;
		border-radius: 20px;
		color: ${LIGHT_GRAY_4};
		background-color: ${DARK_BLUE_4};
		gap: 10px;

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
		alarmYn = true;
	}

	if (subTabYn) {
		textStyle = {
			...textStyle,
			width: '120px',
			height: '40px',
			fontSize: '14px',
			textIndent: '20px',
		};
	}

	// openYn, alarmYn, activate

	let iconType = '';

	if (subTabYn) {
		iconType = 'none';
	} else if (activate && openYn) {
		iconType = 'none';
	} else if (activate && !openYn) {
		iconType = 'none';
	} else if (alarmYn) {
		iconType = 'alarm';
	}

	return (
		<BackGroundStyle href={url} onClick={onClick} style={textStyle}>
			{text}
			{!subTabYn && <NavIcon type={iconType}></NavIcon>}
		</BackGroundStyle>
	);
}
