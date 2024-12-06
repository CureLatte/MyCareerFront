'use client';
import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';

export default function ApplyStatus({}: {}) {
	const [loading, setLoading] = useState(true);

	const [applyStatusInfo, setApplyStatusInfo] = useState<any>({});

	useEffect(() => {
		getApplyStatus().then(() => {
			setLoading(false);
		});
	}, []);

	const getApplyStatus = async () => {
		setLoading(true);

		setApplyStatusInfo({
			...applyStatusInfo,
			startTime: '2021-02-01',
			endTime: '2021-02-01',
			status: 'OFF',
		});

		await sleep(1000);
		return true;
	};

	if (loading) {
		return <div>로딩중입니다...</div>;
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-around',
			}}
		>
			<div>
				취업 기간: {applyStatusInfo.startTime} ~{' '}
				{applyStatusInfo.status === 'ON'
					? '진행 중'
					: applyStatusInfo.endTime}
			</div>

			<div>ON/OFF</div>
		</div>
	);
}
