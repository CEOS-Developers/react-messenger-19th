import styled, { css } from 'styled-components';

export const ChatMessageBox = styled.div<{ isCurrentUser: boolean }>`
	display: inline-block;
	padding: 8px 9px 8px 9px;

	width: 196px;
	margin-left: 30px;
	margin-bottom: 5px;
	margin-top: 5px;
	border-radius: 8px;
	background-color: #ededed;
	align-self: flex-start;
	border-radius: 20px 20px 20px 5px;

	color: var(--dark-gray, #4e5058);
	font-family: 'Noto Sans KR';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 24px */
	letter-spacing: -0.41px;

	${(props) =>
		props.isCurrentUser &&
		css`
			border-radius: 20px 20px 5px 20px;
			background-color: #dcf7c5;
			align-self: flex-end;
			margin-right: 5px;
		`}

	${(props) => !props.isCurrentUser && css``}
`;

export const ChatBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 96px;

	margin-bottom: 400px;
	width: 375px;
`;

export const UserProfileImage = styled.img<{ isCurrentUser: boolean }>`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-right: 0px; /* 메시지 박스와의 간격 */
	margin-left: 5px; /* 메시지 박스와의 간격 */
	display: inline-block;
	margin-top: -10px;
	position: relative;
	z-index: -5;

	${(props) =>
		props.isCurrentUser &&
		css`
			display: none;
		`}
`;

export const DateSeparator = styled.div`
	width: 122px;
	height: 21px;
	flex-shrink: 0;
	border-radius: 4px;
	background: var(--medium-gray, #d9d9d9);
	color: #000;
	text-align: center;
	margin: 10px auto; // 정중앙 정렬
	font-family: 'Noto Sans KR';
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 180%; /* 18px */
`;

export const TimeDisplay = styled.span`
	display: block; // 메시지 박스 위에 표시
	text-align: center; // 정중앙 정렬
	margin-bottom: 5px;
	margin-top: 5px;
	font-size: 12px;
`;
