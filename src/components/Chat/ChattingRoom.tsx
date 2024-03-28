import styled from 'styled-components';
import ChatBubble from './ChatBubble';
import ChatData from '../../assets/data/chatData.json';

const ChattingRoomContainer = styled.div`
  width: 23.4375rem;
  height: 40.37rem;
  flex-direction: column;
  overflow-y: auto;
`;

export default function ChattingRoom() {
  const chatList = ChatData.chattings[0].chatList;
  return (
    <ChattingRoomContainer>
      {chatList.map((chat) => (
        <ChatBubble
          key={chat.id}
          isSentByMe={chat.senderId === 0}
          content={chat.content}
          time={chat.time}
          isRead={chat.isRead}
        />
      ))}
    </ChattingRoomContainer>
  );
}
