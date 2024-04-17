import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../../features/userSlice';
import { RootState } from '../../store';
import { TitleBarProps } from '../../types/interface';
import { User } from '../../types/interface';
import { Chats } from '../../types/interface';
import TopNavBar from '../TopNavBar/TopNavBar';
import Left from '../../assets/img/left.svg';
import Call from '../../assets/img/call.svg';

const ProfileContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.5rem;
  position: absolute;
  top: 0.13rem;
  left: 3.81rem;
`;

const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 2.25rem;
`;

const ProfileInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: #000;
  font-family: 'SF Pro Display';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const OnlineText = styled.div`
  color: #898989;
  font-family: 'SF Pro Text';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0015rem;
`;

export default function TitleBar(props: TitleBarProps) {
  const { name, profileImg, isActive } = props;
  const { chatRoomId } = useParams();
  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const chattings = useSelector((state: RootState) => state.chat.chattings);
  const [chatRoom, setChatRoom] = useState<Chats | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // chatRoomId를 사용하여 해당 채팅방 찾기 및 설정
    const foundChatRoom = chattings.find(
      (chat) => chat.chatRoomId.toString() === chatRoomId
    );
    setChatRoom(foundChatRoom ?? null);
  }, [chatRoomId, chattings]); // chattings 또는 chatRoomId 변경 시 effect 실행

  const handleChangeUser = () => {
    if (chatRoom && chatRoom.userList && chatRoom.userList.length > 0) {
      const currentChatRoomUserList = chatRoom.userList;
      const currentIndex = currentChatRoomUserList.findIndex(
        (userId) => userId === nowUser
      );
      const nextUserIndex = (currentIndex + 1) % currentChatRoomUserList.length;
      const nextUserId = currentChatRoomUserList[nextUserIndex];

      dispatch(changeUser(nextUserId));
    }
  };

  return (
    <TopNavBar
      leftImgSrc={Left}
      leftText="12"
      rightImgSrc={Call}
      leftTextOnClick={() => navigate('/')}
    >
      <ProfileContainer>
        <ProfileImg
          src={profileImg}
          alt="유저 프로필"
          onClick={() =>
            navigate('/contact-info', { state: { userId: nowUser } })
          }
        />
        <ProfileInnerContainer onClick={handleChangeUser}>
          <ProfileName>{name}</ProfileName>
          {isActive ? (
            <OnlineText>online</OnlineText>
          ) : (
            <OnlineText>offline</OnlineText>
          )}
        </ProfileInnerContainer>
      </ProfileContainer>
    </TopNavBar>
  );
}
