import React, { useState } from 'react';
import Header from './Header'; 
import styled from 'styled-components';
import { friends } from '../fakedata/friends';
import UserProfile from '../chat/UserProfile';
import ChatInput from '../chat/ChatInput';
import ChatMessages from '../chat/ChatMessages'; // 메시지 목록 컴포넌트 import
import { useRecoilValue } from 'recoil';
import { messageState } from '../state/messageState'; 

const ChatApp: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState(friends[0]); //나중에,, 친구 목록 구현하면 수정하기
  const messages = useRecoilValue(messageState); // 메시지 상태 조회

  const handleBackButtonClick = () => {
    console.log('Back button clicked');
  };

  const handleCallButtonClick = () => {
    console.log('Call button clicked');
  };

  return (
    <AppContainer>
      <Header
        onBackButtonClick={handleBackButtonClick}
        profilePic={selectedFriend.profileImage}
        name={selectedFriend.name}
        onCallButtonClick={handleCallButtonClick}
      />
      {messages.length > 0 ? ( // 조건부 렌더링: 이전에 나눈 대화가 있으면 ChatMessages 컴포넌트를 보여줌
        <ChatMessages />
      ) : ( // 이전에 나눈 대화 없으면 UserProfile 컴포넌트를 보여줌 (기본)
        <UserProfile
          profileImage={selectedFriend.profileImage}
          name={selectedFriend.name}
          phoneNumber={selectedFriend.phoneNumber}
        />
      )}
      <ChatInputWrapper>
        <ChatInput />
      </ChatInputWrapper>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background-color: #E3E4EB;
  min-height: 100vh;
  padding-top: 60px; //헤더랑 푸터 높이만큼 패딩줘서 body 살리기
  padding-bottom: 60px; 
  box-sizing: border-box;
`;
const ChatInputWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100; 
`;

export default ChatApp;
