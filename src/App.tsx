import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; 
import ChatList from './components/list/ChatList';
import ChatApp from './components/main/ChatApp'; 
import FriendList from './components/list/FriendList';
import GlobalStyle from './components/style/GlobalStyle';
import MyPage from './components/list/MyPage'
import PhoneCall from './components/list/PhoneCall';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:userId" element={<ChatApp />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/phone" element={<PhoneCall/>}/>

        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
