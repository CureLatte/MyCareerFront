import Text from '@/components/text/Text';

export default function SText({ text, style }: { text: string; style: any }) {
	return (
		<Text
			text={text}
			style={{
				...style,
				fontSize: '12px',
			}}
		></Text>
	);
}
