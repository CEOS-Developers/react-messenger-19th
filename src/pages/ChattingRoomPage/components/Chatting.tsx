import { currentChatRoomIdState } from '@recoil/chatAtom';
import { UserState } from '@recoil/userAtom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

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
      (idx === 0 || chat.from !== chattingData?.chat[idx - 1].from) &&
      chat.from !== userName
    ) {
      return <div key={idx}>교체 {chat.content}</div>;
    } else if (idx === 0) {
      return <div key={idx}>{chat.content}</div>;
    } else if (chat.from === chattingData?.chat[idx - 1].from) {
      return <div key={idx}>{chat.content}</div>;
    } else {
      return <div key={idx}>{chat.content}</div>;
    }
  };
  return (
    <div>
      {chattingData &&
        chattingData?.chat.map((chat, idx) => showMessage(chat, idx))}
    </div>
  );
}
