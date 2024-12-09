'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function StandardTimeLine() {
	const [dateList, setDateList] = useState<Date[]>([]);

	useEffect(() => {
		getDateTimeLineList();
	}, []);

	const BackGroundStyle = styled.div`
		width: 80%;
		height: 50px;
		border-radius: 15px;
		background-color: lightskyblue;
		justify-self: center;
		flex-direction: row;
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
		overflow: auto;
		white-space: nowrap;
		text-overflow: ellipsis;
	`;

	const getDateTimeLineList = () => {
		const updatedPastDate = [];
		const today = new Date();
		console.log(`today ${today.getMonth() + 1} - ${today.getDate()}`);
		const defaultDiffDay = 5;
		today.setDate(today.getDate() - defaultDiffDay);

		for (let i = 0; i < defaultDiffDay * 2; i++) {
			today.setDate(today.getDate() + 1);
			updatedPastDate.push(new Date(today.getTime()));
		}

		setDateList([...updatedPastDate]);
	};

	const addDateList = (cnt: number) => {
		const prevDateList = [...dateList];

		// 왼쪽이 마이너스
		for (let i = 0; i < Math.abs(cnt); i++) {
			if (cnt <= 0) {
				const firstDate = dateList[0];
				firstDate.setDate(firstDate.getDate() - 1);
				prevDateList.unshift(new Date(firstDate.getTime()));
			} else {
				// 오른쪽이 플러스
				const lastDate = dateList[dateList.length - 1];
				lastDate.setDate(lastDate.getDate() + 1);
				prevDateList.push(new Date(lastDate.getTime()));
			}
		}

		setDateList([...prevDateList]);
	};

	return (
		<BackGroundStyle>
			<div
				onClick={() => {
					addDateList(-10);
				}}
			>
				지날 날 보기
			</div>
			{dateList.map((date, index) => {
				return (
					<div style={{ backgroundColor: 'darkgrey' }} key={index}>
						{date.getMonth() + 1} - {date.getDate()}
					</div>
				);
			})}
			<div
				onClick={() => {
					addDateList(10);
				}}
			>
				다음 날 보기
			</div>
		</BackGroundStyle>
	);
}
