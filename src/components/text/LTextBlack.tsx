import LText from '@/components/text/LText';

export default function LTextBlack({
	text,
}: {
	text: string;
	color: string;
}): JSX.Element {
	return (
		<LText
			text={text}
			style={{
				color: 'black',
			}}
		></LText>
	);
}
