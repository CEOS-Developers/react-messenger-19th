import styled from 'styled-components';
import { flexColumn } from 'styles/CommonStyle';
import ChatRoomHeader from 'components/ChatRoom/ChatRoomHeader';
import ChatList from 'components/ChatRoom/ChatList';
import ChatInput from 'components/ChatRoom/ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { toggleParticipants } from 'store/chat';

function ChatRoom() {
  const chatData = useSelector((state: RootState) => state.chat);

  const { me, partner } = chatData.participants;
  const messages = chatData.selectedChats;

  const dispatch: AppDispatch = useDispatch();

  const toggleParticipant = () => {
    dispatch(toggleParticipants());
  };

  if (!partner) return null;

  return (
    <>
      <ChatRoomContainer>
        <ChatRoomHeader toggleParticipants={toggleParticipant} partner={partner} />
        <ChatList messages={messages} me={me} />
      </ChatRoomContainer>
      <ChatInput me={me} />
    </>
  );
}

export default ChatRoom;

const ChatRoomContainer = styled.div`
  /* height: 74rem; */
  ${flexColumn}
  padding: 0 1.6rem;
`;
