import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { User } from '../../types/type';
import Chat from '../Chats/Chat';

const ChatsListPageContainer = styled.div`
  width: 23.4375rem;
  height: 40.06rem;
  background: #fff;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer/Edge
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari
  }
`;

const TitleContainer = styled.div`
  width: 21.4375rem;
  height: 1.25rem;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.div`
  color: #1bd742;
  font-family: 'SF Pro Text';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export default function ChatsList() {
  const chattings = useSelector((state: RootState) => state.chat.chattings);
  const userList = useSelector((state: RootState) => state.user.userList);

  return (
    <ChatsListPageContainer>
      <TitleContainer>
        <TitleText>Broadcast Lists</TitleText>
        <TitleText>New Group</TitleText>
      </TitleContainer>

      {chattings.map((chatRoom) => {
        // 현재 채팅방에서 현재 사용자를 제외한 상대방의 정보를 찾습니다.
        const partner =
          userList.find(
            (user) => chatRoom.userList.includes(user.id) && user.id !== 0
          ) ?? null;

        // 각 채팅방에 대한 상대방의 프로필을 출력합니다.
        return (
          <Chat
            key={chatRoom.chatRoomId}
            name={partner ? partner.name : 'Unknown'}
            profileImg={partner ? partner.profileImg : 'defaultProfileImg.jpg'}
            isActive={partner ? partner.isActive : false}
          />
        );
      })}
    </ChatsListPageContainer>
  );
}
