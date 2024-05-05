import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { setReplyMessage, toggleReplyWindow } from 'store/reply';
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

  const dispatch: AppDispatch = useDispatch();

  const selectReplyMessage = (message: Message) => {
    dispatch(toggleReplyWindow());
    dispatch(setReplyMessage(message));
  };

  // 메시지 목록이 업데이트될 때마다 scrollToBottom 함수를 호출
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // messages가 변경될 때마다 useEffect 내부의 코드 실행

  return (
    <ChatListWrapper>
      {messages?.map((message, idx) => {
        // 다음 메시지와 현재 메시지의 시간 비교
        const isSameTime =
          idx < messages.length - 1 &&
          formatDateToTime(message.createdAt) === formatDateToTime(messages[idx + 1]?.createdAt);

        return (
          <ChatWrapper
            onClick={() => selectReplyMessage(message)}
            $isMyMessage={message.senderId === me.id}
            key={message.id}
          >
            <div className="time_wrapper">
              {/* 이전 메세지와 현재 메세제의 시간이 같으면 이전 메세지의 시간을 보여주지 않음*/}
              {!isSameTime && <SentTime>{formatDateToTime(message.createdAt)}</SentTime>}
            </div>
            {message.photo ? (
              <ChatPhoto as="div" $isMyMessage={message.senderId === me.id}>
                <img src={message.photo?.url} alt="Attached photograph" />
                <div className="file_info">
                  <p className="file_name">{message.photo.name}</p>
                  <p className="file_size">{getByteSize(message.photo.size)}</p>
                </div>
              </ChatPhoto>
            ) : (
              <>
                <ChatText $isMyMessage={message.senderId === me.id}>
                  {message.replyTo && (
                    <ReplyTargetInfo>
                      <div className="reply-indicator" />
                      <div className="reply-info">
                        <p className="reply-name">{messages[+message.replyTo - 1].senderId}</p>
                        <p className="reply-message">{messages[+message.replyTo - 1].text}</p>
                      </div>
                    </ReplyTargetInfo>
                  )}
                  {message.text}
                </ChatText>
              </>
            )}
          </ChatWrapper>
        );
      })}
      <div ref={messagesEndRef}></div>
    </ChatListWrapper>
  );
}

export default ChatList;

const ChatListWrapper = styled.div`
  display: flex;
  height: 66rem;
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

const ReplyTargetInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  .reply-indicator {
    width: 0.2rem;
    height: 4rem;
    background-color: var(--blue01);
  }

  .reply-name {
    color: var(--blue01, #3478f6);
    font-size: 1.4rem;
  }

  .reply-message {
    overflow: hidden;
    color: var(--black);
    font-size: 1.4rem;
  }

  .reply-info {
    gap: 0rem;
  }
`;
const ChatText = styled.div<{ $isMyMessage: boolean }>`
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
