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

	const defaultNavList = [
		{
			title: '대시 보드',
			url: '/dashboard',
			alarmYn: false,
		},
		{
			title: '지원 현황',
			url: '/apply',
			alarmYn: false,
		},
		{
			title: '이력서 관리',
			url: '/resume',
			alarmYn: true,
		},
	];

	const [navList, setNavList] =
		useState<{ title: string; url: string; alarmYn: boolean }[]>(
			defaultNavList,
		);

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
				(
					item: { title: string; url: string; alarmYn: boolean },
					index: number,
				) => {
					return (
						<NavText
							key={index}
							onClick={() => {
								setActivateTab(Number(index));
								navList[index].alarmYn = false;
								setNavList([...navList]);
							}}
							text={item.title}
							url={item.url}
							alarmYn={item.alarmYn}
							activate={Number(index) === Number(activateTab)}
						></NavText>
					);
				},
			)}
		</nav>
	);
}
