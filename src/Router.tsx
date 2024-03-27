import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
