import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChattingList from "../pages/ChattingList/ChattingList";
import ChattingRoom from "../pages/ChattingRoom/ChattingRoom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element={<ChattingList />} />
        <Route path="/room" element={<ChattingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
