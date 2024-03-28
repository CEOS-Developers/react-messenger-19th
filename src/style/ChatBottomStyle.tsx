import styled from 'styled-components';

// ChatBottomContainer를 div로 변경하여 컨테이너로 사용
export const ChatBottomContainer = styled.div`
position: fixed;
bottom: 0;
width: 375px;
height: 80px;


	flex-shrink: 0;
	
	background-image: url('/item/chatBottom.png');
	background-size: cover;
`;

export const ChatInput = styled.input`
	width: 14.25rem;
	height: 2rem;
	flex-shrink: 0;
  font-size: 14px;

	border-radius: 1rem;
	border: 0.5px solid var(--gray, #8d8d8f);
	opacity: 0.4496;
	background: var(--white, #fff);
`;

export const SendButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  cursor: pointer;
  border: none;
`;