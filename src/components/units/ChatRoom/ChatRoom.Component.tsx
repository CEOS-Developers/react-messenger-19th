import { type ChangeEvent, useState, type MouseEvent } from 'react';
import * as C from './ChatRoom.styles';

import MyFirstMessage from './MyFirstMessage';
import YourFirstMessage from './YourFirstMessage';
import userData from '../../../lib/UserData.json';
import { useRecoilState } from 'recoil';
import { chatMessagesState } from '../../../context/ChatDataState';
import type { Message } from '../../../lib/types';

export default function ChatRoomComponent(): JSX.Element {
	const me = userData.users[0];
	const opposite = userData.users[1]; // 임시 지정 대화 상대
	const [oppositeChat, setOppositeChat] = useState<string>(opposite.name);

	const [user, setUser] = useState<string>(me.name);
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useRecoilState(chatMessagesState);

	// 현재 시간을 24시간 형식으로 포맷
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0'); // 시간을 2자리로 포맷
	const minutes = now.getMinutes().toString().padStart(2, '0'); // 분을 2자리로 포맷
	const sentTime = `${hours}:${minutes}`; // 예: "23:59"

	const onChangeMessage = (event: ChangeEvent<HTMLInputElement>): void => {
		setMessage(event.currentTarget.value);
	};

	const onSubmitForm = (event: React.FormEvent): void => {
		event.preventDefault();
		onSubmitMessage();
	};

	const onSubmitMessage = (): void => {
		// 입력된 메시지에서 앞뒤 공백 제거
		const trimmedMessage = message.trim();

		// 공백만 있는 메시지는 전송하지 않음
		if (trimmedMessage !== '') {
			const newMessage: Message = {
				userId: user === me.name ? me.userId : opposite.userId,
				name: user === me.name ? me.name : opposite.name,
				text: trimmedMessage, // 공백이 제거된 메시지 내용
				sender: me.name, // 혹은 다른 식별 가능한 사용자 정보
				sentTime,
			};

			setMessages(prevMessages => [...prevMessages, newMessage]);
		}

		// 메시지 입력 필드 초기화
		setMessage('');
	};

	// User Change
	const onClickChangeUser = (): void => {
		if (user === me.name) {
			setUser(opposite.name);
			setOppositeChat(me.name);
		} else {
			setUser(me.name);
			setOppositeChat(opposite.name);
		}
	};

	return (
		<C.Wrapper>
			<C.ChatHeader>
				<C.HeaderBox>
					<C.SVGIcon src="./ChatRoom/back.svg" />
					<C.Name onClick={onClickChangeUser}>{oppositeChat}</C.Name>
				</C.HeaderBox>
				<C.HeaderBox>
					<C.SVGIcon src="./ChatRoom/search.svg" />
					<C.SVGIcon src="./ChatRoom/call.svg" />
					<C.SVGIcon src="./ChatRoom/more.svg" />
				</C.HeaderBox>
			</C.ChatHeader>

			<C.ChatContainer>
				{messages.map((msg, index) =>
					// 현재 메시지가 현재 활성 사용자에 의해 보내진 것인지 확인
					msg.userId === (user === me.name ? me.userId : opposite.userId) ? (
						// 현재 사용자가 보낸 메시지인 경우 (오른쪽에 위치시키기)
						<MyFirstMessage key={index} message={msg.text} sentTime={sentTime} />
					) : (
						// 현재 사용자가 받은 메시지인 경우 (왼쪽에 위치시키기)
						<YourFirstMessage key={index} message={msg.text} name={msg.name} sentTime={sentTime} />
					),
				)}
			</C.ChatContainer>

			<C.InputContainer>
				<C.SVGIcon src="./ChatRoom/add.svg" />
				<C.ChatForm onSubmit={onSubmitForm}>
					<C.ChatInput type="text" onChange={onChangeMessage} value={message} />
					<button type="submit" style={{ border: 'none', background: 'transparent' }}>
						<C.SVGIcon src="./ChatRoom/send.svg" />
					</button>
				</C.ChatForm>
			</C.InputContainer>
		</C.Wrapper>
	);
}
