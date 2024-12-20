'use client';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { NavListType } from '@/type/navList';

const defaultNavList: NavListType = [
	{
		title: '대시 보드',
		url: '/dashboard',
		alarmYn: false,
		openYn: false,
		subTab: false,
	},
	{
		title: '지원 현황',
		url: '/apply',
		alarmYn: false,
		openYn: false,
		subTab: false,
	},
	{
		title: '이력서 관리',
		url: '/resume',
		alarmYn: true,
		openYn: false,
		subTab: false,
	},
	{
		title: '이력서 목록',
		url: '/resume/list',
		alarmYn: true,
		openYn: false,
		subTab: true,
	},
	{
		title: '이력서 편집',
		url: '/resume/create',
		alarmYn: true,
		openYn: false,
		subTab: true,
	},
	{
		title: '설정',
		url: '/setting',
		alarmYn: false,
		openYn: false,
		subTab: false,
	},
];

const NavBarContext = createContext<NavListType>(defaultNavList);

const NavBarDispatch = createContext<Dispatch<SetStateAction<NavListType>>>(
	() => {},
);

const ActivateContext = createContext(0);

const ActivateDispatch = createContext<Dispatch<SetStateAction<number>>>(
	() => {},
);

function NavBarProvider({ children }: { children: React.ReactNode }) {
	const [navList, setNavList] = useState<NavListType>(defaultNavList);
	const [activate, setActivate] = useState<number>(0);

	useEffect(() => {
		console.log('updated');
	}, [navList, activate]);

	return (
		<NavBarContext.Provider value={navList}>
			<NavBarDispatch.Provider value={setNavList}>
				<ActivateContext.Provider value={activate}>
					<ActivateDispatch.Provider value={setActivate}>
						{children}
					</ActivateDispatch.Provider>
				</ActivateContext.Provider>
			</NavBarDispatch.Provider>
		</NavBarContext.Provider>
	);
}

export {
	NavBarContext,
	NavBarDispatch,
	ActivateContext,
	ActivateDispatch,
	NavBarProvider,
};
