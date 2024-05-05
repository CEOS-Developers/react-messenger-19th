import React from 'react';
import {
	ChatHeadContainer,
	UserImage,
	UserName,
	SendButton,
} from '../style/ChatHeadStyle';
import { useNavigate } from 'react-router-dom';

interface User {
	name: string;
	image: string;
}

interface ChatHeadProps {
	user: User;
	onUserClick: () => void;
}

const buttonImage = '/item/back.png';

const ChatHead: React.FC<ChatHeadProps> = ({ user, onUserClick }) => {
	const navigate = useNavigate();

	const handleUserClick = () => {
		navigate(`/chattinglist`);
	};

	return (
		<ChatHeadContainer onClick={onUserClick}>
			<SendButton src={buttonImage} onClick={handleUserClick} alt='Send' />
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
