import { LIGHT_GRAY_1 } from '@/const/Color';
import styled from 'styled-components';

export default function ApplyHistory({ historyInfo }: any) {
	const VerticalLine = styled.div`
		height: 60%;
		margin: 4px;
		width: 2px;
		background-color: black;
	`;

	return (
		<div
			style={{
				width: '100%',
				height: '40px',
				backgroundColor: LIGHT_GRAY_1,
				borderRadius: '25px',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div className={'row applyDate'}>
				{historyInfo.applyDate ?? '-'}
			</div>
			<VerticalLine />
			<div className={'row platform'}>{historyInfo.platform ?? '-'}</div>
			<VerticalLine />
			<div className={'row company'}>{historyInfo.company ?? '-'}</div>
			<VerticalLine />
			<div className={`row resume}`}>{historyInfo.resumeName ?? '-'}</div>
			<VerticalLine />
			<div className={'row status'}>{historyInfo.status ?? '-'}</div>
		</div>
	);
}
