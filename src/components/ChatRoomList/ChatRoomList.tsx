import styled from 'styled-components';

import { ReactComponent as EditIcon } from 'asset/icons/EditIcon.svg';
import SearchBar from 'components/common/SearchBar';

export default function ChatRoomList() {
  return (
    <div>
      <ChatNavigationBar>
        <button>편집</button>
        <p>대화</p>
        <EditIcon alt="채팅방 수정 아이콘" />
      </ChatNavigationBar>
      <SearchBar />
    </div>
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
