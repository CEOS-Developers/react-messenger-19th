import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeUser } from '../../features/userSlice';
import { RootState } from '../../store';
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

interface TitleBarProps {
  name: string;
  profileImg: string;
  isActive: boolean;
}

export default function TitleBar(props: TitleBarProps) {
  const { name, profileImg, isActive } = props;

  const nowUser = useSelector((state: RootState) => state.user.nowUser);
  const userList = useSelector((state: RootState) => state.user.userList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToContactInfoPage = () => {
    navigate('/contact-info');
  };

  const goToChatsPage = () => {
    navigate('/chats');
  };

  const handleChangeUser = () => {
    const currentIndex = userList.indexOf(nowUser); // 현재 nowUser의 인덱스
    const nextIndex = currentIndex === 0 ? 1 : 0;
    const nextUser = userList[nextIndex];
    dispatch(changeUser(nextUser));
  };

  return (
    <TopNavBar
      leftImgSrc={Left}
      leftText="12"
      rightImgSrc={Call}
      leftTextOnClick={goToChatsPage}
    >
      <ProfileContainer onClick={goToContactInfoPage}>
        <ProfileImg src={profileImg} alt="유저 프로필" />
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
