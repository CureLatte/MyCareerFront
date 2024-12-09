import styled from 'styled-components';
import BadgeList from '@/components/BadgeList';
import WhiteTitle from '@/components/WhiteTitle';

export default function BadgeListBox() {
	const BackGroundStyle = styled.div`
		width: 80%;
	`;

	return (
		<BackGroundStyle>
			<WhiteTitle text={'뱃지 현황'}></WhiteTitle>
			<BadgeList></BadgeList>
		</BackGroundStyle>
	);
}
