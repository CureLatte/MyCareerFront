import { BACKGROUND_GRAY, DARK_BLUE_2 } from '@/const/Color';

export default function MainPage({ children }: any) {
	return (
		<div
			style={{
				background: DARK_BLUE_2,
				width: '100%',
				minHeight: '100vh',
				overflow: 'auto',
			}}
		>
			{children}
		</div>
	);
}
