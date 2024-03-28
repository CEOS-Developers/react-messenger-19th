import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

interface ChatBottomProps {
	onSendMessage: (messageContent: string) => void;
}

const ChatBottom: React.FC<ChatBottomProps> = ({ onSendMessage }) => {
	const [inputValue, setInputValue] = useState('');

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputValue.trim()) {
			onSendMessage(inputValue.trim());
			setInputValue('');
		}
	};

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setInputValue(e.target.value)
				}
				onKeyPress={handleKeyPress}
			/>
		</div>
	);
};

export default ChatBottom;
