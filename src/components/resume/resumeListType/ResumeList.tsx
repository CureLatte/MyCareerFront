'use client';
import ResumeFilter from '@/components/resume/ResumeFilter';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ResumeInfoType, ResumeFilterType } from '@/type/Resume';
import ResumePreview from '@/components/resume/ResumePreview';
import { getResumeListAPI } from '@/api/ResumeApi';
import ResumeListTypeFactory from '@/components/resume/resumeListType/ResumeListTypeFactory';
import LTextWhite from '@/components/text/LTextWhite';

export default function ResumeList() {
	const BackGroundStyle = styled.div`
		// background-color: white;
		display: flex;
		flex-direction: row;
		min-height: 100%;

		.container {
			width: 50%;
			padding: 10px;
			box-sizing: border-box;
		}
	`;

	const [loading, setLoading] = useState(true);
	const [resumeFilter, setResumeFilter] = useState<ResumeFilterType>({
		type: 'card',
		branch: [],
		order: 'createdAt',
		orderType: 1,
	});

	const [resumeList, setResumeList] = useState<ResumeInfoType[]>([]);
	const [selectResumeId, setSelectResumeId] = useState<number | null>(null);

	useEffect(() => {
		getResumeList()
			.then(() => {
				setLoading(false);
			})
			.catch(() => {
				setLoading(true);
			});
	}, [resumeFilter]);

	const getResumeList = async () => {
		setLoading(true);
		const response = await getResumeListAPI(resumeFilter);

		if (!response.ok) {
			throw new Error('통신 오류');
		}

		setResumeList(response.data);
	};

	let listStyle: any = {
		// backgroundColor: 'white',
		columnWidth: '140px',
		columnCount: '3',
		// columnGap: '0px',
		margin: '0',
		width: '100%',
		overflow: 'auto',
		padding: '10px',
		boxSizing: 'border-box',
	};

	if (resumeFilter.type === 'row') {
		listStyle = {
			...listStyle,
			columnCount: '1',
			columnWidth: '100%',
			rowGap: '10px',
		};
	}

	return (
		<BackGroundStyle>
			<div className={'container'}>
				<ResumeFilter
					resumeFilter={resumeFilter}
					setResumeFilter={setResumeFilter}
				/>

				{loading ? (
					<div
						style={{
							marginTop: '50px',
							justifySelf: 'center',
						}}
					>
						<LTextWhite text={'로딩중입니다.'} />
					</div>
				) : (
					<ResumeListTypeFactory
						type={resumeFilter.type}
						resumeInfoList={resumeList}
						selectResumeId={selectResumeId}
						setSelectResumeId={setSelectResumeId}
					></ResumeListTypeFactory>
				)}
			</div>
			<div className={'container'}>
				<ResumePreview resumeId={selectResumeId}></ResumePreview>
			</div>
		</BackGroundStyle>
	);
}
