// src/features/chat/chatSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import mockData from 'data/chatData.json';
import myData from 'data/myData.json';
import { Chat, Message, User } from 'types/ChatData';

export interface InitialStateType {
  allChats: Chat[];

  participants: {
    me: User;
    partner: null | User;
  };
  selectedChats: Message[] | null;
}

const initialState: InitialStateType = {
  allChats: mockData.chats, // 전체 채팅방 데이터
  participants: {
    // 현재 채팅방의 참가자들
    me: myData,
    partner: null,
  },
  selectedChats: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectChat: (state, action: PayloadAction<string>) => {
      const selectedChat = state.allChats.find((chat) => chat.partner.id === action.payload);
      if (!selectedChat) return;
      state.participants.partner = selectedChat.partner;
      state.participants.me = myData;
      state.selectedChats = selectedChat.messages;
    },
    toggleParticipants: (state) => {
      if (!state.participants.partner) return;
      const temp = state.participants.me;
      state.participants.me = state.participants.partner;
      state.participants.partner = temp;
    },

    addNewChat: (state, action: PayloadAction<Message>) => {
      const newMessage = action.payload;

      if (!state.selectedChats) {
        state.selectedChats = [];
      }
      state.selectedChats.push(newMessage);
    },
  },
});

export const { selectChat, toggleParticipants, addNewChat } = chatSlice.actions;

export default chatSlice;
