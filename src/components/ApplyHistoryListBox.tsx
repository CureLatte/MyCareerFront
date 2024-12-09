'use client';
import { LIGHT_GRAY_1, LIGHT_GRAY_3 } from '@/const/Color';
import ApplyHistoryList from '@/components/ApplyHistoryList';
import styled from 'styled-components';

export default function ApplyHistoryListBox() {
	const BackGroundStyle = styled.div`
		padding: 30px;
		background-color: ${LIGHT_GRAY_3};
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		height: 290px;
		overflow: hidden;

		.row {
			width: 80px;
			overflow: hidden;
			text-align: center;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.applyDate {
			width: 100px;
		}

		.company {
			width: 60px;
		}

		.platform {
			width: 60px;
		}

		.status {
			width: 100px;
		}

		.resume {
			width: 80px;
		}
	`;

	return (
		<BackGroundStyle>
			<div style={{ fontSize: '20px' }}>최근 지원 내역</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '10px',
					width: '100%',
					justifyContent: 'center',
				}}
			>
				<div className={'row applyDate'}>지원 날짜</div>
				<div className={'row platform'}>플랫폼</div>
				<div className={'row company'}>회사</div>
				<div className={'row resume'}>이력서</div>
				<div className={'row status'}>상태</div>
			</div>
			<ApplyHistoryList />
		</BackGroundStyle>
	);
}
