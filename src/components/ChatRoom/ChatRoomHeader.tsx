import styled from "styled-components";
import { ReactComponent as LeftArrowIcon } from "asset/icons/LeftArrowIcon.svg";
import { User } from "types/ChatData";

interface ParticipantsId {
  me: string;
  partner: string;
}
interface ChatRoomHeaderProps {
  toggleParticipantsId: () => void;
  findUserById: (userId: string) => User | undefined;
  participantsId: ParticipantsId;
}
function ChatRoomHeader({
  toggleParticipantsId,
  findUserById,
  participantsId,
}: ChatRoomHeaderProps) {
  return (
    <ChatRoomHeaderWrapper>
      <button>
        <LeftArrowIcon className="arrow_icon" alt="뒤로 가기 아이콘" />
      </button>
      <UserDetailInfo>
        <h1 className="user_name">
          {findUserById(participantsId.partner)?.name}
        </h1>
        <p className="last_access">마지막 접속 5분 전</p>
      </UserDetailInfo>
      <UserProfileImg
        src={findUserById(participantsId.partner)?.profileImage}
        onClick={toggleParticipantsId}
      />
    </ChatRoomHeaderWrapper>
  );
}

export default ChatRoomHeader;

const ChatRoomHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
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
    color: var(--black);
    text-align: center;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  .last_access {
    color: var(--gray04);
    font-size: 1.3rem;
    letter-spacing: -0.01rem;
  }
`;
