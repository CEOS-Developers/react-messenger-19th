import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Message } from 'types/ChatData';

export interface InitialStateType {
  replyMessage: Message | null; // 답장을 위한 상태
  isReplyWindowOpen: boolean;
}
const initialState: InitialStateType = { replyMessage: null, isReplyWindowOpen: false };

export const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers: {
    setReplyMessage: (state, action: PayloadAction<Message | null>) => {
      state.replyMessage = action.payload;
    },

    closeReplyWindow: (state) => {
      state.isReplyWindowOpen = false;
    },
    openReplyWindow: (state) => {
      state.isReplyWindowOpen = true;
    },
  },
});

export const { setReplyMessage, closeReplyWindow, openReplyWindow } = replySlice.actions;
