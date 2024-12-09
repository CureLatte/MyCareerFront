import ApplyStatus from '@/components/ApplyStatus';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import React from 'react';
import BadgeList from '@/components/BadgeList';
import ApplyTable from '@/components/ApplyTable';
import ApplyHistoryListBox from '@/components/ApplyHistoryListBox';

export default function ApplyDashboard() {
	return (
		<RoundBoxTemplate>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '50px',
					height: '300px',
				}}
			>
				<div
					style={{
						width: '40%',
						height: '100%',
						gap: '20px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'start',
						alignItems: 'start',
					}}
				>
					<ApplyStatus />

					<BadgeList />

					<ApplyTable />
				</div>

				<div style={{ width: '500px', height: '100%' }}>
					<ApplyHistoryListBox></ApplyHistoryListBox>
				</div>
			</div>
		</RoundBoxTemplate>
	);
}
