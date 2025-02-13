'use client';
import { useContext, useEffect } from 'react';
import { ActivateDispatch } from '@/context/NavBarContext';

export default function ListLayOut({
	children,
}: {
	children: React.ReactNode;
}) {
	const setActivateTab = useContext(ActivateDispatch);

	useEffect(() => {
		setActivateTab(4);
	}, []);

	return <div>{children}</div>;
}
