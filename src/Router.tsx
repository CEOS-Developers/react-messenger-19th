import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages';
import FriendsPage from './pages/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import ChatsDetailPage from './pages/ChatsDetailPage';
import ProfilePage from './pages/ProfilePage';
import BoxLayout from './components/chatsDetailPage/BoxLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<FriendsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/chatsDetail" element={<ChatsDetailPage />}>
            <Route path=":userId" element={<BoxLayout />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
