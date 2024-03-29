import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './features/chatSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
});

// 스토어의 상태 타입을 추론하기 위한 타입
export type RootState = ReturnType<typeof store.getState>;

// App 디스패치 함수의 타입을 추론하기 위한 타입
export type AppDispatch = typeof store.dispatch;
