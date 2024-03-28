import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

interface ChatBottomProps {
	onSendMessage: (messageContent: string) => void;
}

const ChatBottom: React.FC<ChatBottomProps> = ({ onSendMessage }) => {
	return (
		<div>
			<input type='text' value='' />
		</div>
	);
};

export default ChatBottom;
