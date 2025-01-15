import { notFound } from 'next/navigation';
import ResumeEditPage from '@/components/resume/ResumeEditPage';

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	if (isNaN(Number(id))) {
		notFound();
	}

	return <ResumeEditPage resumeId={Number(id)}></ResumeEditPage>;
}
