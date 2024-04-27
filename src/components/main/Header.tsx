import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { selectedUserState } from '../state/selectedUserState';
import { usersState } from '../state/userState';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = useRecoilState(selectedUserState);
  const [users] = useRecoilState(usersState);

  const selectedUser = users.find(user => user.id === selectedUserId) ?? users[0];

  const handleBackButtonClick = () => {
    navigate(-1); // 뒤로가기 로직
  };

  const handleCallButtonClick = () => {
    console.log('Call button clicked'); // 전화 걸기 로직
  };



  const toggleUser = () => {
    // 1번이랑 2번만 토글,,
    const newSelectedUserId = selectedUserId === 1 ? 2 : 1;
    setSelectedUserId(newSelectedUserId);
  };


    return (
      <HeaderContainer>
        <LeftContainer>
          <BackButton src='/assets/back.png' alt='Back' onClick={handleBackButtonClick}/>
          <ProfileContainer onClick={toggleUser}>
            <ProfilePic src={selectedUser.profileImage} alt="Profile" />
            <Name>{selectedUser.name}</Name>
          </ProfileContainer>
        </LeftContainer>
        <CallButton src='/assets/Call.png' alt='Call' onClick={handleCallButtonClick}/>
      </HeaderContainer>
    );
  };
  

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #F7F8FC;
  color: white;
  
  width: 100%;
  max-height: 54px;

  @media (max-width: 768px) {
    background-color: #ffffff;
  }

`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px
`;

const BackButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;

  width: 8.5px; 
  height: 17px; 
  margin-left: 16px;
  margin-right: 33.5px;
  margin-top: 6px;

  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfilePic = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 13px;
  margin-top: 6px;
`;

const Name = styled.h2`
  font-size: 20px;
  color: #1F1F1F;
  font-weight: 600;
  margin-top: 6px;
`;

const CallButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 25px;
  margin-bottom: 11px

  transition: transform 0.1s ease; 

  &:active {
    transform: scale(0.9);
  }
`;

export default Header;