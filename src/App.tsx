import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChattingPage from './pages/ChattingPage';
import GlobalStyles from './style/GlobalStyles';
import StatusBar from './components/StatusBar';
import HomeIndicator from './components/HomeIndicator';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="Container">
        <StatusBar />
        <Routes>
          <Route path="/" element={<ChattingPage />} />
        </Routes>
        <HomeIndicator />
      </div>
    </BrowserRouter>
  );
}

export default App;
