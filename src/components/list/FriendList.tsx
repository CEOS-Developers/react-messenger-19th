import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { usersState } from '../state/userState';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IphoneHeader from '../main/IphoneHeader';
import IphoneFooter from '../main/IphoneFooter';
import NavigatingFooter from './NavigateFooter';
import FriendListHeader from './FriendListHeader';
import { selectedUserState } from '../state/selectedUserState';
import { messagesState } from '../state/messageState'; 

const FriendList = () => {
  const users = useRecoilValue(usersState);
  const [selectedUserId, setSelectedUserId] = useRecoilState(selectedUserState); 
  const messages = useRecoilValue(messagesState);
  const [friendCount, setFriendCount] = useState(0); 

  const handleEditClick = () => {
    // 편집 버튼 핸들러..
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 검색핸들러
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId); // 사용자 클릭시 selectedUserId 상태 업데이트
  };

  useEffect(() => {
    setFriendCount(users.filter(user => user.id !== 0).length); // 자기 자신을 뺀 친구 수
  }, [users]);

  
  return (
    <Container>
      <AppContainer>
        <IphoneHeader src='/assets/Status Bar.png'/>
        <FriendListHeader 
          onEditClick={handleEditClick} 
          onSearchChange={handleSearchChange} 
        />
        <FriendListContainer>
          <FriendListUl>
          <FriendCount>친구 {friendCount}명</FriendCount>

          {users.filter(user => user.id !== 0).map(user => {
              return (
                <Link 
                  to={`/chat/${user.id}`} 
                  key={user.id} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => handleUserClick(user.id)}
                >
                  <FriendListItem>
                    <FriendImage src={user.profileImage} alt={user.name} style={{width:"37px", height:"37px"}}/>
                    <FriendInfo>
                        <FriendName>{user.name}</FriendName>  
                        <CallIcon src="/assets/Call (1).svg"/>   
                    </FriendInfo>
                  </FriendListItem>
                </Link>
              );
            })}
          </FriendListUl>
        </FriendListContainer>
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

const FriendListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const FriendListUl = styled.ul`
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
font-family: pretendard;
  margin: 6px 0px 6px 11px;
  width:280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const FriendName = styled.div`
font-size: 17px;
  font-weight: 600;
`;

const CallIcon = styled.img`
`;

const FriendCount = styled.div`
  font-family: Pretanard;
  font-size: 15px;
  margin-left: 15px;
  margin-bottom: 2px;
  color: #63666A;
`;