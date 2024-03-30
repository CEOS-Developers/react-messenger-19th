import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ChattingPage from './pages/ChattingPage';
import GlobalStyles from './style/GlobalStyles';
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
          </Routes>
        </InnerContainer>
        <HomeIndicator />
      </Container>
    </BrowserRouter>
  );
}

export default App;
