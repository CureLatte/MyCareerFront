'use client';
import Badge from '@/components/Badge';
import React, { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import styled from 'styled-components';
import LTextWhite from '@/components/text/LTextWhite';

export default function BadgeList() {
	const [badgeList, setBadgeList] = useState<
		{
			title: string;
			cnt: number;
		}[]
	>([]);

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getBadgeList().then(() => {
			setLoading(false);
		});
	}, []);

	const BackGround = styled.div`
		width: 100%;
		height: 120px;
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
		justify-content: start;
	`;

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
		return (
			<BackGround style={{ justifyContent: 'start' }}>
				<LTextWhite text={'로딩중 입니다...'}></LTextWhite>
			</BackGround>
		);
	}

	return (
		<BackGround>
			{badgeList.length <= 0 ? (
				<div>받은 뱃지가 없습니다</div>
			) : (
				badgeList.map(
					(item: { title: string; cnt: number }, index: number) => {
						return (
							<Badge
								key={index}
								title={item.title}
								cnt={item.cnt}
							/>
						);
					},
				)
			)}
		</BackGround>
	);
}
