import React, { useEffect, useState } from 'react';
import Header from './Header'; 
import styled from 'styled-components';
import UserProfile from '../chat/UserProfile';
import ChatInput from '../chat/ChatInput';
import ChatMessages from '../chat/ChatMessages'; 
import { useRecoilValue } from 'recoil';
import { messagesState } from '../state/messageState'; 
import IphoneHeader from './IphoneHeader';
import IphoneFooter from './IphoneFooter';
import { usersState } from '../state/userState';
import {selectedUserState} from '../state/selectedUserState'

const ChatApp = () => {
  const messages = useRecoilValue(messagesState); 
  const users = useRecoilValue(usersState);
  const selectedUserId = useRecoilValue(selectedUserState);
  const [selectedFriend, setSelectedFriend] = useState({profileImage: '', name: '', phoneNumber: ''}); // Default empty values to avoid null errors

  useEffect(() => {
    const user = users.find(user => user.id === selectedUserId);
    if (user) {
      setSelectedFriend(user);
    } else {
      setSelectedFriend({profileImage: '', name: '', phoneNumber: ''});
    }
  }, [selectedUserId, users]);

  const friendMessages = messages.filter(message => //대화내용 잇는애들만 필터링
    message.senderId === selectedUserId || message.receiverId === selectedUserId
  );
  return (
    <Container>
    <AppContainer>
    <IphoneHeader src='/assets/Status Bar.svg' backgroundColor='#F7F8FC'/>
      <Header/>
      {friendMessages.length > 0 ? ( // 조건부 렌더링: 이전에 나눈 대화가 있으면 ChatMessages 보여줌
        <ChatMessages />
      ) : ( // 이전에 나눈 대화 없으면 UserProfile 보여줌 (기본)
      <UserProfileContainer>
        <UserProfile
          profileImage={selectedFriend.profileImage}
          name={selectedFriend.name}
          phoneNumber={selectedFriend.phoneNumber}
        />
      </UserProfileContainer>

      )}
        <ChatInput />
        <IphoneFooter src='/assets/Home Indicator.png'/>
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
  width: 100vw; 
  height: 100vh; 
  margin: 0 auto;
  background-color: #FFFFFF; 


  @media (min-width: 768px) {  //데스크탑 뷰에서는 375*812 고정
    max-width: 375px;
    max-height: 812px;
    min-height: 812px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;


const UserProfileContainer = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  background-color: #E3E4EB;
`;


export default ChatApp;