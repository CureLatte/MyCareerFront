'use client';
import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import { getApplyStatusAPI } from '@/api/ApplyApi';
import LTextWhite from '@/components/text/LTextWhite';
import styled from 'styled-components';

export default function ApplyStatus({}: {}) {
	const [loading, setLoading] = useState(true);

	const [applyStatusInfo, setApplyStatusInfo] = useState<any>({});

	const BackGroundStyle = styled.div`
		display: flex;
		flex-direction: row;
		width: 50%;
		justify-content: start;
	`;

	useEffect(() => {
		getApplyStatus().then(() => {
			setLoading(false);
		});
	}, []);

	const getApplyStatus = async () => {
		setLoading(true);

		let data = await getApplyStatusAPI();

		data = {
			ok: true,
			data: {
				startTime: '2024-01-01',
				endTime: '2024-0-01',
			},
		};

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
		return (
			<BackGroundStyle>
				<LTextWhite text={'로딩중입니다...'}></LTextWhite>;
			</BackGroundStyle>
		);
	}

	return (
		<BackGroundStyle style={{}}>
			<LTextWhite text={'취업 기간: '}></LTextWhite>

			{applyStatusInfo.startTime ? (
				<LTextWhite
					text={`${applyStatusInfo.startTime} ~ ${applyStatusInfo.endTime}`}
				></LTextWhite>
			) : (
				<LTextWhite text={applyStatusInfo.endTime}></LTextWhite>
			)}
		</BackGroundStyle>
	);
}
