'use client';

import { LIGHT_GRAY_1, LIGHT_GRAY_2 } from '@/const/Color';
import styled from 'styled-components';

export default function RoundBoxTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	const BackGroundStyle = styled.div`
		background-color: ${LIGHT_GRAY_1};
		border-radius: 30px;
		padding: 20px;
		margin: 30px;
	`;

	return <BackGroundStyle>{children}</BackGroundStyle>;
}
