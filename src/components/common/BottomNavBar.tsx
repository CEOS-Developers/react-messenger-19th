import { ReactComponent as ProfileIcon } from 'asset/icons/ProfileIcon.svg';
import { ReactComponent as ChatIcon } from 'asset/icons/ChatIcon.svg';
import styled, { css } from 'styled-components';
import { flexCenter, flexColumn } from 'styles/CommonStyle';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const location = useLocation();

  // 현재 경로와 링크 경로가 일치하는지 확인하는 함수
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <BottomNavBarWrapper>
      <Link to="/contacts" className={isActive('/contacts') ? 'active' : 'inactive'}>
        <ProfileIcon alt="연락처 아이콘" />
        <p>연락처</p>
      </Link>
      <Link to="/chats" className={isActive('/chats') ? 'active' : 'inactive'}>
        <ChatIcon alt="대화 아이콘" />
        <p>대화</p>
      </Link>
      <Link to="/settings" className={isActive('/settings') ? 'active' : 'inactive'}>
        <img src="images/Minji.png" alt="설정 아이콘" />
        <p>설정</p>
      </Link>
    </BottomNavBarWrapper>
  );
}

const BottomNavBarWrapper = styled.div`
  display: flex;
  padding: 0.3rem 1.9rem;
  justify-content: space-between;

  & p {
    color: var(--gray04);
    font-size: 1rem;
    letter-spacing: 0.01rem;
  }
  & img {
    width: 3rem;
    height: 3rem;
  }

  & a {
    ${flexCenter}
    flex-direction: column;
    gap: 0.5rem;
    color: var(--gray04); // 기본 색상
  }

  // 활성화 스타일
  .active {
    & svg {
      fill: var(--blue01);
    }

    & p {
      color: var(--blue01);
    }
  }
  // 비활성화 스타일
  .inactive {
    & svg {
      fill: var(--gray03);
    }

    & p {
      color: var(--gray03);
    }
  }
`;
