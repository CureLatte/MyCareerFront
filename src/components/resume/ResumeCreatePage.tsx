import MTextWhite from '@/components/text/MTextWhite';
import MDEditor from '@uiw/react-md-editor';
import TitleInput from '@/components/input/TitleInput';
import { useState } from 'react';
import { ResumeDetailInfoType } from '@/type/ResumeType';

export default function ResumeCreatePage() {
	const [resumeInfo, setResumeInfo] = useState<ResumeDetailInfoType>({
		title: '',
		resumeId: 0,
		branch: 'new',
		content: '',
		createdAt: new Date().toISOString().split('T')[0],
		updatedAt: new Date().toISOString().split('T')[0],
	});

	return (
		<div>
			<TitleInput
				style={{
					width: '50%',
				}}
				value={resumeInfo.title}
				onChange={(e) => {
					setResumeInfo({
						...resumeInfo,
						title: e.target.value,
					});
				}}
				placeHolder={'제목'}
			></TitleInput>
			<MDEditor
				key={'editor'}
				style={{
					width: '100%',
					minHeight: 'calc(100vh - 600px)',
				}}
				value={resumeInfo.content}
				onChange={(e) => {
					if (e === undefined) {
						return;
					}

					setResumeInfo({
						...resumeInfo,
						content: e,
					});
				}}
			></MDEditor>
		</div>
	);
}
