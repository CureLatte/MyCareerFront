import Text from '@/components/text/Text';

export default function LText({
	text,
	style,
}: {
	text: string;
	style?: object;
}) {
	return (
		<Text
			text={text}
			style={{
				...style,
				fontSize: '20px',
			}}
		></Text>
	);
}
