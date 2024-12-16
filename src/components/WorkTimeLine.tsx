import styled from 'styled-components';

export default function WorkTimeLine({
	workInfo,
	style,
}: {
	workInfo: { startDate: string; endDate: string; title: string };
	style: object;
}) {
	const BackGroundStyle = styled.div`
		position: relative;
		height: 40px;
		background-color: royalblue;
		border-radius: 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: start;
		vertical-align: center;
		overflow: hidden;
		align-content: center;
		text-indent: 10px;
		color: white;
	`;

	return <BackGroundStyle style={style}>{workInfo.title}</BackGroundStyle>;
}
