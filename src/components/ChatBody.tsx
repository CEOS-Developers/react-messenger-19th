
import React from 'react';
import {
	ChatBodyContainer,
	TimeDisplay,
	DateSeparator,
	ChatMessageBox,
    UserProfileImage
    
} from '../style/ChatBodyStyle';

interface Message {
	id: number;
	from: string;
	content: string;
	date: string;
}

interface ChatBodyProps {
	messages: Message[];
	currentUser: string;
}

const formatDate = (isoDateString: string) => {
	const date = new Date(isoDateString);
	return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

const formatTime = (isoDateString: string) => {
	const date = new Date(isoDateString);
	return `${date.getHours().toString().padStart(2, '0')}:${date
		.getMinutes()
		.toString()
		.padStart(2, '0')}`;
};

const ChatBody: React.FC<ChatBodyProps> = ({ messages, currentUser }) => {
	let lastDate = '';


	return (
		<ChatBodyContainer>
			{messages.map((message, index) => {
				const messageDate = formatDate(message.date);
				let displayDateSeparator = false;
				if (messageDate !== lastDate) {
					lastDate = messageDate;
					displayDateSeparator = true;
				}

				return (
					<React.Fragment key={message.id}>
						{displayDateSeparator && (
							<DateSeparator>{formatDate(message.date)}</DateSeparator>
						)}
                    <TimeDisplay>{formatTime(message.date)}</TimeDisplay>
						<ChatMessageBox isCurrentUser={message.from === currentUser}>
							<div>{message.content}</div>
						</ChatMessageBox>
                        <UserProfileImage src='/item/profile_mini.png' isCurrentUser={message.from === currentUser}/>
					</React.Fragment>
				);
			})}
		</ChatBodyContainer>
	);
};

export default ChatBody;