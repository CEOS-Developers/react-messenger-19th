import React from 'react';
import { ChatHeadContainer, UserImage, UserName } from '../style/ChatHeadStyle';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    image: string;
}

const ChatHead: React.FC<{ user: User }> = ({ user }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/chattinglist`);
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
