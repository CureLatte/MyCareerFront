'use client';
import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import { getApplyStatusAPI } from '@/api/ApplyApi';

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

		const data = await getApplyStatusAPI();

		if (!data.ok) {
			console.log(`ERROR: ${data.data}`);
		}

		setApplyStatusInfo({
			...applyStatusInfo,
			...data.data,
		});

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
				width: '100%',
				height: '50px',
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
