'use client';
import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import { getApplyStatusAPI } from '@/api/ApplyApi';
import LTextWhite from '@/components/text/LTextWhite';
import styled from 'styled-components';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import MTextWhite from '@/components/text/MTextWhite';
import { DARK_BLUE_2 } from '@/const/Color';

export default function ApplyStatus({}: {}) {
	const [loading, setLoading] = useState(true);

	const [applyStatusInfo, setApplyStatusInfo] = useState<any>({});

	const BackGroundStyle = styled.div`
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		justify-content: start;
		gap: 20px;
		white-space: nowrap;

		.box {
			margin: 0;
			justify-content: center;
			align-content: center;
		}

		.status {
			width: 80%;
			display: flex;
			flex-direction: row;
		}
	`;

	const ButtonStyle = styled.div`
		cursor: pointer;
		:hover {
			opacity: 1;
		}
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
				status: 'ON',
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

	const updateApplyStatus = async () => {
		let updatedStatus;

		if (applyStatusInfo.status === 'ON') {
			updatedStatus = 'OFF';
		} else {
			updatedStatus = 'ON';
		}

		setApplyStatusInfo({
			...applyStatusInfo,
			status: updatedStatus,
		});
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
			<RoundBoxTemplate className={'box status'}>
				<LTextWhite text={'취업 기간: '}></LTextWhite>

				{applyStatusInfo.startTime ? (
					<LTextWhite
						text={`${applyStatusInfo.startTime} ~ ${applyStatusInfo.endTime}`}
					></LTextWhite>
				) : (
					<LTextWhite text={applyStatusInfo.endTime}></LTextWhite>
				)}
			</RoundBoxTemplate>
			<ButtonStyle
				onClick={updateApplyStatus}
				style={{
					cursor: 'pointer',
				}}
			>
				<RoundBoxTemplate className={'box button'}>
					<MTextWhite
						text={`${applyStatusInfo.status === 'ON' ? 'OFF' : 'ON'}`}
					></MTextWhite>
				</RoundBoxTemplate>
			</ButtonStyle>
		</BackGroundStyle>
	);
}
