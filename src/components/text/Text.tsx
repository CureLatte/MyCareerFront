export default function Text({ text, style }: { text: string; style: object }) {
	return (
		<div
			style={{
				...style,
				fontWeight: 'bold',
				textAlign: 'center',
				verticalAlign: 'center',
			}}
		>
			{text}
		</div>
	);
}
