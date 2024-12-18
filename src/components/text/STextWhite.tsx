import SText from '@/components/text/SText';

export default function STextWhite({ text }: { text: string }) {
	return (
		<SText
			text={text}
			style={{
				color: 'white',
			}}
		></SText>
	);
}
