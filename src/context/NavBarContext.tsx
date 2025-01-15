'use client';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { NavListType } from '@/type/NavListType';

const defaultNavList: NavListType = [
	{
		id: 1,
		title: '대시 보드',
		url: '/dashboard',
		alarmYn: false,
		openYn: false,
		subTab: false,
	},
	{
		id: 2,
		title: '지원 현황',
		url: '/apply',
		alarmYn: false,
		openYn: false,
		subTab: false,
	},
	{
		id: 3,
		title: '이력서 관리',
		url: '/resume',
		alarmYn: true,
		openYn: false,
		subTab: false,
	},
	{
		id: 4,
		title: '이력서 목록',
		url: '/resume/list',
		alarmYn: true,
		openYn: false,
		subTab: true,
	},
	{
		id: 5,
		title: '이력서 작성',
		url: '/resume/create',
		alarmYn: true,
		openYn: false,
		subTab: true,
	},
	{
		id: 6,
		title: '이력서 수정',
		url: '/resume/edit',
		alarmYn: true,
		openYn: false,
		subTab: true,
	},
	{
		id: 7,
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
