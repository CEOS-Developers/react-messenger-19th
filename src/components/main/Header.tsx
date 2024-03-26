import React from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import { selectedFriendState } from '../state/selectedFriendState';
import { friends } from '../fakedata/friends';

interface HeaderProps {
  onBackButtonClick: () => void;
  profilePic: string;
  name: string;
  onCallButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackButtonClick, profilePic, name, onCallButtonClick }) => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(selectedFriendState);

  const toggleFriend = () => {

    // 우선은 가짜데이터에서 첫 두 명만 토글
    // 현태 선택된 사람이 인덱스 0 이면 1로 토글, 인덱스 1이면 0으로 토글
    const newSelectedFriend = selectedFriend.id === friends[0].id ? friends[1] : friends[0];
    setSelectedFriend(newSelectedFriend);
  };

    return (
        <HeaderContainer>
            <LeftContainer>
                <BackButton src='./assets/back.png' alt='Back' onClick={onBackButtonClick}/>
                <ProfileContainer onClick={toggleFriend}>
                    <ProfilePic src={selectedFriend.profileImage} alt="Profile" />
                    <Name>{selectedFriend.name}</Name>
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