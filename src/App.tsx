import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/globalStyles';
import ChatMain from '@components/ChatMain';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<ChatMain />} />
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
