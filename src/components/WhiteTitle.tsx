import styled from 'styled-components';
import MTextBlack from '@/components/text/MTextBlack';

export default function WhiteTitle({ text }: { text: string }) {
	const textSize = text.length;
	const widthSize = textSize * 16;

	const BackGroundStyle = styled.div`
		min-width: 80px;
		max-width: ${widthSize}px;
		height: 30px;
		border-radius: 30px;
		background-color: #e4e4e4;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`;

	return (
		<BackGroundStyle>
			<MTextBlack text={text}></MTextBlack>
		</BackGroundStyle>
	);
}
