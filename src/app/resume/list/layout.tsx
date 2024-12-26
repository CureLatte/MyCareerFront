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
		setActivateTab(3);
	}, []);

	return (
		<div
			style={{
				margin: '20px 20px 20px 0',
			}}
		>
			{children}
		</div>
	);
}
