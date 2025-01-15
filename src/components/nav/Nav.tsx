import {
	BACKGROUND_GRAY,
	DARK_BLUE_3,
	DARK_BLUE_4,
	LIGHT_GRAY,
} from '@/const/Color';
import NavText from '@/components/nav/NavText';
import { useCallback, useContext, useState } from 'react';
import { NavListType, NavType } from '@/type/NavListType';
import {
	ActivateContext,
	ActivateDispatch,
	NavBarContext,
	NavBarDispatch,
} from '@/context/NavBarContext';

export default function Nav({}: any) {
	// const [activateTab, setActivateTab] = useState(0);

	const activateTab = useContext(ActivateContext);

	const setActivateTab = useContext(ActivateDispatch);

	const navList = useContext(NavBarContext);

	const setNavList = useContext(NavBarDispatch);

	return (
		<nav
			style={{
				backgroundColor: DARK_BLUE_4,
				margin: '20px',
				width: '170px',
				height: 'calc(100vh - 40px)',
				borderRadius: '20px',
				padding: '20px 0 20px 0',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				boxSizing: 'border-box',
			}}
		>
			<div
				style={{
					width: '100px',
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
			{navList.map((item: NavType, index: number) => {
				return (
					<NavText
						key={index}
						onClick={() => {
							setActivateTab(item.id);
							navList[index].alarmYn = false;
							setNavList([...navList]);
						}}
						text={item.title}
						url={item.url}
						alarmYn={item.alarmYn}
						subTabYn={item.subTab}
						activate={Number(item.id) === Number(activateTab)}
					></NavText>
				);
			})}
		</nav>
	);
}
