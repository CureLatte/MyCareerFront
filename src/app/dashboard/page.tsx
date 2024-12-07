import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import ApplyStatus from '@/components/ApplyStatus';
import React from 'react';
import { LIGHT_GRAY_1 } from '@/const/Color';
import ApplyDashboard from '@/components/ApplyDashboard';
import ApplyTimeLine from '@/components/ApplyTimeLine';

export default function DashBoardPage() {
	return (
		<div>
			<ApplyDashboard></ApplyDashboard>
			<ApplyTimeLine></ApplyTimeLine>
		</div>
	);
}
