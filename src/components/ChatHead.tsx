import React from 'react';

interface User {
	name: string;
	image: '../item/profile_mini.png';
}

interface ChatHeadProps {
	user: User;
	onUserClick: () => void;
}

const ChatHead: React.FC<ChatHeadProps> = () => {
	return <div></div>;
};

export default ChatHead;
