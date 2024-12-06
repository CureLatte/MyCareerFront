import { BACKGROUND_GRAY } from '@/const/Color';

export default function MainPage({ children }: any) {
	return (
		<div style={{ background: BACKGROUND_GRAY, width: '100%' }}>
			{children}
		</div>
	);
}
