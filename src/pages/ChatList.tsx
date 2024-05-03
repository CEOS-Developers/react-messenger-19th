import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Chat {
	id: number;
	name: string;
	message: string;
	time: string;
	unreadCount: number;
}

export default function ChatList(): JSX.Element {
	const navigate = useNavigate(); // 라우팅 함수 초기화
	// 채팅 데이터 상태
	const [chats, setChats] = useState<Chat[]>([
		{ id: 1, name: '정수완', message: 'message', time: '오후 11:11', unreadCount: 0 },
		// { id: 2, name: '이수현', message: '안녕하세요!', time: '오전 9:20', unreadCount: 0 },
		// { id: 3, name: '박지민', message: '오랜만이에요.', time: '오후 1:45', unreadCount: 1 },
	]);

	// 채팅 항목 클릭 이벤트
	const handleClickChat = (chatId: number): void => {
		const chat = chats.find(c => c.id === chatId);
		if (!chat) return;

		navigate(`/chatroom/${chatId}`, { state: { chat } });
	};

	return (
		<Wrapper>
			<ChatListHeader>
				<Title>채팅</Title>
				<div>
					<ImgIcon src="/icon/addChat.svg" />
					<ImgIcon src="/icon/list.svg" />
				</div>
			</ChatListHeader>

			<SearchDiv>
				<ImgIcon src="/icon/search.svg" />
				<Input placeholder="검색" />
			</SearchDiv>

			<ChatListContainer>
				{chats.map(chat => (
					<Chat1
						key={chat.id}
						onClick={() => {
							handleClickChat(chat.id);
						}}
					>
						<Profile src="/icon/ChatProfile.svg" />
						<ChatInfo>
							<NameSpace>
								<Name>{chat.name}</Name>
								<RecentTime>{chat.time}</RecentTime>
							</NameSpace>

							<NameSpace>
								<Message>{chat.message}</Message>
								{chat.unreadCount > 0 && <NotCount>{chat.unreadCount}</NotCount>}
							</NameSpace>
						</ChatInfo>
					</Chat1>
				))}
			</ChatListContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	padding: 40px 15px 20px 15px;
	display: flex;
	flex-direction: column;
`;

const ChatListHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 600;
	color: #000;
`;

const ImgIcon = styled.img`
	padding: 0 10px;
`;

const SearchDiv = styled.div`
	width: 100%;
	height: 32px;
	background-color: #f5f5f5;

	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 20px 0;
`;

const Input = styled.input`
	outline: none;
	border: none;
	width: 88%;
	height: 70%;
	background-color: #f5f5f5;

	font-size: 10px;

	::placeholder {
		color: #cecece;
	}
`;

const ChatListContainer = styled.div``;

const Chat1 = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

const Profile = styled.img``;

const NameSpace = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const Name = styled.span`
	font-size: 16px;
`;

const RecentTime = styled.span`
	font-size: 10px;
	color: #c7c5c5;
	padding-top: 5px;
`;

const ChatInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;

	padding: 7px 0 0 14px;
	cursor: pointer;
`;

const Message = styled.p`
	font-size: 12px;
	color: #5b5454;
	padding: 7px 0 0 0;
`;

const NotCount = styled.div`
	width: 20px;
	height: 14px;
	background-color: #54c269;
	display: flex;
	justify-content: center;
	align-content: center;
	margin-top: 5px;

	border-radius: 10px;

	font-size: 10px;
	color: #fff;
	padding-top: 2px;
`;
