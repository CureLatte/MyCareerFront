'use client';
import './no.css';
import StyledComponentsRegistry from '../lib/registry';
import BaseLayOut from '@/pages/BaseLayOut';
import { useEffect } from 'react';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<BaseLayOut lang="ko">{children}</BaseLayOut>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
