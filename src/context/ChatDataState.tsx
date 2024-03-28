import { atom } from 'recoil';
import type { Message } from '../lib/types';

export const chatMessagesState = atom<Message[]>({
	key: 'chatMessagesState',
	default: [],
});
