import styled from 'styled-components';

export default function WhiteTitle({ text }: { text: string }) {
	const BackGroundStyle = styled.div`
		width: 120px;
		height: 25px;
		border-radius: 15px;
		background-color: #e4e4e4;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`;

	return <BackGroundStyle>{text}</BackGroundStyle>;
}
