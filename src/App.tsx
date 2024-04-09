import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './style/GlobalStyles';
import ChattingPage from './pages/ChattingPage';
import ContactInfoPage from './pages/ContactInfoPage';
import ChatsPage from './pages/ChatsPage';
import StatusPage from './pages/StatusPage';
import EditContactPage from './pages/EditContactPage';
import StatusBar from './components/iphone/StatusBar';
import HomeIndicator from './components/iphone/HomeIndicator';

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
