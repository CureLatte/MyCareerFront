import { BACKGROUND_GRAY, LIGHT_GRAY_2 } from '@/const/Color';
import { ReactNode } from 'react';

export default function BadgeBox({
	title,
	cnt,
}: {
	title: string;
	cnt: number;
}) {
	return (
		<div
			style={{
				backgroundColor: LIGHT_GRAY_2,
				width: '100px',
				height: '100px',
				borderRadius: '20px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '5px',
			}}
		>
			{title}
			<hr
				style={{
					width: '80%',
					height: '3px',
					backgroundColor: BACKGROUND_GRAY,
					border: '0',
				}}
			/>
			{cnt ?? 0}
		</div>
	);
}
