import React from 'react';
import ChatApp from './components/main/ChatApp'; 
import GlobalStyle from './components/GlobalStyle';
const App: React.FC = () => {
  return (
    <div>
		<GlobalStyle/>
      	<ChatApp />
    </div>
  );
};

export default App;
