import styled from 'styled-components';
import ChatBubble from './ChatBubble';
import initialChatData from '../../assets/data/initialChatData.json';

const ChattingRoomContainer = styled.div`
  width: 23.4375rem;
  height: 40.37rem;
  flex-direction: column;
  overflow-y: auto;
`;

export default function ChattingRoom() {
  const chatList = initialChatData.chattings[0].chatList;

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
