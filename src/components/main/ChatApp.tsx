import React, { useState } from 'react';
import Header from './Header'; 
import styled from 'styled-components';
import { friends }from '../fakedata/friends';
import UserProfile from '../chat/UserProfile';


const ChatApp: React.FC = () => {

  // 목록에서 누른 친구 상태 관리
  // 초기값: 박사랑
  const [selectedFriend, setSelectedFriend] = useState(friends[0]);

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
       <UserProfile
        profileImage={selectedFriend.profileImage}
        name={selectedFriend.name}
        phoneNumber={selectedFriend.phoneNumber}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
    background-color: #E3E4EB;
    min-height: 100vh;
`;

export default ChatApp;
