'use client';
import { useEffect, useState } from 'react';
import { sleep } from '@/utils/commonUtils';
import { LIGHT_GRAY_2 } from '@/const/Color';
import styled from 'styled-components';

export default function ApplyTable() {
	const [loading, setLoading] = useState<boolean>(true);
	const [applyData, setApplyData] = useState<any>({});

	const BackGround = styled.div`
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;

		.row {
			text-align: center;
		}

		.data {
			font-size: 17px;
		}
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
			interview: 10,
			result: 10,
		};
		setApplyData({ ...data });
		await sleep(3000);
	};

	if (loading) {
		return (
			<BackGround>
				<div>로딩중 입니다..</div>
			</BackGround>
		);
	}

	return (
		<BackGround>
			<table
				style={{
					backgroundColor: LIGHT_GRAY_2,
					width: '100%',
					tableLayout: 'fixed',
					fontSize: '12px',
					borderCollapse: 'separate',
					borderSpacing: '10px',
					borderRadius: '20px',
					textAlign: 'center',
					verticalAlign: 'center',
				}}
			>
				<thead>
					<tr
						style={{
							fontWeight: 'bold',
						}}
					>
						{Object.keys(applyData).map(
							(key: string, index: number) => {
								return (
									<td className={'row'} key={index}>
										{key}
									</td>
								);
							},
						)}
					</tr>
				</thead>

				<tbody>
					<tr>
						{Object.keys(applyData).map(
							(key: string, index: number) => {
								return (
									<td className={'data'} key={index}>
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
