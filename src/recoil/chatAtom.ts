import { atom, selectorFamily } from 'recoil';
import chattingData from '@assets/data/chattingRoomData.json';

interface Chat {
  chatId: string;
  to: string;
  from: string;
  content: string;
  date: string;
  time: string;
  isDisplay: boolean;
  isRead: boolean;
}

interface ChattingRoom {
  id: string;
  chat: Chat[];
}

export const chatDataState = atom<ChattingRoom[]>({
  key: 'chatDataState',
  default: chattingData.chattings,
});

export const currentChatRoomIdState = selectorFamily({
  key: 'currentChatRoomIdState',
  get:
    (id: string) =>
    ({ get }) => {
      const chatData = get(chatDataState);
      return chatData.find((room) => room.id === id);
    },
});
