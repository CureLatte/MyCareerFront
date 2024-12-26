'use client';

import styled from 'styled-components';
import { DARK_BLUE_2, DARK_BLUE_4, WHITE_1 } from '@/const/Color';
import STextWhite from '@/components/text/STextWhite';
import { tag } from 'postcss-selector-parser';
import STextBlack from '@/components/text/STextBlack';

export default function ResumeFilterTag({
	tagName,
	selected,
	onClick,
}: {
	tagName: string;
	selected: boolean;
	onClick: () => void;
}) {
	const BackGroundStyle = styled.div`
		min-width: 40px;
		background-color: ${selected ? DARK_BLUE_2 : WHITE_1};
		height: 20px;
		border-radius: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 5px;
	`;

	let text = <STextBlack text={tagName}></STextBlack>;

	if (selected) {
		text = <STextWhite text={tagName}></STextWhite>;
	}

	return <BackGroundStyle onClick={onClick}>{text}</BackGroundStyle>;
}
