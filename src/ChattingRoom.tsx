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

function ChattingRoom() {
	return <div></div>;
}

export default ChattingRoom;
