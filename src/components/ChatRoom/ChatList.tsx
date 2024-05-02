import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexColumn } from 'styles/CommonStyle';
import { Message, User } from 'types/ChatData';
import { formatDateToTime } from 'util/formatDateToTime';
import { getByteSize } from 'util/getByteSize';
interface ChatListProps {
  messages: Message[] | null;
  me: User;
}
// 채팅 리스트

function ChatList({ messages, me }: ChatListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 스크롤을 맨 아래로 이동시키는 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 메시지 목록이 업데이트될 때마다 scrollToBottom 함수를 호출
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // messages가 변경될 때마다 useEffect 내부의 코드 실행

  return (
    <ChatListWrapper>
      {messages?.map((message) => (
        <ChatWrapper $isMyMessage={message.senderId === me.id} key={message.id}>
          <div className="time_wrapper">
            {/* 현재 시간 */}
            <SentTime>{formatDateToTime(message.createdAt)} </SentTime>
          </div>
          {/* 사진과 텍스트가 같이 있는 경우는 없음 -> 사진 속성이 존재하는 경우에는 사진을 존재하지 않는 경우에는 일반 텍스트 메세지를 보여줌 */}
          {/* isMyMessage라는 prop으로 보낸 사람과 me가 같은 사람인지 아닌지에 따라 스타일링을 다르게 해줌 */}
          {message.photo ? (
            <ChatPhoto as="div" $isMyMessage={message.senderId === me.id}>
              <img src={message.photo?.url} alt="Attached photograph" />
              <div className="file_info">
                <p className="file_name">{message.photo.name}</p>
                <p className="file_size">{getByteSize(message.photo.size)}</p>
              </div>
            </ChatPhoto>
          ) : (
            <ChatText $isMyMessage={message.senderId === me.id}>{message.text}</ChatText>
          )}
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
`;

const ChatWrapper = styled.div<{ $isMyMessage: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  flex-direction: ${({ $isMyMessage }) => ($isMyMessage ? 'row' : 'row-reverse')};
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
    'clig' off,
    'liga' off;

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
  cursor: pointer;
`;

const ChatPhoto = styled(ChatText)<{ $isMyMessage: boolean }>`
  max-width: fit-content;
  display: flex;
  gap: 1.7rem;
  padding: 0.65rem 1.3rem 0.65rem 0.65rem;

  ${({ $isMyMessage }) =>
    $isMyMessage &&
    `
    background-color: var(--blue02);
    p {
    color: var(--gray02);
  }

  `}

  .file_info {
    ${flexColumn}
    justify-content: center;
  }

  .file_name {
    font-size: 1.6rem;
    line-height: 2.1rem;
    letter-spacing: -0.03rem;
  }

  .file_size {
    font-size: 1.3rem;
    letter-spacing: -0.01rem;
  }

  img {
    width: 7.4rem;
    height: 7.4rem;
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;
