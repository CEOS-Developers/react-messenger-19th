import { createSlice, configureStore } from "@reduxjs/toolkit";

interface OpponentState {
  opponent: number;
}

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

const store = configureStore({
  reducer: { opponent: opponentSlice.reducer },
});

export const opponentActions = opponentSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
