'use client';
import { ResumeInfoType } from '@/type/Resume';
import ResumeCard from '@/components/resume/ResumeCard';
import ResumeRow from '@/components/resume/resumeListType/ResumeRow';
import LTextWhite from '@/components/text/LTextWhite';

export default function ResumeListTypeFactory({
	resumeInfoList,
	selectResumeId,
	setSelectResumeId,
	type,
}: {
	resumeInfoList: ResumeInfoType[];
	type: string;
	selectResumeId: number | null;
	setSelectResumeId: (id: number | null) => void;
}) {
	if (resumeInfoList.length <= 0) {
		return (
			<div>
				<LTextWhite text={'이력서가 존재하지 않습니다.'} />
			</div>
		);
	}

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

	if (type === 'row') {
		listStyle = {
			...listStyle,
			columnCount: '1',
			columnWidth: '100%',
			rowGap: '10px',
		};
	}

	return (
		<div style={listStyle}>
			{resumeInfoList.map((item: ResumeInfoType, i: number) => {
				if (type === 'card') {
					return (
						<ResumeCard
							key={i}
							resumeInfo={item}
							selected={selectResumeId === item.resumeId}
							onClick={() => {
								if (selectResumeId === item.resumeId) {
									return setSelectResumeId(null);
								}

								setSelectResumeId(item.resumeId);
							}}
						/>
					);
				} else if (type === 'row') {
					return (
						<ResumeRow
							key={i}
							resumeInfo={item}
							selected={selectResumeId === item.resumeId}
							onClick={() => {
								if (selectResumeId === item.resumeId) {
									return setSelectResumeId(null);
								}

								setSelectResumeId(item.resumeId);
							}}
						/>
					);
				}
			})}
		</div>
	);
}
