import React from 'react';
import { RecoilRoot } from 'recoil'; 
import ChatApp from './components/main/ChatApp'; 
import GlobalStyle from './components/style/GlobalStyle';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div>
        <GlobalStyle />
        <ChatApp />
      </div>
    </RecoilRoot>
  );
};

export default App;