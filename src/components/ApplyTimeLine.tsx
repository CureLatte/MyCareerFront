'use client';
import RoundBoxTemplate from '@/components/RoundBoxTemplate';
import StandardTimeLine from '@/components/StandardTimeLine';
import { useContext, useEffect, useRef, useState } from 'react';
import TimeLineWorkBoard from '@/components/TimeLineWorkBoard';
import { TimeLineContext, TimeLineProvider } from '@/context/TimeLineContext';
<<<<<<< HEAD

export default function ApplyTimeLine({ className }: { className?: string }) {
	const [dateList, setDateList] = useState<Date[]>([]);
	const styleState = useContext(TimeLineContext);

	useEffect(() => {
		console.log('updated!');
		getDateTimeLineList();
	}, []);

	const getDateTimeLineList = () => {
		const updatedPastDate = [];
		const today = new Date();
		console.log(`today ${today.getMonth() + 1} - ${today.getDate()}`);
		const defaultDiffDay = 15;
		today.setDate(today.getDate() - defaultDiffDay);

		for (let i = 0; i < defaultDiffDay * 2; i++) {
			today.setDate(today.getDate() + 1);
			updatedPastDate.push(new Date(today.getTime()));
		}

		setDateList([...updatedPastDate]);
		// if (backgroundRef.current) {
		// 	setMoveStatus(Number(backgroundRef.current.style.width) / 2);
		// }
	};

	return (
		<RoundBoxTemplate className={className}>
=======

export default function ApplyTimeLine() {
	const [dateList, setDateList] = useState<Date[]>([]);
	const styleState = useContext(TimeLineContext);

	useEffect(() => {
		console.log('updated!');
		getDateTimeLineList();
	}, []);

	const getDateTimeLineList = () => {
		const updatedPastDate = [];
		const today = new Date();
		console.log(`today ${today.getMonth() + 1} - ${today.getDate()}`);
		const defaultDiffDay = 15;
		today.setDate(today.getDate() - defaultDiffDay);

		for (let i = 0; i < defaultDiffDay * 2; i++) {
			today.setDate(today.getDate() + 1);
			updatedPastDate.push(new Date(today.getTime()));
		}

		setDateList([...updatedPastDate]);
		// if (backgroundRef.current) {
		// 	setMoveStatus(Number(backgroundRef.current.style.width) / 2);
		// }
	};

	return (
		<RoundBoxTemplate>
>>>>>>> be3b9a59361bcef467e1d777299c4124e42b6bae
			<TimeLineProvider>
				<div>THIS iS TIMELINE</div>
				<StandardTimeLine
					dateList={dateList}
					setDateList={setDateList}
					today={new Date()}
				></StandardTimeLine>
				<TimeLineWorkBoard dateList={dateList}></TimeLineWorkBoard>
			</TimeLineProvider>
		</RoundBoxTemplate>
	);
}
