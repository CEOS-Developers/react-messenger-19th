// src/state/messageState.ts

import { atom } from 'recoil';

interface Message {
	id: number;
	from: string;
	to: string;
	content: string;
	date: string;
}

export const messagesState = atom<{ [key: string]: Message[] } | undefined>({
	key: 'messagesState',
	default: undefined,
});
