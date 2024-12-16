import styled from 'styled-components';
import BadgeList from '@/components/BadgeList';
import WhiteTitle from '@/components/WhiteTitle';

export default function BadgeListBox() {
	const BackGroundStyle = styled.div`
		width: 100%;
		max-width: 400px;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
		.div {
		}
	`;

	return (
		<BackGroundStyle>
			<WhiteTitle text={'뱃지 현황'}></WhiteTitle>
			<BadgeList></BadgeList>
		</BackGroundStyle>
	);
}
