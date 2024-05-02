import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";

import chattingData from "../../data/chatting.json";

const ChattingRoom = () => {
  const findChats = (opponent: number) => {
    const chats = [];
    for (const item of chattingData) {
      if (item.opponent === opponent) {
        chats.push(...item.chats);
      }
    }
    console.log(chats);
    return chats;
  };

  const opponent = useSelector((state: RootState) => state.opponent.opponent);

  const storedChatsJSON = localStorage.getItem(opponent.toString());
  const initialData = storedChatsJSON
    ? JSON.parse(storedChatsJSON)
    : findChats(opponent);

  const [chats, setChats] = useState(initialData);

  useEffect(() => {
    localStorage.setItem(opponent.toString(), JSON.stringify(chats));
  }, [chats, opponent]);

  return (
    <Wrapper>
      <Header />
      <Main chats={chats} setChats={setChats} />
    </Wrapper>
  );
};

export default ChattingRoom;

const Wrapper = styled.div`
  background-color: white;
`;
