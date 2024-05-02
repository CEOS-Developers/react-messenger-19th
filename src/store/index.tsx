import { createSlice, configureStore } from "@reduxjs/toolkit";

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
const initialCurrOpponent = { currOpponent: initialOpponent.opponent };
const currOpponentSlice = createSlice({
  name: "currOpponent",
  initialState: initialCurrOpponent,
  reducers: {
    setCurrOpponent(state, action) {
      state.currOpponent = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    opponent: opponentSlice.reducer,
    currOpponent: currOpponentSlice.reducer,
  },
});

export const opponentActions = opponentSlice.actions;
export const currOpponentActions = currOpponentSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
