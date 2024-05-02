import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messenger from "../components/Messenger";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messenger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
