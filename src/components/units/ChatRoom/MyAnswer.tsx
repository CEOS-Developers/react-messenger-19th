import styled from 'styled-components';

export default function MyAnswer(): JSX.Element {
	return (
		<MessageContainer>
			<TextContainer>
				<Chat>
					<ChatBox>회의 결과가 정리된 파일 방금 공유했는데 구글 드라이브 확인해주세요!</ChatBox>
					<ChatTail />
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
	position: relative; // 꼬리 이미지의 위치 기준점이 됩니다.
	display: flex;
	flex-direction: column;
	align-items: flex-end; // ChatBox가 왼쪽에 정렬되도록 합니다.
	margin-right: 10px; // 나선형 꼬리 이미지와 충분한 공간을 확보합니다.
`;

const ChatBox = styled.div`
	max-width: 80%;
	background-color: #9de694;
	padding: 8px 12px;
	border-radius: 15px;
	font-size: 16px;
`;

const ChatTail = styled.div`
	position: absolute;
	top: 0; // 꼬리의 정확한 위치를 조절합니다.
	right: -10px; // 꼬리가 ChatBox 왼쪽에 위치하도록 조절합니다.
	width: 26px; // 꼬리 이미지의 크기입니다.
	height: 20px; // 꼬리 이미지의 크기입니다.
	background-image: url('./ChatRoom/MyChatTail.svg');
	background-size: cover;
`;
