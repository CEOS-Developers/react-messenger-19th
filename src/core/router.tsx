import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChattingList from "../pages/ChattingList/ChattingList";
import ChattingRoom from "../pages/ChattingRoom/ChattingRoom";
import FriendsList from "../pages/FriendsList/FriendsList";
import MyProfile from "../pages/MyProfile/MyProfile";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<FriendsList />} />
        <Route path="/*" element={<FriendsList />} />
        <Route path="/chats" element={<ChattingList />} />
        <Route path="/room" element={<ChattingRoom />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
