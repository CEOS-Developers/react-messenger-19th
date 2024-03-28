import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

import {
	ChatBottomContainer,
	ChatInput,
	SendButton,
} from '../style/ChatBottomStyle';

const sendIcon = '/item/sendIcon.png';
const micIcon = '/item/micIcon.png';

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

	// 입력된 텍스트에 따라 이미지 결정
	const buttonImage = inputValue.trim() ? sendIcon : micIcon;

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
			<SendButton src={buttonImage} onClick={sendMessage} alt='Send' />
		</ChatBottomContainer>
	);
};

export default ChatBottom;
