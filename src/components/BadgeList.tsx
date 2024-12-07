'use client';
import BadgeBox from '@/components/BadgeBox';
import React, { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';

export default function BadgeList() {
	const [badgeList, setBadgeList] = React.useState<
		{
			title: string;
			cnt: number;
		}[]
	>([]);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getBadgeList().then(() => {
			setLoading(false);
		});
	}, []);

	const getBadgeList = async () => {
		setLoading(true);

		const tempList: { title: string; cnt: number }[] = [
			{
				title: '피드백 횟수',
				cnt: 1,
			},
			{
				title: '업데이트 횟수',
				cnt: 2,
			},
		];
		await sleep(4000);
		setBadgeList([...tempList]);
	};

	if (loading) {
		return <div> 로딩중 입니다...</div>;
	}

	return (
		<div
			className={'badgeList'}
			style={{
				width: '80%',
				height: '120px',
				display: 'flex',
				flexDirection: 'row',
				gap: '10px',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{badgeList.length <= 0 ? (
				<div>받은 뱃지가 없습니다</div>
			) : (
				badgeList.map(
					(item: { title: string; cnt: number }, index: number) => {
						return (
							<BadgeBox
								key={index}
								title={item.title}
								cnt={item.cnt}
							/>
						);
					},
				)
			)}
		</div>
	);
}
