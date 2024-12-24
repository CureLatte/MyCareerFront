'use client';
import ResumeFilter from '@/components/resume/ResumeFilter';
import styled from 'styled-components';
import { useState } from 'react';
import ResumeCard from '@/components/resume/ResumeCard';
import ResumeRow from '@/components/resume/ResumeRow';
import { ResumeInfo } from '@/type/Resume';
import ResumePreview from '@/components/resume/ResumePreview';

export default function ResumeList() {
	const BackGroundStyle = styled.div``;

	const [resumeType, setResumeType] = useState<string>('card');

	const resumeList: ResumeInfo[] = [
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

	return (
		<BackGroundStyle>
			<ResumeFilter />
			<div
				style={{
					backgroundColor: 'white',
					columnWidth: '140px',
					columnCount: '3',
					// columnGap: '0px',
					margin: '0',
					width: '50%',
					overflow: 'auto',
				}}
			>
				{resumeList.map((item, i) => {
					if (resumeType === 'card') {
						return <ResumeCard key={i} resumeInfo={item} />;
					} else if (resumeType === 'row') {
						return <ResumeRow key={i} resumeInfo={item} />;
					} else {
						return <div key={i}></div>;
					}
				})}
			</div>
			<ResumePreview></ResumePreview>
		</BackGroundStyle>
	);
}
