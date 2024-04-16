import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Chat from '../Chats/Chat';

const ChatsListPageContainer = styled.div`
  width: 23.4375rem;
  height: 40.06rem;
  background: #fff;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer/Edge
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari
  }
`;

const TitleContainer = styled.div`
  width: 21.4375rem;
  height: 1.25rem;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.div`
  color: #1bd742;
  font-family: 'SF Pro Text';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export default function ChatsList() {
  const navigate = useNavigate();
  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const userList = useSelector((state: RootState) => state.user.userList);
  const chattings = useSelector((state: RootState) => state.chat.chattings);

  // 채팅방 클릭 핸들러 함수
  const handleChatClick = (chatRoomId: number) => {
    navigate(`/chatroom/${chatRoomId}`); // `/chatroom/{id}` 경로로 이동
  };

  return (
    <ChatsListPageContainer>
      <TitleContainer>
        <TitleText>Broadcast Lists</TitleText>
        <TitleText>New Group</TitleText>
      </TitleContainer>

      {chattings.map((chatRoom) => {
        // 현재 채팅방에서 현재 사용자를 제외한 상대방의 정보를 찾기
        const partner =
          userList.find(
            (user) => chatRoom.userList.includes(user.id) && user.id !== nowUser
          ) ?? null;

        // 마지막 채팅 정보를 추출
        const lastChat =
          chatRoom.chatList[chatRoom.chatList.length - 1] || null;

        // 각 채팅방에 대한 상대방의 프로필을 출력
        return (
          <div onClick={() => handleChatClick(chatRoom.chatRoomId)}>
            <Chat
              key={chatRoom.chatRoomId}
              name={partner ? partner.name : ''}
              profileImg={partner ? partner.profileImg : ''}
              lastChatContent={lastChat ? lastChat.content : 'No messages yet'}
              lastChatTime={lastChat ? lastChat.time : ''}
              $isRead={lastChat ? lastChat.isRead : false}
            />
          </div>
        );
      })}
    </ChatsListPageContainer>
  );
}
