import LText from '@/components/text/LText';

export default function LTextWhite({
	text,
}: {
	text: string;
	color?: string;
}): JSX.Element {
	return (
		<LText
			text={text}
			style={{
				width: '100%',
				color: 'white',
			}}
		></LText>
	);
}
