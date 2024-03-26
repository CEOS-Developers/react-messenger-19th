import React from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import { selectedUserState } from '../state/selectedUserState';
import { usersState } from '../state/userState';

interface HeaderProps {
  onBackButtonClick: () => void;
  profilePic: string;
  name: string;
  onCallButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackButtonClick, onCallButtonClick }) => {
  const [selectedUserId, setSelectedUserId] = useRecoilState(selectedUserState);
  const [users] = useRecoilState(usersState);

  const selectedUser = users.find(user => user.id === selectedUserId) ?? users[0];

  const toggleUser = () => {
    // 1번이랑 2번만 토글,,
    const newSelectedUserId = selectedUserId === 1 ? 2 : 1;
    setSelectedUserId(newSelectedUserId);
  };


    return (
      <HeaderContainer>
        <LeftContainer>
          <BackButton src='./assets/back.png' alt='Back' onClick={onBackButtonClick}/>
          <ProfileContainer onClick={toggleUser}>
            <ProfilePic src={selectedUser.profileImage} alt="Profile" />
            <Name>{selectedUser.name}</Name>
          </ProfileContainer>
        </LeftContainer>
        <CallButton src='./assets/call.png' alt='Call' onClick={onCallButtonClick}/>
      </HeaderContainer>
    );
  };
  

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #F7F8FC;
  color: white;
  
  width: 375px;
  height: 53px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;

  width: 8.5px; 
  height: 17px; 
  margin-left: 16px;
  margin-right: 33.5px;
  
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const ProfilePic = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 13px;
`;

const Name = styled.h2`
  font-size: 20px;
  color: #1F1F1F;
  font-weight: 600;
`;

const CallButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 25px;
  
`;

export default Header;