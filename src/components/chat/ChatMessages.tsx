import React from 'react';
import { useRecoilValue } from 'recoil';
import { messageState, Message } from '../state/messageState';
import styled from 'styled-components';

// 날짜별로 메세지 그룹화하기!!
const groupMessagesByDate = (messages: Message[]) => {
  const grouped: { [key: string]: Message[] } = {};
  messages.forEach((message) => {
    const dateKey = new Date(message.timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(message);
  });
  return grouped;
};

//날짜 형식에 맞게 포맷팅하기 (오전 12:02 이렇게)
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', weekday: 'short' };
  return date.toLocaleDateString('ko-KR', options);
};

const ChatMessages: React.FC = () => {
  const messages = useRecoilValue<Message[]>(messageState);
  const groupedMessages = groupMessagesByDate(messages);
 
  return (
    <MessagesContainer>
      {Object.entries(groupedMessages).map(([date, groupMessages], index) => (
        <React.Fragment key={index}>
          <DateLabel>{formatDate(date)}</DateLabel>
          {groupMessages.map((message) => (
            <MessageContainer key={message.id}>
              <Timestamp>
                {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                }).replace('AM', '오전').replace('PM', '오후')} {/* 시간 형식 조정 */}
              </Timestamp>
              <MessageItem>{message.text}</MessageItem>
            </MessageContainer>
          ))}
        </React.Fragment>
      ))}
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%; 
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end; 
  width: fit-content; 
  max-width: 80%;
  margin-top: 12px;
  margin-right: 15px;
`;

const MessageItem = styled.div`
  background-color: #E2FFD4;
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 15px;
  color: #262626;
`;

const Timestamp = styled.div`
  font-size: 13px;
  color: #63666A;
  white-space: nowrap;
  align-self: flex-end; 
  margin-right: 8px;
`;

const DateLabel = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 22px;
  matgin-bottom: 4px;
  font-size: 15px;
  color: #63666A;
`;

export default ChatMessages;
