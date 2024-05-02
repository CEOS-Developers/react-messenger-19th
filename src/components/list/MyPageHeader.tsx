import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { usersState } from '../state/userState';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [users] = useRecoilState(usersState);

  const userProfile = users.find(user => user.id === 0);

  const handleBackButtonClick = () => {
    navigate(-1); // 뒤로가기 로직
  };

  return (
    <HeaderContainer>
      <TopBar>
        <BackButton src='/assets/back.png' alt='Back' onClick={handleBackButtonClick} />
        <ProfileLabel>프로필</ProfileLabel>
      </TopBar>
      
      {userProfile && (
        <UserProfileSection>
          <ProfileImg src={userProfile.profileImage} alt="Profile" />
          <ProfileLabel>{userProfile.name}</ProfileLabel>
          <PhoneNumber>{userProfile.phoneNumber}</PhoneNumber>
        </UserProfileSection>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #F7F8FC;

  @media (max-width: 768px) {
    background-color: #ffffff;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const UserProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const ProfileLabel = styled.span`
  font-size: 17px;
  color: #1F1F1F;
  font-weight: 600;
  margin-left: 136.5px; 
`;

const BackButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  width: 8.5px;
  height: 17px;
  transition: transform 0.1s ease;
  margin-left: 16px;
  &:active {
    transform: scale(0.9);
  }
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PhoneNumber = styled.span`
  font-size: 14px;
  color: #6E7582;
`;

export default Header;
