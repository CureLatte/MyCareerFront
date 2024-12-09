'use client';

import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import ApplyHistory from '@/components/ApplyHistory';
import styled from 'styled-components';

export default function ApplyHistoryList() {
	const [loading, setLoading] = useState<boolean>(true);

	const [historyList, setHistoryList] = useState<any[]>([]);

	useEffect(() => {
		getHistoryList().then(() => {
			setLoading(false);
		});
	}, []);

	const BackGround = styled.div`
		display: flex;
		flex-direction: column;
		gap: 10px;
	`;
	const getHistoryList = async () => {
		setLoading(true);
		setHistoryList([
			{
				applyDate: '2024-01-02',
				platform: '원티드',
				company: '테스트 회사',
				resumeName: '이력서_이름',
				status: '서류면접 진행 중',
			},
			{
				applyDate: '2024-01-02',
				platform: '원티드',
				company: '테스트 회사',
				resumeName: '이력서_이름',
				status: '서류면접 진행 중',
			},
			{
				applyDate: '2024-01-02',
				platform: '원티드',
				company: '테스트 회사',
				resumeName: '이력서_이름',
				status: '서류면접 진행 중',
			},
		]);
		await sleep(1000);
	};

	if (loading) {
		return <BackGround> 로딩중입니다. </BackGround>;
	}

	return (
		<BackGround style={{}}>
			{historyList.map((data: any, index: number) => {
				return (
					<ApplyHistory historyInfo={data} key={index}></ApplyHistory>
				);
			})}
		</BackGround>
	);
}
