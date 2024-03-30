import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Message, User } from "types/ChatData";
import { formatDateToTime } from "util/formatDateToTime";

interface ChatListProps {
  messages: Message[];
  me: User;
}
function ChatList({ messages, me }: ChatListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 스크롤을 맨 아래로 이동시키는 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 메시지 목록이 업데이트될 때마다 scrollToBottom 함수를 호출
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // messages가 변경될 때마다 useEffect 내부의 코드 실행

  return (
    <ChatListWrapper>
      {messages.map((message) => (
        <ChatWrapper $isMyMessage={message.senderId === me.id} key={message.id}>
          <div className="time_wrapper">
            <SentTime>{formatDateToTime(message.createdAt)} </SentTime>
          </div>
          <ChatText $isMyMessage={message.senderId === me.id}>
            {message.text}
          </ChatText>
        </ChatWrapper>
      ))}
      <div ref={messagesEndRef}></div>
    </ChatListWrapper>
  );
}

export default ChatList;

const ChatListWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  padding: 2.5rem 0;
  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const ChatWrapper = styled.div<{ $isMyMessage: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  flex-direction: ${({ $isMyMessage }) =>
    $isMyMessage ? "row" : "row-reverse"};
  .time_wrapper {
    display: flex;
  }
`;

const SentTime = styled.p`
  display: flex;
  align-items: flex-end;
  color: var(--gray04);
  font-size: 1rem;
  letter-spacing: 0.01rem;
`;

const ChatText = styled.p<{ $isMyMessage: boolean }>`
  max-width: 20rem;
  padding: 0.7rem 1.5rem;
  color: var(--black);
  word-wrap: break-word;
  white-space: pre-wrap;
  font-feature-settings:
    "clig" off,
    "liga" off;

  border-radius: 1.8rem 1.8rem 1.75rem 0rem;
  border: 1px solid var(--blue03);
  background: var(--white);

  ${({ $isMyMessage }) =>
    $isMyMessage &&
    `
    border-radius: 1.8rem 1.8rem 0rem 1.75rem;
    background: var(--blue03);
    
  `}

  font-size: 1.7rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
`;
