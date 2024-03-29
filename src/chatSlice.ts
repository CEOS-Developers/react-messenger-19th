import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialChatData from './assets/data/initialChatData.json';

const initialState = initialChatData;

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (
      state,
      action: PayloadAction<{
        chatRoomId: number;
        senderId: number;
        content: string;
        time: string;
        isRead: boolean;
      }>
    ) => {
      const { chatRoomId, senderId, content, time, isRead } = action.payload;
      const chatRoom = state.chattings.find(
        (room) => room.chatRoomId === chatRoomId
      );
      if (chatRoom) {
        const newChatId =
          chatRoom.chatList.length > 0
            ? chatRoom.chatList[chatRoom.chatList.length - 1].id + 1
            : 0;
        chatRoom.chatList.push({
          id: newChatId,
          senderId,
          content,
          time,
          isRead,
        });
      }
    },
  },
});

// Actions export
export const { addChat } = chatSlice.actions;

// Reducer export
export default chatSlice.reducer;
