'use client';
import { DARK_BLUE_3, LIGHT_GRAY_1, LIGHT_GRAY_3 } from '@/const/Color';
import ApplyHistoryList from '@/components/ApplyHistoryList';
import styled from 'styled-components';
import WhiteTitle from '@/components/WhiteTitle';
import STextWhite from '@/components/text/STextWhite';

export default function ApplyHistoryListBox() {
	const BackGroundStyle = styled.div`
		// background-color: ${LIGHT_GRAY_3};
		border-radius: 20px;
		// display: flex;
		// flex-direction: column;
		gap: 15px;
		height: 100%;
		overflow-y: scroll;
		scroll-margin: 10px;
		padding-right: 20px;

		&::-webkit-scrollbar {
			background: transparent;
			border-radius: 15px;
			width: 10px;
			height: 50%;
			margin: 5px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${LIGHT_GRAY_3};
			border-radius: 15px;
		}

		&::-webkit-scrollbar-track {
			opacity: 0;
		}

		.row {
			width: 80px;
			overflow: hidden;
			text-align: center;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.header {
			background-color: ${DARK_BLUE_3};
			color: white;
			border-radius: 20px;
			text-align: center;
			justify-content: center;
			align-items: center;
			display: flex;
			flex-direction: row;
			height: 20px;
		}

		.applyDate {
			width: 100px;
		}

		.company {
			width: 60px;
		}

		.platform {
			width: 60px;
		}

		.status {
			width: 100px;
		}

		.resume {
			width: 80px;
		}
	`;

	return (
		<BackGroundStyle>
			<WhiteTitle text={'최근 지원 내역'}></WhiteTitle>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '10px',
					width: '100%',
					justifyContent: 'center',
					marginTop: '10px',
					marginBottom: '10px',
				}}
			>
				<div className={'row header applyDate'}>
					<STextWhite text={'지원날짜'}></STextWhite>
				</div>
				<div className={'row header platform'}>
					<STextWhite text={'플랫폼'}></STextWhite>
				</div>
				<div className={'row header company'}>
					<STextWhite text={'회사'}></STextWhite>
				</div>
				<div className={'row header resume'}>
					<STextWhite text={'이력서'}></STextWhite>
				</div>
				<div className={'row header status'}>
					<STextWhite text={'상태'}></STextWhite>
				</div>
			</div>
			<ApplyHistoryList />
		</BackGroundStyle>
	);
}
