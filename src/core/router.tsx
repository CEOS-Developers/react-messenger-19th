import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChattingList from "../pages/ChattingList/ChattingList";
import ChattingRoom from "../pages/ChattingRoom/ChattingRoom";
import FriendsList from "../pages/FriendsList/FriendsList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FriendsList />} />
        <Route path="/chats" element={<ChattingList />} />
        <Route path="/room" element={<ChattingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
