'use client';
import { useContext, useEffect } from 'react';
import { ActivateDispatch } from '@/context/NavBarContext';

export default function ResumeCreateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const setActivateTab = useContext(ActivateDispatch);

	useEffect(() => {
		setActivateTab(5);
	}, []);

	return <div>{children}</div>;
}
