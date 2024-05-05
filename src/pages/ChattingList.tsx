// src/pages/ChattingList.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';
//import { chatListState } from '../state/chatListState'; // 대화 목록 상태
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
	const userList = useRecoilValue(userListState);

	return (
		<div>
			{userList.slice(1).map((user) => (
				<div key={user.id}>
					<Link to={`/chattingroom/${user.id}`}>{user.name}</Link>
				</div>
			))}
		</div>
	);
};

export default ChattingList;
