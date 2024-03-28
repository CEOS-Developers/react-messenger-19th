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
	// 메세지 목록 끝으로 스크롤
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // localStorage에서 메시지 데이터 로드
        const savedMessages = localStorage.getItem('messages');
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        }
      }, []);
    
      useEffect(() => {
        // 메시지 데이터를 localStorage에 저장
        localStorage.setItem('messages', JSON.stringify(messages));
      }, [messages]);
    

	useEffect(() => {
		// 메시지가 추가될 때마다 스크롤을 하단으로 이동
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

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
			<div ref={messagesEndRef} />
		</div>
	);
}

export default ChattingRoom;
