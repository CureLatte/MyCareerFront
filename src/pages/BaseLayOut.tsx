'use client';

import Nav from '@/components/Nav';
import MainPage from '@/components/MainPage';
import { DARK_BLUE_2 } from '@/const/Color';

export default function BaseLayOut({ children }: any) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100vw',
				backgroundColor: DARK_BLUE_2,
			}}
		>
			<Nav />
			<MainPage>{children}</MainPage>
		</div>
	);
}
