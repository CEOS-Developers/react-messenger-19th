import Header from "./Header";
import Main from "./Main";
import { SenderProvider } from "../../assets/SenderContext";

const ChattingRoom = () => {
  return (
    <SenderProvider>
      <Header />
      <Main />
    </SenderProvider>
  );
};

export default ChattingRoom;
