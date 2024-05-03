import { createSlice, configureStore } from "@reduxjs/toolkit";
import chattingData from "../data/chatting.json";

interface OpponentState {
  opponent: number;
}

// 누구와의 채팅방인지 -> 한번 채팅방 선택하면 고정
const initialOpponent: OpponentState = { opponent: 2 };
const opponentSlice = createSlice({
  name: "opponent",
  initialState: initialOpponent,
  reducers: {
    setOpponent(state, action) {
      state.opponent = action.payload;
    },
  },
});

// 채팅방 내에서 토글로 인해 상대방이 변함
const initialCurrOpponent = { currOpponent: 2 };
const currOpponentSlice = createSlice({
  name: "currOpponent",
  initialState: initialCurrOpponent,
  reducers: {
    setCurrOpponent(state, action) {
      state.currOpponent = action.payload;
    },
  },
});

// 채팅데이터
const isLocalStorageKeyExist = (key: string) => {
  return localStorage.getItem(key) !== null;
};

const setInitialChatsData = () => {
  const initialChats = [];
  for (const chat of chattingData) {
    const key = chat.opponent.toString();
    if (!isLocalStorageKeyExist(key)) {
      // 존재하지 않으면
      const chats = chat.chats;
      localStorage.setItem(key, JSON.stringify(chats));
    }
    const storedChats = localStorage.getItem(key);
    const parsedChats = storedChats ? JSON.parse(storedChats) : [];
    initialChats.push({
      opponent: key,
      chats: parsedChats,
    });
  }
  return initialChats; // initialChats 배열 반환
};

const chatsSlice = createSlice({
  name: "chats",
  initialState: setInitialChatsData(),
  reducers: {
    addChat(state, action) {
      state[action.payload.opponent - 1].chats = [
        ...state[action.payload.opponent - 1].chats,
        action.payload.newChat,
      ];
      localStorage.setItem(
        action.payload.opponent.toString(),
        JSON.stringify(state[action.payload.opponent - 1].chats)
      );
    },
  },
});

const store = configureStore({
  reducer: {
    opponent: opponentSlice.reducer,
    currOpponent: currOpponentSlice.reducer,
    chats: chatsSlice.reducer,
  },
});

export const opponentActions = opponentSlice.actions;
export const currOpponentActions = currOpponentSlice.actions;
export const chatsActions = chatsSlice.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
