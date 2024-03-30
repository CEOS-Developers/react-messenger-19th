import styled from "styled-components";
import { flexColumn } from "styles/CommonStyle";
import { useState } from "react";
import mockData from "data/chatData.json";
import { Chat } from "types/ChatData";
import ChatRoomHeader from "components/ChatRoom/ChatRoomHeader";
import ChatList from "components/ChatRoom/ChatList";
import ChatInput from "components/ChatRoom/ChatInput";

function ChatRoom() {
  // 대화창 하나만 구현하는 거니, 첫 번째 채팅방 데이터만 가져옴
  const [chatData, setChatData] = useState<Chat>(mockData.chats[0]);

  const { messages, users } = chatData;

  const [participants, setParticipants] = useState({
    me: users[0],
    partner: users[1],
  });

  const { me, partner } = participants;

  const toggleParticipants = () => {
    setParticipants((prev) => ({ me: prev.partner, partner: prev.me }));
  };

  return (
    <>
      <ChatRoomContainer>
        <ChatRoomHeader
          toggleParticipants={toggleParticipants}
          partner={partner}
        />
        <ChatList messages={messages} me={me} />
      </ChatRoomContainer>
      <ChatInput setChatData={setChatData} me={me} />
    </>
  );
}

export default ChatRoom;

const ChatRoomContainer = styled.div`
  height: 74rem;
  ${flexColumn}
  padding: 0 1.6rem;
`;
