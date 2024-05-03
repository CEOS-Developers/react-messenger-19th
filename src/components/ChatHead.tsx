import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatHeadContainer, UserImage, UserName } from '../style/ChatHeadStyle';

interface User {
    name: string;
    image: string;
}

interface ChatHeadProps {
    user: User;
}

const ChatHead: React.FC<ChatHeadProps> = ({ user }) => {
    const history = useHistory();

    const handleUserClick = () => {
        history.push('/chattinglist');
    };

    return (
        <ChatHeadContainer onClick={handleUserClick}>
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
