import styled from 'styled-components';
import ChatBubble from './ChatBubble';
import initialChatData from '../../assets/data/initialChatData.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ChattingRoomContainer = styled.div`
  width: 23.4375rem;
  height: 40.37rem;
  flex-direction: column;
  overflow-y: auto;
`;

const TodayContainer = styled.div`
  display: inline-flex;
  padding: 0.1875rem 1rem;
  align-items: flex-start;
  border-radius: 0.375rem;
  background: #dbdfeb;
  position: absolute;
  top: 0.84rem;
  bottom: 0.84rem;
`;

const TodayText = styled.div`
  color: #414350;
  text-align: center;
  font-family: 'SF Pro Text';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default function ChattingRoom() {
  const chatList = useSelector(
    (state: RootState) => state.chat.chattings[0].chatList
  ); // Redux 스토어에서 채팅 데이터 상태를 가져옴

  return (
    <ChattingRoomContainer>
      {/* chatList가 Redux 스토어에서 가져온 데이터를 기반으로 반복 렌더링 */}
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
