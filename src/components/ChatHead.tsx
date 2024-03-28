import React from 'react';

interface User {
	name: string;
	image: '../item/profile_mini.png';
}

interface ChatHeadProps {
	user: User;
	onUserClick: () => void;
}

const ChatHead: React.FC<ChatHeadProps> = ({ user, onUserClick }) => {
	return (
		<div onClick={onUserClick}>
			<img
				src={user.image}
				alt='Profile'
				style={{ width: '50px', height: '50px', borderRadius: '50%' }}
			/>
			<h2>{user.name}</h2>
		</div>
	);
};

export default ChatHead;
