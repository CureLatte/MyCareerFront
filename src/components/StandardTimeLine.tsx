'use client';
import styled from 'styled-components';
import {
	Dispatch,
	ForwardedRef,
	forwardRef,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { TimeLineContext } from '@/context/TimeLineContext';

export default function StandardTimeLine({
	dateList,
	setDateList,
	today,
}: {
	dateList: Date[];
	setDateList: Dispatch<SetStateAction<Date[]>>;
	today: Date;
}) {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const [moveStatus, setMoveStatus] = useState<number>(400);
	const styleState = useContext(TimeLineContext);

	useLayoutEffect(() => {
		console.log('updated Layout Effect!!');
		if (moveStatus && backgroundRef.current) {
			backgroundRef.current.scrollLeft = moveStatus;
		}
	}, [backgroundRef, moveStatus]);

	const BackGroundStyle = styled.div`
		width: ${styleState.width}px;
		height: 50px;
		border-radius: 15px;
		// background-color: lightskyblue;
		justify-self: center;
		flex-direction: row;
		display: flex;
		gap: ${styleState.gapWidth}px;
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
					<div
						style={{
							minWidth: `${styleState.rowWidth}px`,
							height: '20px',
							position: 'relative',
							backgroundColor: 'darkgrey',
						}}
						key={index}
					>
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
