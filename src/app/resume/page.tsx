'use client';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import LTextWhite from '@/components/text/LTextWhite';
import Link from 'next/link';
import styled from 'styled-components';
import { DARK_BLUE_2 } from '@/const/Color';
import { useContext } from 'react';
import {
	ActivateDispatch,
	NavBarContext,
	NavBarDispatch,
} from '@/context/NavBarContext';

export default function ResumePage() {
	const ButtonStyle = styled(Link)`
		background-color: ${DARK_BLUE_2};
		width: 100px;
		height: 100px;
	`;

	return (
		<RoundBoxTemplate>
			<ButtonStyle href={'/resume/list'}>
				<LTextWhite text={'리스트 보기'}></LTextWhite>
			</ButtonStyle>
			<ButtonStyle href={'/resume/create'}>
				<LTextWhite text={'이력서 작성하기'}></LTextWhite>
			</ButtonStyle>
		</RoundBoxTemplate>
	);
}
