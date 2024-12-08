'use client';
import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import { LIGHT_GRAY_2 } from '@/const/Color';
import styled from 'styled-components';

export default function ApplyTable() {
	const [loading, setLoading] = useState(true);
	const [applyData, setApplyData] = useState<{}>({});

	const BackGround = styled.div`
		width: 80%;
		height: 150px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 15px;
		justify-content: center;
	`;

	useEffect(() => {
		getApplyStatus()
			.then(() => {
				setLoading(false);
			})
			.catch(() => {});
	}, []);

	const getApplyStatus = async () => {
		setLoading(true);

		const data = {
			applyStatus: 1,
			paperTest: 2,
			assignmentTest: 3,
			result: 10,
		};
		setApplyData({ ...data });
		await sleep(3000);
	};

	if (loading) {
		return <BackGround>로딩중 입니다..</BackGround>;
	}

	return (
		<BackGround>
			<div
				style={{
					width: '120px',
					height: '30px',
					borderRadius: '15px',
					backgroundColor: '#E4E4E4',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				지원 현황
			</div>
			<table
				style={{
					gap: '10px',
					margin: '0 10px',
					backgroundColor: LIGHT_GRAY_2,
					width: '80%',
					fontSize: '17px',
					borderCollapse: 'separate',
					borderSpacing: '10px',
					textAlign: 'center',
					borderRadius: '20px',
					verticalAlign: 'center',
				}}
			>
				<thead>
					<tr
						style={{
							gap: '10px',
							margin: '10px',
							fontWeight: 'bold',
						}}
					>
						{Object.keys(applyData).map(
							(key: string, index: number) => {
								return (
									<td style={{}} key={index}>
										{key}
									</td>
								);
							},
						)}
					</tr>
				</thead>

				<tbody>
					<tr style={{}}>
						{Object.keys(applyData).map(
							(key: string, index: number) => {
								return (
									<td style={{}} key={index}>
										{applyData[key]}
									</td>
								);
							},
						)}
					</tr>
				</tbody>
			</table>
		</BackGround>
	);
}
