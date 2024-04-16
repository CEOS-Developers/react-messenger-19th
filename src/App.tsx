import { useEffect, useState, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './style/GlobalStyles';
import ChattingPage from './pages/ChattingPage';
import ContactInfoPage from './pages/ContactInfoPage';
import ChatsPage from './pages/ChatsPage';
import StatusPage from './pages/StatusPage';
import EditContactPage from './pages/EditContactPage';
import StatusBar from './components/iphone/StatusBar';
import HomeIndicator from './components/iphone/HomeIndicator';

const Container = styled.div<{ $bgColor: string }>`
  width: 23.4375rem;
  height: 50.75rem;
  background: ${({ $bgColor }) => $bgColor};
  position: relative;
`;

// useLocation을 사용하기 위한 Wrapper 컴포넌트
function AppContainer({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [bgColor, setBgColor] = useState('#f6f6f6');

  useEffect(() => {
    if (location.pathname === '/edit-contact') {
      setBgColor('#fff'); // edit-contact 경로일 때만 배경색을 #fff로 설정
    } else {
      setBgColor('#f6f6f6');
    }
  }, [location]);

  return <Container $bgColor={bgColor}>{children}</Container>;
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <StatusBar />
        <Routes>
          <Route path="/" element={<ChatsPage />} />
          <Route path="/chatroom/:chatRoomId" element={<ChattingPage />} />
          <Route path="/contact-info" element={<ContactInfoPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/edit-contact" element={<EditContactPage />} />
        </Routes>
        <HomeIndicator />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
