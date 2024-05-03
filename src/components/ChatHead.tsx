import React from 'react';
import { ChatHeadContainer, UserImage, UserName } from '../style/ChatHeadStyle';

interface User {
	name: string;
	image: string;
}

interface ChatHeadProps {
	user: User;
	onUserClick: () => void;
}

const ChatHead: React.FC<ChatHeadProps> = ({
	user,
	onUserClick = () => {},
}) => {
	return (
		<ChatHeadContainer onClick={onUserClick}>
			<UserImage
				src={user.image}
				alt='Profile'
				style={{ width: '34px', height: '34px', borderRadius: '50%' }}
			/>
			<UserName>{user.name}</UserName>
		</ChatHeadContainer>
	);
};

export default ChatHead;
