import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ChatRoom from "components/ChatRoom/ChatRoom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ChatRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
