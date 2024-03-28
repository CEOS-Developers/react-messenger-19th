import React, { useState, useEffect, useRef } from 'react';
import ChatHead from './components/ChatHead';
import ChatBody from './components/ChatBody';
import ChatBottom from './components/ChatBottom';

interface Message {
	id: number;
	from: string;
	content: string;
	date: string;
}

interface User {
	name: string;
	image: './item/profile_mini.png';
}

const initialUsers: User[] = [
	{ name: '이지인', image: './item/profile_mini.png' },
	{ name: '이영인', image: './item/profile_mini.png' },
];

const initialMessages: Message[] = [];

function ChattingRoom() {
	// 현재 사용자 상태 관리
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	// 현재 메시지 기롥 상태 관리
	const [messages, setMessages] = useState<Message[]>([]);
	const currentUser = initialUsers[currentUserIndex];
	return <div></div>;
}

export default ChattingRoom;
