import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer, // chat 기능에 대한 리듀서를 스토어에 추가
  },
});

// 스토어의 상태 타입을 추론하기 위한 타입
export type RootState = ReturnType<typeof store.getState>;

// App 디스패치 함수의 타입을 추론하기 위한 타입
export type AppDispatch = typeof store.dispatch;
