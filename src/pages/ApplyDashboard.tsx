'use client';
import ApplyStatus from '@/components/ApplyStatus';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import React from 'react';
import BadgeList from '@/components/BadgeList';
import ApplyTable from '@/components/ApplyTable';
import ApplyHistoryListBox from '@/components/ApplyHistoryListBox';
import styled from 'styled-components';
import BadgeListBox from '@/components/BadgeListBox';
import ApplyTableBox from '@/components/ApplyTableBox';

export default function ApplyDashboard() {
	const BackGroundStyle = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 50px;
		height: 350px;

		.box {
			overflow: hidden;
			width: 40%;
			height: 100%;
		}

		@media (max-width: 1080px) {
			flex-direction: column;
			width: 100%;
			height: inherit;
			justify-self: center;

			.box {
				width: 100%;
			}
		}
	`;

	return (
		<RoundBoxTemplate>
			<BackGroundStyle>
				<div
					className={'box'}
					style={{
						height: '100%',
						gap: '20px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ApplyStatus />

					<BadgeListBox />

					<ApplyTableBox />
				</div>

				<div className={'box'}>
					<ApplyHistoryListBox></ApplyHistoryListBox>
				</div>
			</BackGroundStyle>
		</RoundBoxTemplate>
	);
}
