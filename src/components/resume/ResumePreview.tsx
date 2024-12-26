'use client';
import styled from 'styled-components';
import MTextWhite from '@/components/text/MTextWhite';

export default function ResumePreview() {
	const BackGroundStyle = styled.div`
		background-color: red;
	`;

	return (
		<BackGroundStyle>
			<MTextWhite text={'미리보기'}></MTextWhite>
			<div>이력서 내용....</div>
		</BackGroundStyle>
	);
}
