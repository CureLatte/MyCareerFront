'use client';

import {
	DARK_BLUE_3,
	DARK_BLUE_4,
	LIGHT_GRAY_1,
	LIGHT_GRAY_2,
} from '@/const/Color';
import styled from 'styled-components';

export default function RoundBoxTemplate({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const BackGroundStyle = styled.div`
		background-color: ${DARK_BLUE_4};
		border-radius: 20px;
		padding: 20px;
		margin: 30px;
	`;

	return <BackGroundStyle className={className}>{children}</BackGroundStyle>;
}
