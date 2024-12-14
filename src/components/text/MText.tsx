import Text from '@/components/text/Text';

export default function MText({
	text,
	style,
}: {
	text: string;
	style: object;
}) {
	return (
		<Text
			text={text}
			style={{
				...style,
				fontSize: '16px',
			}}
		></Text>
	);
}
