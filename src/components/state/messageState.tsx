import { atom } from 'recoil';

export interface Message {
  id: number;
  text: string;
  timestamp: Date;
}
// 로컬 스토리지에서 메시지 불러오기
const loadMessagesFromLocalStorage = (): Message[] => {
  const storedMessages = localStorage.getItem('messages');
  return storedMessages ? JSON.parse(storedMessages) : [];
};

export const messageState = atom<Message[]>({
  key: 'messageState',
  default: loadMessagesFromLocalStorage(),
});
