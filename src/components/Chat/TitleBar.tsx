import styled from 'styled-components';
import Left from '../../assets/img/left.svg';
import VideoCall from '../../assets/img/videoCall.svg';
import AudioCall from '../../assets/img/audioCall.svg';

const TitleBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.75rem;
  border-bottom: 0.03125rem solid #a4a39e;
  position: relative;
`;

const LeftContainer = styled.div`
  display: inline-flex;
  padding: 0.625rem 0.5625rem;
  align-items: flex-start;
  gap: 0.3125rem;
  position: absolute;
  bottom: 0.13rem;
  right: 20.1rem;
`;

const LeftImg = styled.img`
  width: 0.75rem;
  height: 1.25rem;
`;

const LeftText = styled.div`
  color: var(--Whatsapp-Green, #1bd742);
  font-family: 'SF Pro Text';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 129.412% */
  letter-spacing: -0.0255rem;
`;

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

const RightContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.375rem;
  position: absolute;
  top: 0.63rem;
  right: 0.94rem;
`;

const CallImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

interface ChatTitleProps {
  userId: number;
  userName: string;
  profileImg: string;
  isActive: boolean;
  handleChangeUser?: () => void;
}

export default function TitleBar(props: ChatTitleProps) {
  const { userId, userName, profileImg, isActive, handleChangeUser } = props;

  return (
    <TitleBarContainer>
      <LeftContainer>
        <LeftImg src={Left} alt="왼쪽 화살표 이미지" />
        <LeftText>12</LeftText>
      </LeftContainer>
      <ProfileContainer>
        <ProfileImg
          onClick={handleChangeUser}
          src={profileImg}
          alt="유저 프로필"
        />
        <ProfileInnerContainer>
          <ProfileName>{userName}</ProfileName>
          {isActive ? (
            <OnlineText>online</OnlineText>
          ) : (
            <OnlineText>offline</OnlineText>
          )}
        </ProfileInnerContainer>
      </ProfileContainer>
      <RightContainer>
        <CallImg src={VideoCall} alt="영상 통화 이미지" />
        <CallImg src={AudioCall} alt="음성 통화 이미지" />
      </RightContainer>
    </TitleBarContainer>
  );
}
