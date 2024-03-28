import React from 'react';
import {
	ChatBodyContainer,
	TimeDisplay,
	DateSeparator,
	ChatMessageBox,
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
						<ChatMessageBox isCurrentUser={message.from === currentUser}>
							<div>{message.from}</div>
							<div>{message.content}</div>
							<TimeDisplay>{formatTime(message.date)}</TimeDisplay>
						</ChatMessageBox>
					</React.Fragment>
				);
			})}
		</ChatBodyContainer>
	);
};

export default ChatBody;
