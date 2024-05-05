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
		// 0번은 current user - 메신저 앱 주인으로 설정
		{
			id: '0',
			name: '이영인',
			image: '/item/profile_mini2.png',
			chatHistory: [],
		},
		{
			id: '1',
			name: '김모씨',
			image: '/item/profile_mini.png',
			chatHistory: [],
		},
		{
			id: '2',
			name: '박모씨',
			image: '/item/profile_mini.png',
			chatHistory: [],
		},
		{
			id: '3',
			name: '최모씨',
			image: '/item/profile_mini.png',
			chatHistory: [],
		},
		{
			id: '4',
			name: '최모씨',
			image: '/item/profile_mini.png',
			chatHistory: [],
		},
        {
			id: '5',
			name: '정모씨',
			image: '/item/profile_mini.png',
			chatHistory: [],
		},
	],
});

export const currentUserState = atom<User>({
	key: 'currentUserState',
	default: { id: '0', name: '김모씨', image: '', chatHistory: [] },
});
