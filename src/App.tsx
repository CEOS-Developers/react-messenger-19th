import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/globalStyles';
import ChatMain from '@pages/ChatMain';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CommonLayout from '@pages/CommonLayout';
import Friends from '@pages/Friends';
import Messages from '@pages/Messages';
import Profile from '@pages/Profile';
import EmptyChat from '@pages/EmptyChat';
import NotFound from '@pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<CommonLayout />}>
              <Route index={true} element={<Friends />}></Route>
              <Route path="messages" element={<Messages />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="not-found" element={<NotFound />}></Route>
            </Route>
            <Route path="/chat" index element={<ChatMain />}></Route>
            <Route path="/chat" element={<CommonLayout />}>
              <Route path=":username" element={<EmptyChat />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to="/not-found" replace />}
            ></Route>
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
