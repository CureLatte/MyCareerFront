import {
	BACKGROUND_GRAY,
	DARK_BLUE_3,
	DARK_BLUE_4,
	LIGHT_GRAY,
} from '@/const/Color';
import NavText from '@/components/NavText';
import { useState } from 'react';

export default function Nav({}: any) {
	const [activateTab, setActivateTab] = useState(0);

	const navList = [
		{
			title: '대시 보드',
			url: '/dashboard',
		},
		{
			title: '지원 현황',
			url: '/apply',
		},
		{
			title: '이력서 관리',
			url: '/resume',
		},
	];

	return (
		<nav
			style={{
				backgroundColor: DARK_BLUE_4,
				margin: '20px',
				width: '200px',
				borderRadius: '20px',
				padding: '20px 0 20px 0',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width: '150px',
					height: '60px',
					backgroundColor: 'white',
					borderRadius: '20px',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				LOGO
			</div>

			<div
				style={{
					backgroundColor: BACKGROUND_GRAY,
					width: '150px',
					height: '2px',
					marginTop: '19px',
					marginBottom: '19px',
				}}
			></div>
			{navList.map(
				(item: { title: string; url: string }, index: number) => {
					return (
						<NavText
							key={index}
							onClick={() => {
								setActivateTab(Number(index));
							}}
							text={item.title}
							url={item.url}
							activate={Number(index) === Number(activateTab)}
						></NavText>
					);
				},
			)}
		</nav>
	);
}
