import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages';
import FriendsPage from './pages/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import ChatsDetailPage from './pages/ChatsDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/chats" element={<ChatsPage />}>
            <Route path=":userId" element={<ChatsDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
