import styled from 'styled-components';

import { ReactComponent as EditIcon } from 'asset/icons/EditIcon.svg';
import { ReactComponent as ChatRoomIcon } from 'asset/icons/ChatRoomIcon.svg';
import SearchBar from 'components/common/SearchBar';
import BottomNavBar from 'components/common/BottomNavBar';

export default function ChatRoomList() {
  return (
    <>
      <div>
        <ChatNavigationBar>
          <button>편집</button>
          <p>대화</p>
          <EditIcon alt="채팅방 수정 아이콘" />
        </ChatNavigationBar>
        <SearchBar />

        <ChatRoomsContainer>
          <ChatRoomIcon alt="각 채팅방을 나타내는 아이콘" />
          <div>
            <h3 className="name">CEOS 디팟</h3>
            <p className="message">CEOS 디팟 파이팅</p>
          </div>
        </ChatRoomsContainer>
        <ChatRoomsContainer>
          <ChatRoomIcon alt="각 채팅방을 나타내는 아이콘" />
          <div>
            <h3 className="name">CEOS 디팟</h3>
            <p className="message">CEOS 디팟 파이팅</p>
          </div>
        </ChatRoomsContainer>
        <ChatRoomsContainer>
          <ChatRoomIcon alt="각 채팅방을 나타내는 아이콘" />
          <div>
            <h3 className="name">CEOS 디팟</h3>
            <p className="message">CEOS 디팟 파이팅</p>
          </div>
        </ChatRoomsContainer>
        <ChatRoomsContainer>
          <ChatRoomIcon alt="각 채팅방을 나타내는 아이콘" />
          <div>
            <h3 className="name">CEOS 디팟</h3>
            <p className="message">CEOS 디팟 파이팅</p>
          </div>
        </ChatRoomsContainer>
      </div>
      <BottomNavBar />
    </>
  );
}

const ChatNavigationBar = styled.div`
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
  width: 37.5rem;
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
