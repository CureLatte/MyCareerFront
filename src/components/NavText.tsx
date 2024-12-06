import { BACKGROUND_GRAY } from '@/const/Color';

export default function NavText({ text, activate, onClick }: any) {
	let textStyle: any = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		marginTop: '10px',
		marginBottom: '10px',
		height: '30px',
		cursor: 'pointer',
	};
	if (activate) {
		// 선택시
		textStyle = {
			...textStyle,
			color: 'white',
			backgroundColor: BACKGROUND_GRAY,
		};
	}

	return (
		<div onClick={onClick} style={textStyle}>
			{text}
		</div>
	);
}
