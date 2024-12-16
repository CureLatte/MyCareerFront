import styled from 'styled-components';
import STextBlack from '@/components/text/STextBlack';
import MTextBlack from '@/components/text/MTextBlack';

export default function WhiteTitle({ text }: { text: string }) {
	const BackGroundStyle = styled.div`
		width: 80px;
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
