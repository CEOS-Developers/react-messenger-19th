import { atom } from 'recoil';
import messagesData from '../fakedata/messages.json';

export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  text: string;
  timestamp: string; 
}

export const messagesState = atom({
  key: 'messagesState',
  default: messagesData,
});
