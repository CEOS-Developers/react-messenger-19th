// src/state/userState.ts

import { atom } from 'recoil';

export interface Message {
	id: number;
	from: string;
	to: string;
	content: string;
	date: string;
}

interface User {
	id: string;
	name: string;
	image: string;
	chatHistory?: Message[]; // 대화 내역 수정
}

export const userListState = atom<User[]>({
	key: 'userListState',
	default: [
		{ id: '1', name: '김모씨', image: '', chatHistory: [] },
		{ id: '2', name: '박모씨', image: '', chatHistory: [] },
		{ id: '3', name: '최모씨', image: '', chatHistory: [] },
		{ id: '4', name: '최모씨', image: '', chatHistory: [] },
	],
});
