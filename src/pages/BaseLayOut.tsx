'use client';

import Nav from '@/components/Nav';
import MainPage from '@/components/MainPage';

export default function BaseLayOut({ children }: any) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				height: '100vh',
				width: '100vw',
				backgroundColor: 'black',
			}}
		>
			<Nav />
			<MainPage>{children}</MainPage>
		</div>
	);
}
