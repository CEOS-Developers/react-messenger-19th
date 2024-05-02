// src/features/chat/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";
import mockData from "data/chatData.json";
import { initial } from "types/ChatData";

const initialState: initial = {
  allChats: mockData.chats, // 전체 채팅방 데이터
  selectedChatId: null, // 선택된 채팅방 ID
  participants: {
    // 현재 채팅방의 참가자들
    me: null,
    partner: null,
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectChat: (state, action) => {
      const selectedChat = state.allChats.find(
        (chat) => chat.id === action.payload
      );
      state.selectedChatId = action.payload;
      if (!selectedChat) return;
      state.participants.me = selectedChat.users[0];
      state.participants.partner = selectedChat.users[1];
    },
    toggleParticipants: (state) => {
      const temp = state.participants.me;
      state.participants.me = state.participants.partner;
      state.participants.partner = temp;
    },
  },
});

export const { selectChat, toggleParticipants } = chatSlice.actions;

export default chatSlice;
