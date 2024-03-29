import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialChatData from '../assets/data/initialChatData.json';

interface UserState {
  nowUser: number;
  userList: number[];
}

const initialState: UserState = {
  nowUser: 0,
  userList: initialChatData.chattings[0].userList, // 첫 번째 채팅방의 userList를 초기 상태로 설정
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<number>) => {
      state.nowUser = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
