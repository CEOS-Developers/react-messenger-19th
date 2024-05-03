import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ChatRoom from 'components/ChatRoom/ChatRoom';
import ChatList from 'components/ChatRoom/ChatList';
import ChatRoomList from 'components/ChatRoomList/ChatRoomList';
import Settings from 'components/Settings/Settings';
import Contacts from 'components/Contacts/Contacts';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/chats" element={<ChatRoomList />} />
            <Route path="/chats/:chatId" element={<ChatRoom />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
