import { currentChatRoomIdState } from '@recoil/chatAtom';
import { UserState } from '@recoil/userAtom';
import theme from '@styles/theme';
import { Fragment, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Mychat from './Mychat';
import OppoChangeChat from './OppoChangeChat';
import Oppochat from './OppoChat';

interface Chat {
  chatId: string;
  to: string;
  from: string;
  content: string;
  date: string;
  time: string;
  isDisplay: boolean;
  isRead: boolean;
}

//이번 과제는 한 명뿐이라 채팅방은 1개
const DUMMYID = '1';

export default function Chatting() {
  //이름 클릭시 반전을 위한 더미상태
  const userName = useRecoilValue(UserState);
  const chattingData = useRecoilValue(currentChatRoomIdState(DUMMYID));
  const chatRef = useRef<HTMLDivElement>(null);

  //메시지 출력 함수: 상대일 경우 이미지와 이름 출력
  const showMessage = (chat: Chat, idx: number) => {
    let messageComponent = null;
    // 내가 보낸 메시지
    if (chat.from === userName) {
      messageComponent = (
        <Mychat
          key={idx}
          content={chat.content}
          isDisplay={chat.isDisplay}
          isRead={chat.isRead}
          time={chat.time}
        />
      );
    }
    // 내가 아니고 처음이거나 이전과 보낸 사람이 다르면 출력
    else if (
      idx === 0 ||
      chat.from !== chattingData?.chat[idx - 1].from ||
      chat.date !== chattingData?.chat[idx - 1].date
    ) {
      messageComponent = (
        <OppoChangeChat
          key={idx}
          content={chat.content}
          isDisplay={chat.isDisplay}
          time={chat.time}
          from={chat.from}
        />
      );
    }
    // 상대방이 보낸 메세지
    else {
      messageComponent = (
        <Oppochat
          key={idx}
          content={chat.content}
          isDisplay={chat.isDisplay}
          time={chat.time}
        />
      );
    }
    // 이전과 날짜가 다르면 날짜 출력
    if (idx === 0 || chat.date !== chattingData?.chat[idx - 1].date) {
      const year = chat.date.slice(0, 4);
      const month = chat.date.slice(5, 7);
      const day = chat.date.slice(8, 10);
      return (
        <Fragment key={chat.date}>
          <DateContainer>
            {year}년 {month}월 {day}일
          </DateContainer>
          {messageComponent}
        </Fragment>
      );
    }
    return messageComponent;
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  });

  return (
    <ChatWrapper ref={chatRef}>
      <SpaceBox1 />
      {chattingData &&
        chattingData?.chat.map((chat, idx) => showMessage(chat, idx))}
      <SpaceBox2 />
    </ChatWrapper>
  );
}

const DateContainer = styled.div`
  align-self: center;
  margin: 10px 0;
  color: ${theme.colors.gray_1};
  font-size: ${theme.textStyles.caption4.font_size};
  line-height: ${theme.textStyles.caption4.line_height};
  font-weight: ${theme.textStyles.caption4.font_weight};
  font-family: 'Pretendard'
  text-align: center;
  &::before {
    display: inline-block;
    width: calc(40% - 25px);
    height: 1px;
    margin: 8px 10px 8px 0;
    background-color: ${theme.colors.gray_2};
    vertical-align: top;
    content: '';
  }

  &::after {
    display: inline-block;
    width: calc(40% - 25px);
    height: 1px;
    margin: 8px 0 8px 10px;
    background-color: ${theme.colors.gray_2};
    vertical-align: top;
    content: '';
  }
`;

const SpaceBox1 = styled.div`
  height: 85px;
`;

const SpaceBox2 = styled.div`
  height: 12px;
`;

const ChatWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 375px;
  height: 100%;
  padding: 0 16px;
  margin-bottom: 46px;
  background-color: ${theme.colors.blue};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
