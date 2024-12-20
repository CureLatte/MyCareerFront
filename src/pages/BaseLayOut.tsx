'use client';

import Nav from '@/components/nav/Nav';
import MainPage from '@/components/MainPage';
import { DARK_BLUE_2 } from '@/const/Color';
import { NavBarProvider } from '@/context/NavBarContext';

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
			<NavBarProvider>
				<Nav />
				<MainPage>{children}</MainPage>
			</NavBarProvider>
		</div>
	);
}
