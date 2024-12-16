import MText from '@/components/text/MText';

export default function MTextWhite({ text }: { text: string }) {
	return (
		<MText
			text={text}
			style={{
				color: 'white',
			}}
		></MText>
	);
}
