import styled from 'styled-components';
import type { MyFirstMessageProps } from '../../../lib/types';

export default function MyFirstMessage(props: MyFirstMessageProps): JSX.Element {
	return (
		<MessageContainer>
			<TextContainer>
				<Chat>
					<SentTime>{props.sentTime}</SentTime>
					{!props.isContinuous && <ChatTail />}
					<ChatBox>{props.message}</ChatBox>
				</Chat>
			</TextContainer>
		</MessageContainer>
	);
}

const MessageContainer = styled.div`
	display: flex;

	justify-content: end;
	margin-bottom: 10px;
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: start;
`;

const Chat = styled.div`
	width: 100%;
	position: relative; // 꼬리 이미지의 위치 기준점이 됩니다.
	display: flex;
	justify-content: end;
	align-items: end;
	margin-right: 10px; // 나선형 꼬리 이미지와 충분한 공간을 확보합니다.
`;

const ChatBox = styled.div`
	width: 80%;
	background-color: #9de694;
	padding: 8px 12px;
	border-radius: 15px;
	font-size: 14px;
	word-wrap: break-word; // 긴 텍스트를 자동으로 줄바꿈합니다.
	white-space: normal; // 텍스트의 공백을 적절히 처리합니다.
`;

const ChatTail = styled.div`
	position: absolute;
	top: 0; // 꼬리의 정확한 위치를 조절합니다.
	right: -9px; // 꼬리가 ChatBox 왼쪽에 위치하도록 조절합니다.
	width: 26px; // 꼬리 이미지의 크기입니다.
	height: 20px; // 꼬리 이미지의 크기입니다.
	background-image: url('./ChatRoom/MyChatTail.svg');
	background-size: cover;
`;

const SentTime = styled.div`
	font-size: 12px;
	color: #666; // 시간 표시 색상 조절
	padding: 2px 5px; // 필요한 경우 패딩 조절
`;
