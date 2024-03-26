import React, { useState } from 'react';
import Header from './Header'; 
import styled from 'styled-components';
import { friends } from '../fakedata/friends';
import UserProfile from '../chat/UserProfile';
import ChatInput from '../chat/ChatInput';
import ChatMessages from '../chat/ChatMessages'; // 메시지 목록 컴포넌트 import
import { useRecoilState } from 'recoil';
import { messagesState } from '../state/messageState'; 
import IphoneHeader from './IphoneHeader';
import IphoneFooter from './IphoneFooter';

const ChatApp: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState(friends[0]); //나중에,, 친구 목록 구현하면 수정하기
  const [messages, setMessages] = useRecoilState(messagesState); // 메시지 상태 조회

  const handleBackButtonClick = () => {
    console.log('Back button clicked');
  };

  const handleCallButtonClick = () => {
    console.log('Call button clicked');
  };

  return (
    <Container>
    <AppContainer>
    <IphoneHeader src='./assets/Status Bar.png'/>
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
        <ChatInput />
        <IphoneFooter src='./assets/Home Indicator.png'/>
    </AppContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh; 
  width: 100vw; 
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px; 
  max-height: 812px; 
  background-color: #FFFFFF; 
`;



export default ChatApp;