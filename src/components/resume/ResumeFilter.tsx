'use client';
import styled from 'styled-components';
import STextWhite from '@/components/text/STextWhite';
import {
	DARK,
	DARK_BLUE_3,
	DARK_BLUE_4,
	DARK_GRAY_3,
	WHITE_1,
} from '@/const/Color';
import STextBlack from '@/components/text/STextBlack';
import { ResumeFilterType } from '@/type/Resume';
import ResumeFilterTag from '@/components/resume/ResumeFilterTag';

export default function ResumeFilter({
	setResumeFilter,
	resumeFilter,
}: {
	resumeFilter: ResumeFilterType;
	setResumeFilter: (filter: ResumeFilterType) => void;
}) {
	const resumeTypeList = [
		{
			type: 'card',
			value: 'card',
			name: '카드',
		},
		{
			type: 'row',
			value: 'row',
			name: '리스트',
		},
	];

	const resumeOrderList = [
		{
			type: 'createdAt',
			name: '생성일 순',
			value: 'createdAt',
		},
		{
			type: 'updatedAt',
			name: '업데이트 순',
			value: 'updatedAt',
		},
	];

	const resumeOrderTypeList = [
		{
			type: 'asc',
			value: 1,
			name: '내림 차순',
		},
		{
			type: 'desc',
			value: 2,
			name: '오름 차순',
		},
	];

	const BackGroundStyle = styled.div`
		background-color: ${DARK_BLUE_3};
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		padding: 10px;
		border-radius: 20px;
		box-sizing: border-box;

		.list {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 20px;
			margin: 5px;
		}

		.tagName {
			background-color: ${DARK};
			height: 20px;
			border-radius: 20px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 5px;
			width: 100px;
			text-overflow: ellipsis;
		}

		.tagList {
			display: flex;
			flex-direction: row;
			gap: 10px;
		}
	`;

	return (
		<BackGroundStyle>
			<div className={'list'}>
				<div className={'tagName'}>
					<STextWhite text={'리스트 종류'}></STextWhite>
				</div>
				<div className={'tagList'}>
					{resumeTypeList.map((data, index: number) => (
						<ResumeFilterTag
							key={index}
							tagName={data.name}
							selected={data.value === resumeFilter.type}
							onClick={() => {
								setResumeFilter({
									...resumeFilter,
									type: data.value,
								});
							}}
						></ResumeFilterTag>
					))}
				</div>
			</div>
			<div className={'list'}>
				<div className={'tagName'}>
					<STextWhite text={'브랜치 종류'}></STextWhite>
				</div>

				<div className={'tagList'}>
					<ResumeFilterTag
						selected={true}
						tagName={'master'}
						onClick={() => {
							setResumeFilter({
								...resumeFilter,
								branch: ['master'],
							});
						}}
					></ResumeFilterTag>
				</div>
			</div>
			<div className={'list'}>
				<div className={'tagName'}>
					<STextWhite text={'정렬 종류'}></STextWhite>
				</div>
				<div className={'tagList'}>
					{resumeOrderList.map((data, index) => {
						return (
							<ResumeFilterTag
								key={index}
								tagName={data.name}
								selected={data.value === resumeFilter.order}
								onClick={() => {
									setResumeFilter({
										...resumeFilter,
										order: data.value,
									});
								}}
							></ResumeFilterTag>
						);
					})}
				</div>
			</div>

			<div className={'list'}>
				<div className={'tagName'}>
					<STextWhite text={'정렬 기준'}></STextWhite>
				</div>
				<div className={'tagList'}>
					{resumeOrderTypeList.map((data, index) => {
						return (
							<ResumeFilterTag
								key={index}
								tagName={data.name}
								selected={data.value === resumeFilter.orderType}
								onClick={() => {
									setResumeFilter({
										...resumeFilter,
										orderType: data.value,
									});
								}}
							></ResumeFilterTag>
						);
					})}
				</div>
			</div>
		</BackGroundStyle>
	);
}
