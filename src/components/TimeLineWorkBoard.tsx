import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { sleep } from '@/utils/commonUtils';
import { start } from 'node:repl';
import WorkTimeLine from '@/components/WorkTimeLine';
import { TimeLineContext } from '@/context/TimeLineContext';

export default function TimeLineWorkBoard({ dateList }: { dateList: Date[] }) {
	const [loading, setLoading] = useState(true);
	const [workList, setWorkList] = useState<
		{
			startDate: string;
			endDate: string;
			title: string;
		}[]
	>([]);

	const styleState = useContext(TimeLineContext);

	useEffect(() => {
		getWorkList().then(() => {
			setLoading(false);
		});
	}, []);

	const getWorkList = async () => {
		setLoading(true);

		await sleep(100);

		setWorkList([
			{
				startDate: '2024-12-05',
				endDate: '2024-12-06',
				title: 'work 1',
			},
			{
				startDate: '2024-12-07',
				endDate: '2024-12-10',
				title: 'work 1',
			},
			{
				startDate: '2024-12-04',
				endDate: '2024-12-12',
				title: 'work 1',
			},
		]);
	};

	const BackGroundStyle = styled.div`
		justify-self: center;
		width: 90%;
		min-height: 400px;
		background-color: lightblue;
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
		overflow: scroll;
	`;

	if (loading) {
		return <BackGroundStyle>로딩중 입니다.</BackGroundStyle>;
	}

	return (
		<BackGroundStyle>
			<div
				style={{
					height: '100%',
					position: 'absolute',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'row',
					opacity: '50%',
					overflow: 'auto',
					paddingLeft: '4px',
				}}
			>
				{dateList.map((data, index) => {
					return (
						<div
							key={index}
							style={{
								width: '2px',
								height: '100px',
								backgroundColor: 'black',
								margin: `${styleState.gapWidth / 2 + styleState.rowWidth / 2}px`,
							}}
						></div>
					);
				})}
			</div>

			{workList.map((data, index) => {
				const startDate = new Date(data.startDate);

				const endDate = new Date(data.endDate);

				const dayDiff = Math.floor(
					(endDate.getTime() - startDate.getTime()) /
						(60 * 1000 * 24 * 60),
				);

				console.log(dayDiff);

				if (dayDiff <= 0) {
					return null;
				}

				const widthLength = dayDiff * styleState.rowWidth;

				const firstDate = dateList[0];

				const moveDateDiff = Math.floor(
					(startDate.getTime() - firstDate.getTime()) /
						(60 * 1000 * 24 * 60),
				);
				console.log(`moveDateDiff: ${moveDateDiff}`);
				return (
					<WorkTimeLine
						workInfo={data}
						key={index}
						style={{
							width: `${widthLength}px`,
							left: `${moveDateDiff * (styleState.rowWidth + styleState.gapWidth)}px`,
						}}
					></WorkTimeLine>
				);
			})}
		</BackGroundStyle>
	);
}
