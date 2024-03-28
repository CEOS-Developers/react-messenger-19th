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
	image: string;
}

const initialUsers: User[] = [
	{ name: '이지인', image: '/item/profile_mini.png' },
	{ name: '이영인', image: '/item/profile_mini.png' },
];

const initialMessages: Message[] = [];

function ChattingRoom() {
	// 현재 사용자 상태 관리
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	// 현재 메시지 기롥 상태 관리
	const [messages, setMessages] = useState<Message[]>([]);
	const currentUser = initialUsers[currentUserIndex];

	const sendMessage = (messageContent: string) => {
		const today = new Date().toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		});

		const time = new Date().toLocaleTimeString('ko-KR', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});

		const newMessage: Message = {
			id: Date.now(),
			from: currentUser.name,
			content: messageContent,
			date: time,
		};
		setMessages([...messages, newMessage]);
	};

	const toggleUser = () => {
		setCurrentUserIndex((currentIndex) => (currentIndex === 0 ? 1 : 0));
	};

	return (
		<div>
			<ChatHead user={currentUser} onUserClick={toggleUser} />
			<ChatBody messages={messages} currentUser={currentUser.name} />
			<ChatBottom onSendMessage={sendMessage} />
		</div>
	);
}

export default ChattingRoom;
