'use client';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import ApplyStatus from '@/components/ApplyStatus';
import React from 'react';
import { LIGHT_GRAY_1 } from '@/const/Color';
import ApplyDashboard from '@/pages/ApplyDashboard';
import ApplyTimeLine from '@/components/ApplyTimeLine';
import styled from 'styled-components';
import BadgeList from '@/components/BadgeList';
import BadgeListBox from '@/components/BadgeListBox';
import LTextWhite from '@/components/text/LTextWhite';

export default function DashBoardPage() {
	const BackGroundStyle = styled.div`
		display: grid;
		grid-template-areas:
			'applyStatus applyStatus applyStatus applySwitch '
			'badgeList applyList aside aside'
			'applyHistory applyHistory aside aside'
			'bottom bottom bottom bottom';

		grid-column-gap: 20px;
		grid-row-gap: 20px;

		grid-template-rows: 60px 200px 300px 1fr;
		grid-template-columns: 1fr 1fr 1fr 100px;
		min-height: 750px;
		height: calc(100vh - 40px);
		margin: 20px 20px 20px 0;

		.box {
			margin: 0;
			padding: 20px;
		}

		.applyStatus {
			grid-area: applyStatus;
		}

		.badgeList {
			grid-area: badgeList;
		}

		.applyList {
			grid-area: applyList;
		}

		.applyHistory {
			grid-area: applyHistory;
		}

		.aside {
			grid-area: aside;
		}

		.bottom {
			grid-area: bottom;
		}

		.applySwitch {
			grid-area: applySwitch;
		}
	`;

	return (
		<BackGroundStyle>
			<RoundBoxTemplate className={'box applyStatus'}>
				<ApplyStatus></ApplyStatus>
			</RoundBoxTemplate>
			<RoundBoxTemplate className={'box applySwitch'}>
				<LTextWhite text={'ON'}></LTextWhite>
			</RoundBoxTemplate>

			<RoundBoxTemplate className={'box badgeList'}>
				<BadgeListBox></BadgeListBox>
			</RoundBoxTemplate>
			<RoundBoxTemplate className={'box applyList'}>
				<div>status</div>
			</RoundBoxTemplate>
			<RoundBoxTemplate className={'box applyHistory'}>
				<div>status</div>
			</RoundBoxTemplate>
			<RoundBoxTemplate className={'box aside'}>
				<div>status</div>
			</RoundBoxTemplate>
			<RoundBoxTemplate className={'box bottom'}>
				<div>status</div>
			</RoundBoxTemplate>

			{/*<ApplyDashboard className={'badgeList'}></ApplyDashboard>*/}
			{/*<ApplyTimeLine className={'applyList'}></ApplyTimeLine>*/}
		</BackGroundStyle>
	);
}
