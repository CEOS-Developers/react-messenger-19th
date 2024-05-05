import React, { useEffect, useId, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';
import { userProfileState } from '../state/userProfileState';
import { messagesState } from '../state/messageState';
import ChatHead from '../components/ChatHead';
import ChatBody from '../components/ChatBody';
import ChatBottom from '../components/ChatBottom';
import { ChatRoomContainer } from '../style/ChattingRoomStyle';
import styled from 'styled-components';

interface Message {
	id: number;
	from: string;
	to: string;
	content: string;
	date: string;
}

const ChatBottomMask = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%; // 뷰포트 전체 너비 사용
  height: 360px; // ChatBottom의 높이와 동일하게 설정
  background-color: white; // 흰색 배경
  z-index: 1; // ChatBottom보다 낮은 z-index 설정
`;

const ChattingRoom = () => {
	const { userId } = useParams<{ userId: string }>();
	console.log(useId);

	const messagesStateValue = useRecoilValue(messagesState);
	const [messages, setMessages] = useState<Message[]>([]);

	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// 로컬 스토리지에서 이전 메시지 가져오기
		const storedMessages = localStorage.getItem(`messages_${userId}`);
		if (storedMessages) {
			// 이전 메시지가 있으면 파싱하여 상태에 설정
			setMessages(JSON.parse(storedMessages));
		}
	}, [userId]); // userId가 변경될 때마다 이펙트 재실행

	useEffect(() => {
		// 메시지가 추가될 때마다 스크롤을 하단으로 이동
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	// 메세지 목록 끝으로 스크롤

	// 유저 관리
	// 현재 사용자 상태 관리

	const userList = useRecoilValue(userListState);
	// 대화 상대방
	const otherUser = userList.find((user) => user.id === userId);

	const otherUserIndex = Number(otherUser?.id);

	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	const [counterUserIndex, setCounterUserIndex] = useState(otherUserIndex);

	let currentUser = userList[currentUserIndex];
	let counterUser = userList[counterUserIndex];

	console.log(currentUser);

	//console.log(otherUserIndex);

	const toggleUser = () => {
		setCurrentUserIndex(counterUserIndex);
		setCounterUserIndex(currentUserIndex);
	};

	const sendMessage = (content: string, from: string, to: string) => {
		const newMessage: Message = {
			id: Date.now(),
			from,
			to,
			content,
			date: new Date().toISOString(),
		};

		// 이전 메시지 배열과 새로운 메시지를 합침
		const updatedMessages = [...messages, newMessage];
		setMessages(updatedMessages);

		// localStorage에 업데이트된 메시지 저장
		localStorage.setItem(`messages_${userId}`, JSON.stringify(updatedMessages));
	};

	return (
		<>
			
				<ChatHead
					user={counterUser ?? { name: 'Unknown', image: 'default.png' }}
					onUserClick={toggleUser}
				/>
				<ChatBody
					messages={messages}
					userImage={counterUser?.image ?? ''}
					currentUser={currentUser?.id ?? currentUser?.id}
				/>
                  <ChatBottomMask /> 
				<div ref={messagesEndRef} />
				<ChatBottom
					onSendMessage={(content) =>
						sendMessage(content, currentUser?.id ?? '', counterUser?.id ?? '')
					}
				/>
			
		</>
	);
};

export default ChattingRoom;
