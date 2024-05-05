import styled from 'styled-components';

import { ReactComponent as EditIcon } from 'asset/icons/EditIcon.svg';
import { ReactComponent as ChatRoomIcon } from 'asset/icons/ChatRoomIcon.svg';
import SearchBar from 'components/common/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectChatRoom } from 'store/chat';

export default function ChatRoomList() {
  const chatData = useSelector((state: RootState) => state.chat.allChats);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const filteredChatData = chatData.filter((chat) => chat.partner.name.includes(inputValue));

  const dispatch = useDispatch();

  const handleChatRoomClick = (partnerId: string) => {
    navigate(`/chats/${partnerId}`); // chatId를 이용하여 URL 경로를 설정
    dispatch(selectChatRoom(partnerId));
  };

  return (
    <>
      <ChatRoomListHeader>
        <button>편집</button>
        <h1>대화</h1>
        <EditIcon alt="채팅방 수정 아이콘" />
      </ChatRoomListHeader>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <ChatRoomListBody>
        {filteredChatData.map((chat) => (
          <ChatRoomsContainer key={chat.id} onClick={() => handleChatRoomClick(chat.partner.id)}>
            <ChatRoomIcon alt="각 채팅방을 나타내는 아이콘" />
            <div>
              <h3 className="name">{chat.partner.name}</h3>
              <p className="message">{chat.messages[chat.messages.length - 1].text}</p>
            </div>
          </ChatRoomsContainer>
        ))}
      </ChatRoomListBody>
    </>
  );
}

const ChatRoomListBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 55rem;
`;
const ChatRoomListHeader = styled.div`
  display: flex;
  padding: 1rem 1.6rem;
  font-size: 1.7rem;
  line-height: 2.2rem; /* 129.412% */
  letter-spacing: -0.04rem;
  justify-content: space-between;
  & button {
    color: var(--blue01);
  }
`;

const ChatRoomsContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 7.6rem;
  padding: 0.7rem 0.9rem;
  background-color: var(--white);
  flex-shrink: 0;
  display: flex;
  gap: 1rem;
  .name {
    color: var(--black);
    font-size: 1.6rem;
    line-height: 2.1rem; /* 131.25% */
    letter-spacing: -0.03rem;
  }
  .message {
    color: var(--gray03);
    font-feature-settings:
      'clig' off,
      'liga' off;

    font-size: 1.5rem;
    line-height: 2rem; /* 133.333% */
    letter-spacing: -0.025rem;
  }
`;
