import React from 'react';
import { useRecoilValue } from 'recoil';
import { usersState } from '../state/userState';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IphoneHeader from '../main/IphoneHeader';
import IphoneFooter from '../main/IphoneFooter';
import NavigatingFooter from './NavigateFooter';
import ChatListHeader from './ChatListHeader';

const FriendList = () => {
  const users = useRecoilValue(usersState);

  const handleEditClick = () => {
    // 편집 버튼 핸들러..
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 검색핸들러
  };
  return (
    <Container>
      <AppContainer>
        <IphoneHeader src='/assets/Status Bar.png'/>
        <ChatListHeader 
          onEditClick={handleEditClick} 
          onSearchChange={handleSearchChange} 
        />
        <ChatListContainer>
          <ChatListUl>
            {users.map(user => (
              <Link to={`/chat/${user.id}`} key={user.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <FriendListItem>
                  <FriendImage src={user.profileImage} alt={user.name} />
                  <FriendInfo>{user.name}</FriendInfo>
                </FriendListItem>
              </Link>
            ))}
          </ChatListUl>
        </ChatListContainer>
        <NavigatingFooter/>
        <IphoneFooter src='/assets/Home Indicator.png'/>
      </AppContainer>
    </Container>
  );
};
export default FriendList;

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
  background-color: #FFFFFF; 

  @media (min-width: 768px) { 
    max-width: 375px;
    max-height: 812px;
    min-height: 812px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ChatListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ChatListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const FriendListItem = styled.li`
  padding: 11px 15px;
  display: flex;
  margin-bottom: 4px;
`;

const FriendImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const FriendInfo = styled.span`
  margin: 6px 0px 6px 11px;
  font-size: 19px;
  font-weight: 600;
`;