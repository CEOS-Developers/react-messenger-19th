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
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditClick = () => {
    // 편집 버튼 핸들러..
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId); // 사용자 클릭시 selectedUserId 상태 업데이트
  };

  useEffect(() => {
    setFriendCount(users.filter(user => user.id !== 0).length); // 자기 자신을 뺀 친구 수
  }, [users]);

  const filteredUsers = users.filter(user => user.id !== 0 &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <Container>
      <AppContainer>
        <IphoneHeader src='/assets/Status Bar.png'/>
        <FriendListHeader 
          onEditClick={handleEditClick} 
          onSearchChange={handleSearchChange} 
          searchTerm={searchTerm}
        />
        <FriendListContainer>
          <FriendListUl>
          <FriendCount>친구 {friendCount}명</FriendCount>

          {filteredUsers.length > 0 ? filteredUsers.map(user => (
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
                )) : (
                  <NoResultsContainer>
                <NoResults>{`'${searchTerm}'에 대한 결과 없음`}</NoResults>
                <NoResults2>맞춤법을 확인하거나 새로운 검색을 시도하십시오.</NoResults2>
              </NoResultsContainer>
            )}
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



const NoResults = styled.div`
max-width:292px;
text-align: center;
margin-top: 20px;
font-size: 19px;
color: #1F1F1F;
font-weight: 600;
`;
const NoResults2 = styled.div`
max-width:292px;
text-align: center;
font-size: 16px;
font-weight: 500;
color: #8D949E;
margin-top: 8px;
`;
const MagnifyingGlass=styled.img`
width:40px;
height:40px;
`;
const NoResultsContainer = styled.div`
display:flex;
width:100%;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
margin-top: 164px;
`;
