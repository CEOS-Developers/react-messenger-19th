import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

import {
	ChatBottomContainer,
	ChatInput,
	SendButton,
} from '../style/ChatBottomStyle';

interface ChatBottomProps {
	onSendMessage: (messageContent: string) => void;
}

const ChatBottom: React.FC<ChatBottomProps> = ({ onSendMessage }) => {
	const [inputValue, setInputValue] = useState('');

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputValue.trim()) {
			sendMessage();
		}
	};

	const sendMessage = () => {
		if (inputValue.trim()) {
			onSendMessage(inputValue.trim());
			setInputValue(''); 
		}
	};

	return (
		<ChatBottomContainer>
			<ChatInput
				type='text'
				value={inputValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setInputValue(e.target.value)
				}
				onKeyPress={handleKeyPress}
			/>
			<SendButton onClick={sendMessage}></SendButton>
		</ChatBottomContainer>
	);
};

export default ChatBottom;
