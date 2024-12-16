import { DARK_BLUE_3, LIGHT_GRAY } from '@/const/Color';
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
				backgroundColor: DARK_BLUE_3,
				margin: '20px',
				width: '200px',
				borderRadius: '20px',
				padding: '20px 0 20px 0',
			}}
		>
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
