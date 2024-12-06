import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import ApplyStatus from '@/components/ApplyStatus';
import React from 'react';
import { LIGHT_GRAY_1 } from '@/const/Color';

export default function DashBoardPage() {
	return (
		<div>
			<RoundBoxTemplate>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '20px',
						height: '500px',
					}}
				>
					<div
						style={{
							width: '40%',
							height: '100%',
						}}
					>
						<ApplyStatus />
					</div>

					<div style={{ width: '40%', height: '100%' }}>
						최근 지원 이력
					</div>
				</div>
			</RoundBoxTemplate>
		</div>
	);
}
