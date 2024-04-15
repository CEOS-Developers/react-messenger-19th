import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/type';
import UserData from '../assets/data/userData.json';

interface UserState {
  nowUser: number;
  userList: User[];
}

const initialState: UserState = {
  nowUser: 0,
  userList: UserData.users,
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
