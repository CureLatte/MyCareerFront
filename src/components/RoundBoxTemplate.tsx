import { LIGHT_GRAY_1 } from '@/const/Color';

export default function RoundBoxTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				backgroundColor: LIGHT_GRAY_1,
				borderRadius: '30px',
				padding: '20px',
				margin: '30px',
			}}
		>
			{children}
		</div>
	);
}
