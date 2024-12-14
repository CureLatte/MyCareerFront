import SText from '@/components/text/SText';

export default function STextBlack({ text }: { text: string }) {
	return (
		<SText
			text={text}
			style={{
				color: 'black',
			}}
		></SText>
	);
}
