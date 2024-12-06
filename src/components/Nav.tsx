import { LIGHT_GRAY } from '@/const/Color';
import NavText from '@/components/NavText';
import { useState } from 'react';

export default function Nav({}: any) {
	const [activateTab, setActivateTab] = useState(0);

	const navList = ['대시 보드', '지원 현황', '이력서 관리', '지원 현황'];

	return (
		<nav
			style={{ background: LIGHT_GRAY, height: '100vh', width: '200px' }}
		>
			{navList.map((item: string, index: number) => {
				console.log(item, index);

				return (
					<NavText
						onClick={() => setActivateTab(Number(index))}
						text={item}
						activate={Number(index) === Number(activateTab)}
					></NavText>
				);
			})}
		</nav>
	);
}
