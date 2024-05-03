// src/state/messageState.ts

import { atom } from 'recoil';

interface Message {
  id: number;
  from: string;
  to: string; 
  content: string;
  date: string;
}

export const messagesByRoomId = (userId: string) => atom<Message[]>({
  key: `messages_${userId}`,
  default: [],
});
