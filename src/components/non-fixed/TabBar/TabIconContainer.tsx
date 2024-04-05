import { useRecoilState } from 'recoil';
import { userPageModeState } from '@context/state/atom';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface userPageModeAtt {
  // 속성은 html dom에 부여하는 것이라서 일부러 $ 표시를 붙여준 것이다
  $userPageMode: boolean;
}

const StyledTabIconContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 32px;
`;

const StyledIconContainer = styled.div`
  width: 56px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const StyledImage = styled.img<userPageModeAtt>`
  width: 24px;
  height: 24px;
  margin-top: 6px;
  opacity: ${(props) => (props.$userPageMode === true ? 1 : 0.35)};
`;

const StyledTabSpan = styled.span<userPageModeAtt>`
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 10px;

  color: ${(props) =>
    props.$userPageMode === true
      ? props.theme.color.black
      : props.theme.color.grayDark};
`;

export default function TabIconContainer() {
  const location = useLocation();
  const [userPageMode, setUserPageMode] = useRecoilState(userPageModeState);
  const navigate = useNavigate();

  if (location.pathname === '/') {
    setUserPageMode('friends');
  } else if (location.pathname === '/messages') {
    setUserPageMode('messages');
  } else if (location.pathname === '/profile') {
    setUserPageMode('profile');
  }

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <StyledTabIconContainer>
      <StyledIconContainer onClick={() => handleNavigate('/')}>
        <StyledImage
          src="/images/friend.svg"
          $userPageMode={userPageMode === 'friends'}
        />
        <StyledTabSpan $userPageMode={userPageMode === 'friends'}>
          친구
        </StyledTabSpan>
      </StyledIconContainer>

      <StyledIconContainer onClick={() => handleNavigate('/messages')}>
        <StyledImage
          src="/images/messageLarge.svg"
          $userPageMode={userPageMode === 'messages'}
        />
        <StyledTabSpan $userPageMode={userPageMode === 'messages'}>
          메시지
        </StyledTabSpan>
      </StyledIconContainer>

      <StyledIconContainer onClick={() => handleNavigate('/profile')}>
        <StyledImage
          src="/images/discord24.svg"
          $userPageMode={userPageMode === 'profile'}
        />
        <StyledTabSpan $userPageMode={userPageMode === 'profile'}>
          나
        </StyledTabSpan>
      </StyledIconContainer>
    </StyledTabIconContainer>
  );
}
