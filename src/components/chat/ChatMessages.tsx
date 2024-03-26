import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { messagesState, Message } from '../state/messageState';
import { selectedUserState } from '../state/selectedUserState';
import styled from 'styled-components';
import { motion } from 'framer-motion';



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
  const selectedUserId = useRecoilValue(selectedUserState);
  const messages = useRecoilValue(messagesState);

  const filteredMessages = messages.filter(
    message => message.senderId === selectedUserId || message.receiverId === selectedUserId
  );
  const groupedMessages = groupMessagesByDate(filteredMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }; //메세지 보냈을 때 스크롤 자동으로 맨 아래로 이동!!

  useEffect(() => {
    scrollToBottom();
  }, [messages]); 

  return (
    <MessagesContainer>
      {Object.entries(groupedMessages).map(([date, groupMessages], index) => (
        <React.Fragment key={index}>
          <DateLabel>{formatDate(date)}</DateLabel>
          {groupMessages.map((message) => (
           <MessageLayout key={message.id} isSender={message.senderId === selectedUserId}>
           {message.senderId === selectedUserId ? (
             // 발신자 레이아웃: 시간 -> 메시지 순서
             <>
               <Timestamp key={message.id} isSender={message.senderId === selectedUserId}>{new Date(message.timestamp).toLocaleTimeString('ko-KR', 
               { hour: 'numeric', minute: '2-digit', hour12: true }).replace('AM', '오전').replace('PM', '오후')}
               </Timestamp>
               <MessageItem 
                key={message.id}
                isSender={message.senderId === selectedUserId}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}>{message.text}
                </MessageItem>
             </>
           ) : (
             // 수신자 레이아웃: 메시지 -> 시간
             <>
               <MessageItem 
                key={message.id}
                isSender={false}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >{message.text}
              </MessageItem>
               <Timestamp key={message.id} isSender={message.senderId === selectedUserId}>{new Date(message.timestamp).toLocaleTimeString('ko-KR', 
               { hour: 'numeric', minute: '2-digit', hour12: true }).replace('AM', '오전').replace('PM', '오후')}
               </Timestamp>
             </>
           )}
         </MessageLayout>
          ))}
        </React.Fragment>
      ))}
       <div ref={messagesEndRef} />
    </MessagesContainer>
  );
};


const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  height: 646px;

  background-color: #E3E4EB;

  overflow-y: auto;
  `;

  const MessageLayout = styled.div<{ isSender: boolean }>`
  display: flex;
  flex-direction: row;

  align-self: ${({ isSender }) => isSender ? 'flex-end' : 'flex-start'}; //발신메세지 오른쪽, 수신메세지 왼쪽
  margin: ${({ isSender }) => isSender ? `0 15px 0 0` : `0 0 0 15px`};
  background-color: transparent;
  margin-bottom: 12px;
  max-width: 80%;
  word-break: break-word;
`;

const MessageItem = styled(motion.div)<{ isSender: boolean }>`
  background-color: ${({ isSender }) => isSender ? '#DCF8C6' : '#F0F0F0'};
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 15px;
  color: #262626;
  word-break: break-word;
`;

const Timestamp = styled.div<{ isSender: boolean }>`
  font-size: 13px;
  color: #63666A;
  white-space: nowrap;
  align-self: flex-end; 
  margin: ${({ isSender }) => isSender ? `0 8px 0 0` : `0 0 0 8px`};
`;

const DateLabel = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 22px;
  margin-bottom: 16px;
  font-size: 15px;
  color: #63666A;
`;

export default ChatMessages;