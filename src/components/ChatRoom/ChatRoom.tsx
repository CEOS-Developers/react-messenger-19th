import styled from 'styled-components';
import { flexColumn } from 'styles/CommonStyle';
import { ReactComponent as LeftArrowIcon } from 'asset/icons/LeftArrowIcon.svg';
import UserImg from 'asset/images/User.png';
import theme from 'styles/Theme';
function ChatRoom() {
  return (
    <ChatRoomContainer>
      <ChatRoomHeader>
        <button>
          <LeftArrowIcon className="arrow_icon" alt="뒤로 가기 아이콘" />
        </button>
        <UserDetailInfo>
          <p className="user_name">친구 01</p>
          <p className="last_access">마지막 접속 5분 전</p>
        </UserDetailInfo>
        <UserProfileImg src={UserImg} />
      </ChatRoomHeader>
    </ChatRoomContainer>
  );
}

export default ChatRoom;

const ChatRoomContainer = styled.div`
  ${flexColumn}
  padding: 1.6rem;
`;

const ChatRoomHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const UserProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;

const UserDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .arrow_icon {
    display: flex;
    align-items: flex-start;
  }
  .user_name {
    color: ${theme.black};
    text-align: center;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  .last_access {
    color: var(--grey04, #8e8e92);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.3rem;
  }
`;
