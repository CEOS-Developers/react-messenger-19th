import React, { useState } from 'react';
import Header from './Header'; 
import styled from 'styled-components';

const ChatApp: React.FC = () => {
  const [userName] = useState('박사랑');

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
        profilePic='./assets/profile.png'
        name={userName}
        onCallButtonClick={handleCallButtonClick}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
    background-color: #E3E4EB;
    min-height: 100vh;
`;

export default ChatApp;
