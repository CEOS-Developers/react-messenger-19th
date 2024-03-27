import { currentChatRoomIdState } from '@recoil/chatAtom';
import { UserState } from '@recoil/userAtom';
import theme from '@styles/theme';
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

  //메시지 출력 함수: 상대일 경우 이미지와 이름 출력
  const showMessage = (chat: Chat, idx: number) => {
    if (
      //내가 아니고 처음이거나 이전과 보낸사람이 다르면 출력
      (idx === 0 || chat.from !== chattingData?.chat[idx - 1].from) &&
      chat.from !== userName
    ) {
      return (
        <OppoChangeChat
          key={idx}
          content={chat.content}
          isDisplay={chat.isDisplay}
          time={chat.time}
          from={chat.from}
        />
      );
    } else if (chat.from === userName) {
      //내가 보낸 메시지
      return (
        <Mychat
          key={idx}
          content={chat.content}
          isDisplay={chat.isDisplay}
          isRead={chat.isRead}
          time={chat.time}
        />
      );
    } else {
      //상대방이 보낸 메세지
      return (
        <Oppochat
          key={idx}
          content={chat.content}
          isDisplay={chat.isDisplay}
          time={chat.time}
        />
      );
    }
  };
  return (
    <ChatWrapper>
      <SpaceBox />
      {chattingData &&
        chattingData?.chat.map((chat, idx) => showMessage(chat, idx))}
    </ChatWrapper>
  );
}

const SpaceBox = styled.div`
  height: 85px;
`;

const ChatWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 375px;
  height: 100vh;
  padding: 0 16px;
  background-color: ${theme.colors.blue};
`;
