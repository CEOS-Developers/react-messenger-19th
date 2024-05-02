import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { usersState } from '../state/userState';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IphoneHeader from '../main/IphoneHeader';
import IphoneFooter from '../main/IphoneFooter';
import NavigatingFooter from './NavigateFooter';
import ChatListHeader from './ChatListHeader';
import { selectedUserState } from '../state/selectedUserState'; // selectedUserId 상태 추가
import { messagesState } from '../state/messageState'; 

const ChatList = () => {
  const users = useRecoilValue(usersState);
  const [selectedUserId, setSelectedUserId] = useRecoilState(selectedUserState); // selectedUserId 상태 추가
  const messages = useRecoilValue(messagesState);
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

  const getLastMessage = (userId: number) => {
    const userMessages = messages.filter(
      message => message.senderId === userId || message.receiverId === userId
    );
    return userMessages[userMessages.length - 1]; // 가장 마지막 메시지 반환
  };

  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace('오전', 'AM').replace('오후', 'PM').replace('AM', '오전').replace('PM', '오후'); // 'AM'과 'PM'을 한국어 '오전', '오후'로 변경
  };
  
  const filteredUsers = users.filter(user => user.id !== 0 && (
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    messages.some(msg => (msg.senderId === user.id || msg.receiverId === user.id) && msg.text.toLowerCase().includes(searchTerm.toLowerCase()))
  ));

  return (
    <Container>
      <AppContainer>
        <IphoneHeader src='/assets/Status Bar.png'/>
        <ChatListHeader 
          onEditClick={handleEditClick} 
          onSearchChange={handleSearchChange} 
        />
        <ChatListContainer>
          {filteredUsers.length > 0 ? (
            <ChatListUl>
              {filteredUsers.map(user => {
                const lastMessage = getLastMessage(user.id);
                return (
                  <Link 
                    to={`/chat/${user.id}`} 
                    key={user.id} 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => handleUserClick(user.id)}
                  >
                    <FriendListItem>
                      <FriendImage src={user.profileImage} alt={user.name} />
                      <FriendInfo>
                        <NameTimeContainer>
                          <FriendName>{user.name}</FriendName>
                          <MessageTime>{lastMessage ? `${formatMessageTime(lastMessage.timestamp)}`: null}</MessageTime>
                        </NameTimeContainer>
                        <LastMessageText>{lastMessage ? lastMessage.text : "No messages"}</LastMessageText>
                      </FriendInfo>
                    </FriendListItem>
                  </Link>
                );
              })}
            </ChatListUl>
          ) : (
            <NoResultsContainer>
              <MagnifyingGlass src="/assets/Group 7.svg"/>
              <NoResults>{`'${searchTerm}'에 대한 결과 없음`}</NoResults>
              <NoResults2>맞춤법을 확인하거나 새로운 검색을 시도하십시오.</NoResults2>
            </NoResultsContainer>
          )}
        </ChatListContainer>
        <NavigatingFooter/>
        <IphoneFooter src='/assets/Home Indicator.png'/>
      </AppContainer>
    </Container>
  );
};

export default ChatList;
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
  display: flex;            
  justify-content: center;   
  align-items: center;      
  overflow-y: auto;          
  width: 100%;            
  position: relative;`;

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
font-family: pretendard;
  margin: 6px 0px 6px 11px;
  width:280px;
`;

const LastMessageText = styled.div`
  font-size: 15px;
  color: #8D949E;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 4px;
  `;
const FriendName = styled.div`
font-size: 19px;
  font-weight: 600;
`;
const MessageTime = styled.span`
  font-size: 14px;
  color: #8D949E;
`;
const NameTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  `

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
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
`;
