import styled from 'styled-components';

export default function ChatList(): JSX.Element {
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
				<Chat>
					<Profile src="/icon/ChatProfile.svg" />
					<ChatInfo>
						<NameSpace>
							<Name>김동혁</Name>
							<RecentTime>오후 11:11</RecentTime>
						</NameSpace>
						<NameSpace>
							<Message>123123123123</Message>
							<NotCount>2</NotCount>
						</NameSpace>
					</ChatInfo>
				</Chat>
			</ChatListContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	padding: 40px 30px 20px 30px;
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

const Chat = styled.div`
	display: flex;
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
