'use client';
import ResumeFilter from '@/components/resume/ResumeFilter';
import styled from 'styled-components';
import { useState } from 'react';
import ResumeCard from '@/components/resume/ResumeCard';
import ResumeRow from '@/components/resume/ResumeRow';
import { ResumeInfoType, ResumeFilterType } from '@/type/Resume';
import ResumePreview from '@/components/resume/ResumePreview';

export default function ResumeList() {
	const BackGroundStyle = styled.div`
		// background-color: white;
		display: flex;
		flex-direction: row;

		.container {
			width: 50%;
			padding: 10px;
			box-sizing: border-box;
		}
	`;

	const [resumeFilter, setResumeFilter] = useState<ResumeFilterType>({
		type: 'card',
		branch: [],
		order: 'createdAt',
		orderType: 1,
	});

	const resumeList: ResumeInfoType[] = [
		{
			resume_id: 1,
			branch: 'branch1dfdfdfdfdfdfdfdfdf',
			title: 'title',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
		{
			resume_id: 1,
			branch: 'branch2',
			title: 'title',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
		{
			resume_id: 1,
			branch: 'branch3',
			title: 'title',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
		{
			resume_id: 1,
			branch: 'branch4',
			title: 'title',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
		{
			resume_id: 1,
			branch: 'branch5',
			title: 'title',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-01',
		},
	];

	let listStyle = {
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
			columnCount: '',
			columnWidth: '',
		};
	}

	return (
		<BackGroundStyle>
			<div className={'container'}>
				<ResumeFilter
					resumeFilter={resumeFilter}
					setResumeFilter={setResumeFilter}
				/>
				<div style={listStyle}>
					{resumeList.map((item, i) => {
						if (resumeFilter.type === 'card') {
							return <ResumeCard key={i} resumeInfo={item} />;
						} else if (resumeFilter.type === 'row') {
							return <ResumeRow key={i} resumeInfo={item} />;
						} else {
							return <div key={i}></div>;
						}
					})}
				</div>
			</div>
			<div className={'container'}>
				<ResumePreview></ResumePreview>
			</div>
		</BackGroundStyle>
	);
}
