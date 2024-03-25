import React from 'react';
import { useRecoilValue } from 'recoil';
import { messageState } from '../state/messageState';
import styled from 'styled-components';

const ChatMessages: React.FC = () => {
  const messages = useRecoilValue(messageState);

  return (
    <MessagesContainer>
      {messages.map((message) => (
        <MessageContainer key={message.id}>
          <Timestamp>
            {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}
          </Timestamp>
          <MessageItem>{message.text}</MessageItem>
        </MessageContainer>
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


export default ChatMessages;
