import { configureStore } from '@reduxjs/toolkit';
import chatSlice from 'store/chat';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// 스토어 설정
const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

// 루트 상태 타입 정의
export type RootState = ReturnType<typeof store.getState>;

// 루트 디스패치 타입 정의
export type AppDispatch = typeof store.dispatch;

// 타입이 지정된 훅 사용
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
