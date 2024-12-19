import {
	BACKGROUND_GRAY,
	DARK_BLUE_3,
	DARK_BLUE_4,
	LIGHT_GRAY_4,
} from '@/const/Color';
import Link from 'next/link';
import LTextWhite from '@/components/text/LTextWhite';

export default function NavText({ text, activate, onClick, url }: any) {
	let textStyle: any = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',

		marginTop: '10px',
		marginBottom: '10px',
		width: '150px',
		height: '60px',
		cursor: 'pointer',
		fontSize: '20px',
		textDecoration: 'none',
		borderRadius: '20px',
		color: LIGHT_GRAY_4,
		backgroundColor: DARK_BLUE_4,
	};
	if (activate) {
		// 선택시
		textStyle = {
			...textStyle,
			color: 'white',
			backgroundColor: DARK_BLUE_3,
		};
	}

	return (
		<Link href={url} onClick={onClick} style={textStyle}>
			{text}
		</Link>
	);
}
