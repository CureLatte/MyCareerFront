'use client';
import { useContext, useEffect } from 'react';
import { ActivateDispatch } from '@/context/NavBarContext';

export default function SettingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const setActivateTab = useContext(ActivateDispatch);

	useEffect(() => {
		setActivateTab(7);
	}, []);

	return <div>{children}</div>;
}
