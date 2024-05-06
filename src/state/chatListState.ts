// src/state/chatListState.ts

import { atom } from 'recoil';

interface ChatRoom {
	id: string;
	partner: string; 
	recentMsg: number;
}

export const chatListState = atom<ChatRoom[]>({
	key: 'chatListState',
	default: [
		{ id: 'room1', partner: '김모씨', recentMsg: 3 },
		{ id: 'room2', partner: '박모씨', recentMsg: 1 },
		{ id: 'room3', partner: '최모씨', recentMsg: 1 },
		// 추가 대화방 정보
	],
});