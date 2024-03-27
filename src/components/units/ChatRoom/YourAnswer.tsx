import styled from 'styled-components';

export default function YourAnswer(): JSX.Element {
	return (
		<MessageContainer>
			<Profile src="./ChatRoom/defaultProfile.svg" alt="profile" />
			<TextContainer>
				<ProfileName>김수빈</ProfileName>
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
	align-items: flex-start; // 프로필과 텍스트 컨테이너를 하단에 정렬
	margin-bottom: 10px;
`;

const Profile = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 20px; // 원형 프로필 이미지
	margin-right: 10px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProfileName = styled.div`
	font-size: 14px;
	color: #333;
	margin-bottom: 5px;
`;

const Chat = styled.div`
	position: relative; // 꼬리 이미지의 위치 기준점이 됩니다.
	display: flex;
	flex-direction: column;
	align-items: flex-start; // ChatBox가 왼쪽에 정렬되도록 합니다.
	margin-left: 10px; // 나선형 꼬리 이미지와 충분한 공간을 확보합니다.
`;

const ChatBox = styled.div`
	max-width: 70%;
	background-color: #fff;
	padding: 8px 12px;
	border-radius: 15px;
	font-size: 16px;
`;

const ChatTail = styled.div`
	position: absolute;
	top: 0; // 꼬리의 정확한 위치를 조절합니다.
	left: -10px; // 꼬리가 ChatBox 왼쪽에 위치하도록 조절합니다.
	width: 20px; // 꼬리 이미지의 크기입니다.
	height: 20px; // 꼬리 이미지의 크기입니다.
	background-image: url('./ChatRoom/chatTail.svg');
	background-size: cover;
	transform: rotate(0deg); // 필요한 경우 꼬리의 방향을 조절합니다.
`;
