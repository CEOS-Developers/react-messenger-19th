import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './style/GlobalStyles';
import ChattingPage from './pages/ChattingPage';
import ContactInfoPage from './pages/ChattingPage';
import ChatsPage from './pages/ChattingPage';
import StatusPage from './pages/ChattingPage';
import EditContactPage from './pages/ChattingPage';
import StatusBar from './components/StatusBar';
import HomeIndicator from './components/HomeIndicator';

const Container = styled.div`
  background: #f6f6f6;
  border-radius: 1.25rem;
`;

// StatusBar와 HomeIndicator 제외 영역
const InnerContainer = styled.div`
  width: 23.4375rem;
  height: 45.75rem;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <StatusBar />
        <InnerContainer>
          <Routes>
            <Route path="/" element={<ChattingPage />} />
            <Route path="/contact-info" element={<ContactInfoPage />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/edit-contact" element={<EditContactPage />} />
          </Routes>
        </InnerContainer>
        <HomeIndicator />
      </Container>
    </BrowserRouter>
  );
}

export default App;
