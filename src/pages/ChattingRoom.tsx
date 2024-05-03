// src/pages/ChattingRoom.tsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { messagesByRoomId } from '../state/messageState';
import { userListState } from '../state/userState';
import ChatHead from '../components/ChatHead';
import ChatBody from '../components/ChatBody';
import ChatBottom from '../components/ChatBottom';

interface Message {
	id: number;
	from: string;
	to: string;
	content: string;
	date: string;
}

const ChattingRoom = () => {
	const { userId } = useParams<{ userId: string }>();
	const userList = useRecoilValue(userListState);
	const currentUser = userList.find((user) => user.id === userId);
	const [messages, setMessages] = useRecoilState(
		messagesByRoomId(userId ?? '')
	);

	useEffect(() => {
		const storedMessages = localStorage.getItem(`messages_${userId}`);
		if (storedMessages) {
			setMessages(JSON.parse(storedMessages));
		}
	}, [userId, setMessages]);

	const sendMessage = (content: string, from: string, to: string) => {
		const newMessage = {
			id: Date.now(),
			from,
			to,
			content,
			date: new Date().toISOString(),
		};

		// 메시지 로컬 스토리지에서 가져오기 이전에 Undefined 여부 확인
		const updatedMessages = messages ? [...messages, newMessage] : [newMessage];
		setMessages(updatedMessages);

		// 메시지 로컬 스토리지에서 가져오기 이전에 Undefined 여부 확인  -updating localStorage
		const storedMessages = messages ? [...messages, newMessage] : [newMessage];
		localStorage.setItem(`messages_${userId}`, JSON.stringify(storedMessages));
	};

	return (
		<div>
			<ChatHead
				user={currentUser || { name: '', image: '' }}
				onUserClick={() => {}}
			/>
			<ChatBody
				messages={messages}
				userImage={currentUser?.image ?? ''}
				currentUser={currentUser?.name ?? ''}
			/>
			<ChatBottom
				onSendMessage={(content) =>
					sendMessage(content, currentUser?.name ?? '', userId ?? '')
				}
			/>
		</div>
	);
};

export default ChattingRoom;
