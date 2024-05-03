import { atom, selector, selectorFamily } from 'recoil';
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
  name: string;
  img: string;
  isUpdated: boolean;
  unReadCount: number;
  chat: Chat[];
}

export const chatDataState = atom<ChattingRoom[]>({
  key: 'chatDataState',
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem('chatData');
      if (savedData) setSelf(JSON.parse(savedData));
      else setSelf(chattingData.chattings);

      onSet((newValue: ChattingRoom[], _: any, isReset: boolean) => {
        isReset
          ? localStorage.removeItem('chatData')
          : localStorage.setItem('chatData', JSON.stringify(newValue));
      });
    },
  ],
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

export const currentChatUpdateState = selector({
  key: 'currentChatUpdateState',
  get: ({ get }) => {
    const chatData = get(chatDataState);
    return chatData.filter((room) => room.isUpdated === true);
  },
});
