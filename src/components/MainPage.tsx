import { BACKGROUND_GRAY, DARK_BLUE_2 } from '@/const/Color';

export default function MainPage({ children }: any) {
	return (
		<div
			style={{
				background: DARK_BLUE_2,
				width: 'calc(100vw - 240px)',
				minHeight: '100vh',
				overflow: 'auto',
			}}
		>
			{children}
		</div>
	);
}
