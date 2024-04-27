import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; 
import ChatList from './components/list/ChatList';
import ChatApp from './components/main/ChatApp'; 
import GlobalStyle from './components/style/GlobalStyle';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:userId" element={<ChatApp />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
