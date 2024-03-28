import React from 'react';

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

const ChatBody: React.FC<ChatBodyProps> = ({ messages, currentUser }) => {
	return (
		<div>
			{messages.map((message) => (
				<div key={message.id}>
					<div>{message.from}</div>
					<div>{message.content}</div>
					<div>{message.date}</div>
				</div>
			))}
		</div>
	);
};

export default ChatBody;
