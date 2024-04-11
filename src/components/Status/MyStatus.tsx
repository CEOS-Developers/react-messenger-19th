import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MyProfile from '../../assets/img/my-profile.svg';
import camera from '../../assets/img/status-camera.svg';
import edit from '../../assets/img/status-edit.svg';

const StatusPageContainer = styled.div`
  width: 23.4375rem;
  height: 40.06rem;
  background: #efeff4;
`;

const MyStatusContainer = styled.div`
  width: 23.4375rem;
  height: 4.75rem;
  background: #fff;
  box-shadow: 0px 0.33px 0px 0px rgba(60, 60, 67, 0.29),
    0px -0.33px 0px 0px rgba(60, 60, 67, 0.29);
  position: relative;
  top: 2.19rem;
`;

const ProfileImg = styled.img`
  width: 3.625rem;
  height: 3.625rem;
  position: absolute;
  left: 0.81rem;
  top: 0.56rem;
`;

const MyStatusText = styled.div`
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem; /* 131.25% */
  letter-spacing: -0.02063rem;

  position: absolute;
  top: 1.06rem;
  left: 5rem;
`;

const SubText = styled.div`
  color: #8e8e93;
  font-family: 'SF Pro Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
  letter-spacing: -0.0125rem;

  position: absolute;
`;

const IconContainer = styled.div`
  display: flex;
  width: 5.5rem;
  height: 2.25rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  position: absolute;
  top: 1.25rem;
  left: 16.94rem;
`;

const IconImg = styled.img`
  width: auto;
  height: auto;
`;

const TipContainer = styled.div`
  width: 23.4375rem;
  height: 2.6875rem;
  background: #fff;
  box-shadow: 0px 0.33px 0px 0px rgba(60, 60, 67, 0.29),
    0px -0.33px 0px 0px rgba(60, 60, 67, 0.29);
  position: relative;
  top: 4.75rem;
`;

export default function MyStatus() {
  const navigate = useNavigate();

  return (
    <StatusPageContainer>
      <MyStatusContainer>
        <ProfileImg src={MyProfile} alt="나의 프로필 이미지" />
        <MyStatusText>My Status</MyStatusText>
        <SubText style={{ top: '2.62rem', left: '5rem' }}>
          Give me magarita
        </SubText>
        <IconContainer>
          <IconImg src={camera} alt="카메라 버튼 이미지" />
          <IconImg
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/edit-contact')}
            src={edit}
            alt="수정 버튼 이미지"
          />
        </IconContainer>
      </MyStatusContainer>
      <TipContainer>
        <SubText style={{ top: '0.87rem', left: '4.19rem' }}>
          No recent updates to show right now.
        </SubText>
      </TipContainer>
    </StatusPageContainer>
  );
}
