'use client';
import styled from 'styled-components';

export default function HistoryRow({
	children,
}: {
	children: React.ReactNode;
}) {
	const BackGroundStyle = styled.div``;

	return <BackGroundStyle>{children}</BackGroundStyle>;
}
