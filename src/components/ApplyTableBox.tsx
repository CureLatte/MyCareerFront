import styled from 'styled-components';
import ApplyTable from '@/components/ApplyTable';
import WhiteTitle from '@/components/WhiteTitle';

export default function ApplyTableBox() {
	const BackGroundStyle = styled.div`
		width: 80%;
	`;

	return (
		<BackGroundStyle>
			<WhiteTitle text={'지원 현황'}></WhiteTitle>
			<ApplyTable></ApplyTable>
		</BackGroundStyle>
	);
}
