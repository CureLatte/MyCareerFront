'use client';
import styled from 'styled-components';
import { DARK_BLUE_2 } from '@/const/Color';

const TitleInputStyle = styled.input`
	background-color: black;
	border-width: 0 0 1px;
	margin-bottom: 10px;
	width: 100%;
	height: 50px;
	font-size: 24px;
	font-weight: bold;
	outline: none;
	border-radius: 20px;
	text-indent: 10px;

	color: white;
`;

export default function TitleInput({
	value,
	onChange,
	placeHolder,
	style,
}: {
	value: string;
	onChange: (e: any) => void;
	placeHolder: string;
	style?: any;
}) {
	return (
		<TitleInputStyle
			type={'text'}
			onChange={onChange}
			placeholder={placeHolder}
			value={value}
			style={style}
		></TitleInputStyle>
	);
}
