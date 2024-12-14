import MText from '@/components/text/MText';

export default function MTextBlack({ text }: { text: string }) {
	return (
		<MText
			text={text}
			style={{
				color: 'black',
			}}
		></MText>
	);
}
