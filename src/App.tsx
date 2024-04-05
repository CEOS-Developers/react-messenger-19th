import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/globalStyles';
import ChatMain from '@pages/ChatMain';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonLayout from '@pages/CommonLayout';
import Friends from '@pages/Friends';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<CommonLayout />}>
              <Route index={true} element={<Friends />}></Route>
            </Route>
            <Route path="/chat" element={<ChatMain />} />
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
