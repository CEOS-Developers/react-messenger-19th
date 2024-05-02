import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from 'components/Layout/Footer';

function Layout() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean); // 빈 문자열 제거

  const backgroundColor = determineBackgroundColor(pathSegments);
  console.log(pathSegments);
  return (
    <LayoutContainer $backgroundColor={backgroundColor}>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: relative;
  width: 37.5rem;
  height: 81.2rem;
  margin: 0 auto;

  border-radius: 2.4rem;
`;

function determineBackgroundColor(segments: string[]) {
  // 경로가 "/chats"만 포함하는 경우 채팅 목록 페이지
  if (segments.length === 1 && segments[0] === 'chats') {
    return 'var(--gray01)';
  }
  // 경로가 "/chats/:chatId"를 포함하는 경우 개별 채팅방 페이지
  else if (segments.length === 2 && segments[0] === 'chats') {
    return 'var(--gray02)';
  }
  // 기본 배경색
  return 'var(--gray01)';
}
