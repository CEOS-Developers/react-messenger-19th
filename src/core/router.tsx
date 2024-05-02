import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChattingRoom from "../pages/ChattingRoom/ChattingRoom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChattingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
