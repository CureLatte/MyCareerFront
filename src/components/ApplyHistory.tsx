'use client';
import {
	DARK_GRAY_1,
	LIGHT_GRAY_1,
	LIGHT_GRAY_2,
	LIGHT_GRAY_4,
} from '@/const/Color';
import styled from 'styled-components';

export default function ApplyHistory({ historyInfo }: any) {
	const BackGroundStyle = styled.div`
		width: 100%;
		height: 40px;
		background-color: ${LIGHT_GRAY_1};
		border-radius: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		&:hover {
			background-color: ${DARK_GRAY_1};
			color: white;
			.vertical {
				background-color: ${LIGHT_GRAY_4};
			}
		}
	`;

	const VerticalLine = styled.div`
		height: 60%;
		margin: 4px;
		width: 2px;
		background-color: black;
	`;

	return (
		<BackGroundStyle className={'applyHistory'}>
			<div className={'row applyDate'}>
				{historyInfo.applyDate ?? '-'}
			</div>
			<VerticalLine className={'vertical'} />
			<div className={'row platform'}>{historyInfo.platform ?? '-'}</div>
			<VerticalLine className={'vertical'} />
			<div className={'row company'}>{historyInfo.company ?? '-'}</div>
			<VerticalLine className={'vertical'} />
			<div className={`row resume}`}>{historyInfo.resumeName ?? '-'}</div>
			<VerticalLine className={'vertical'} />
			<div className={'row status'}>{historyInfo.status ?? '-'}</div>
		</BackGroundStyle>
	);
}
