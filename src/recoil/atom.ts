import { atom } from 'recoil';
import { ChatType } from '../types/types';

export const userIdState = atom<number>({
  key: 'userIdState',
  default: 1,
});

export const newChatState = atom<ChatType>({
  key: 'newChatState',
  default: {
    id: 'newChat',
    from: 0,
    to: 0,
    details: { text: '', time: '' },
  },
});
