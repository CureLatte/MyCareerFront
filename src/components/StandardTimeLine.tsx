'use client';
import styled from 'styled-components';
import {
	ForwardedRef,
	forwardRef,
	ReactNode,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

export default function StandardTimeLine() {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const [dateList, setDateList] = useState<Date[]>([]);
	const [moveStatus, setMoveStatus] = useState<number>(300);

	useEffect(() => {
		console.log('updated!');
		getDateTimeLineList();
	}, []);

	useLayoutEffect(() => {
		console.log('updated Layout Effect!!');
		if (moveStatus && backgroundRef.current) {
			backgroundRef.current.scrollLeft = moveStatus;
		}
	}, [backgroundRef, moveStatus]);

	const BackGroundStyle = styled.div`
		width: 80%;
		height: 50px;
		border-radius: 15px;
		background-color: lightskyblue;
		justify-self: center;
		flex-direction: row;
		display: flex;
		gap: 20px;
		justify-content: space-evenly;
		align-items: center;
		overflow: auto;
		white-space: nowrap;
		text-overflow: ellipsis;
		scroll-snap-align: center;
	`;

	const StackTagsWrap = forwardRef(
		(
			{ children }: { children: ReactNode },
			ref: ForwardedRef<HTMLDivElement>,
		) => {
			return <BackGroundStyle ref={ref}>{children}</BackGroundStyle>;
		},
	);

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
		if (backgroundRef.current) {
			setMoveStatus(Number(backgroundRef.current.style.width) / 2);
		}
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

		if (cnt <= 0) {
			if (backgroundRef.current) {
				setMoveStatus(backgroundRef.current.scrollLeft * -1);
			}
		} else {
			if (backgroundRef.current) {
				setMoveStatus(backgroundRef.current.scrollLeft);
			}
		}
	};

	return (
		<StackTagsWrap ref={backgroundRef}>
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
				onClick={(e) => {
					addDateList(10);
				}}
			>
				다음 날 보기
			</div>
		</StackTagsWrap>
	);
}
