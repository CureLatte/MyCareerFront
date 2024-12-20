import styled from 'styled-components';
import { WHITE_0 } from '@/const/Color';

export default function NavIcon({ type }: { type: string }) {
	const BackGroundStyle = styled.div`
		width: 16px;
		height: 16px;
		background: transparent;
	`;

	if (type === 'alarm') {
		const AlarmDot = styled.div`
			width: 10px;
			height: 10px;
			background-color: ${WHITE_0};
			border-radius: 50%;
		`;

		return <AlarmDot></AlarmDot>;
	}

	if (type === 'open') {
		return <div>open</div>;
	}

	if (type === 'close') {
		return <div>close</div>;
	}

	return <BackGroundStyle></BackGroundStyle>;
}
