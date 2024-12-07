import ApplyStatus from '@/components/ApplyStatus';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import React from 'react';
import BadgeList from '@/components/BadgeList';

export default function ApplyDashboard() {
	return (
		<RoundBoxTemplate>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '20px',
					height: '400px',
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
						alignItems: 'center',
					}}
				>
					<ApplyStatus />

					<BadgeList />
				</div>

				<div style={{ width: '40%', height: '100%' }}>
					최근 지원 이력
				</div>
			</div>
		</RoundBoxTemplate>
	);
}
