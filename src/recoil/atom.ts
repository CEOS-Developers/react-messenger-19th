import { atom } from 'recoil';
import { ChatType } from '../types/types';

export const userIdState = atom<number>({
  key: 'userIdState',
  default: 1,
});

export const chatsState = atom<ChatType[]>({
  key: 'chatsState',
  default: [],
});
