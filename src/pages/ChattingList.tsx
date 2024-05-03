// src/pages/ChattingList.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { chatListState } from '../state/chatListState'; // 대화 목록 상태
import styled from 'styled-components';

const ChatListContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ChatItem = styled(Link)`
	width: 100%;
	padding: 10px;
	margin: 5px 0;
	background-color: #f0f0f0;
	color: black;
	text-decoration: none;
	border-radius: 5px;
	white-space: pre-line; 

	&:hover {
		background-color: #e0e0e0;
	}
`;


const ChattingList = () => {
	const chatList = useRecoilValue(chatListState); // Recoil 상태에서 대화 목록을 가져옴

	return (
		<ChatListContainer>
			{chatList.map((chat) => (
			<ChatItem key={chat.id} to={`/chattingroom/${chat.id}`}>
            {`${chat.partner}`} 
            {'\n'}
            ({chat.recentMsg} 최근 메시지)
          </ChatItem>
          
			))}
		</ChatListContainer>
	);
};

export default ChattingList;
