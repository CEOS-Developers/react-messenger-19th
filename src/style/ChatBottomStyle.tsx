import styled from 'styled-components';

// ChatBottomContainer를 div로 변경하여 컨테이너로 사용
export const ChatBottomContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: 375px;
	height: 80px;
	flex-shrink: 0;

	background-image: url('/item/chatBottom.png');
	background-size: cover;
`;

export const ChatInput = styled.input`
	width: 275px;
	height: 32px;
	flex-shrink: 0;
	font-size: 14px;
	margin-left: 11%;
	border-radius: 16px;
	border: 0.5px solid #8e8e93;
	padding: 0px 0px 0px 7px;
	opacity: 0.4496;
	margin-top: 8px;
	background: #fff;
`;

export const SendButton = styled.img`
	width: 30px;
	height: 30px;
	flex-shrink: 0;
	cursor: pointer;
	border: none;
	position: absolute;
	margin-top: 9px;
	margin-left: 4px;
`;
