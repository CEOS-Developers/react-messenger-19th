import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';
import styled from 'styled-components';

const ChatListContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  
`;

const ChatItem = styled(Link)`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background-color: #fffff;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  white-space: pre-line;
  /*background-image: url('/path/to/background-image.jpg');*/
  display: flex;
  align-items: center;
  

  &:hover {
    background-color: #fffff;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ChatDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  
`;

const LastMessage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  color: grey;
`;

const MessageTime = styled.span`
  font-size: 12px;
  color: darkgray;
  margin-left: auto;
  margin-right: 5px;
`;

const SearchInput = styled.input`
  background-image: url('/item/searchbar.png');
  background-repeat: no-repeat;
  width: 260px;
  height: 21px;
  padding: 10px 43px;
  margin-bottom: 0px;
  margin-left: 5px;
  border: none;
`;

const getLastMessageAndTime = (userId: string) => {
  const messagesString = localStorage.getItem(`messages_${userId}`);
  if (messagesString) {
    const messages = JSON.parse(messagesString);
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const messageTime = new Date(lastMessage.date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      return { content: lastMessage.content, time: messageTime };
    }
  }
  return { content: '대화를 시작하지 않았습니다.', time: '' };
};

const ChattingList = () => {
  const userList = useRecoilValue(userListState);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = userList
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(1); // 첫 번째 유저를 제외하고 필터링

  return (
    <>
      <SearchInput
        type='text'
        placeholder=''
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ChatListContainer>
        {filteredUsers.map((user) => (
          <ChatItem key={user.id} to={`/chattingroom/${user.id}`}>
            <ProfileImage
              src={user.image || '/default-profile.jpg'}
              alt={user.name}
            />
            <ChatDetails>
              <div>{user.name}</div>
              <LastMessage>
                {getLastMessageAndTime(user.id).content}
                <MessageTime>{getLastMessageAndTime(user.id).time}</MessageTime>
              </LastMessage>
            </ChatDetails>
          </ChatItem>
        ))}
      </ChatListContainer>
    </>
  );
};

export default ChattingList;
