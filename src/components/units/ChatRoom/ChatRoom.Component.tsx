import { type ChangeEvent, useState, useRef, useEffect } from 'react';
import * as C from './ChatRoom.styles';

import MyFirstMessage from './MyFirstMessage';
import YourFirstMessage from './YourFirstMessage';
import { UserData } from '../../../lib/data';
import { useRecoilState } from 'recoil';
import { chatMessagesState } from '../../../context/ChatDataState';
import type { Message, User } from '../../../lib/types';
import { Link } from 'react-router-dom';

export default function ChatRoomComponent(): JSX.Element {
	const me = UserData[0];
	const opposite = UserData[1]; // 임시 지정 대화 상대
	const [oppositeChat, setOppositeChat] = useState<string>(opposite.name);
	const [user, setUser] = useState<string>(me.name);
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useRecoilState(chatMessagesState);

	// 로컬 스토리지에서 메시지 불러오기
	useEffect(() => {
		const storedMessages = localStorage.getItem('chatMessages');
		if (storedMessages) {
			setMessages(JSON.parse(storedMessages));
		}
	}, [setMessages]);

	// 메시지 상태가 변경될 때마다 로컬 스토리지에 저장
	useEffect(() => {
		localStorage.setItem('chatMessages', JSON.stringify(messages));
	}, [messages]);

	const chatContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (chatContainerRef.current) {
			const { scrollHeight, clientHeight } = chatContainerRef.current;
			chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
		}
	}, [messages]);

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
			const sentDate = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD' 형식으로 날짜 저장
			const newMessage: Message = {
				userId: user === me.name ? me.userId : opposite.userId,
				name: user === me.name ? me.name : opposite.name,
				text: trimmedMessage, // 공백이 제거된 메시지 내용
				sender: me.name, // 혹은 다른 식별 가능한 사용자 정보
				sentTime,
				sentDate,
			};

			setMessages(prevMessages => [...prevMessages, newMessage]);
		}

		// 메시지 입력 필드 초기화
		setMessage('');
	};

	// User Change
	const onClickChangeUser = (): void => {
		// if (user === me.name) {
		// 	setUser(opposite.name);
		// 	setOppositeChat(me.name);
		// } else {
		// 	setUser(me.name);
		// 	setOppositeChat(opposite.name);
		// }
		setUser(user === me.name ? opposite.name : me.name);
		setOppositeChat(user === me.name ? opposite.name : me.name);
	};

	return (
		<C.Wrapper>
			<C.ChatHeader>
				<C.HeaderBox>
					<Link to={'/ChatList'}>
						<C.SVGIcon src="/ChatRoom/back.svg" />
					</Link>
					<C.Name onClick={onClickChangeUser}>{oppositeChat}</C.Name>
				</C.HeaderBox>
				<C.HeaderBox>
					<C.SVGIcon src="/ChatRoom/search.svg" />
					<C.SVGIcon src="/ChatRoom/call.svg" />
					<C.SVGIcon src="/ChatRoom/more.svg" />
				</C.HeaderBox>
			</C.ChatHeader>

			<C.ChatContainer ref={chatContainerRef} className="ChatContainer">
				{messages.map((msg, index) => (
					<>
						{isNewDay(index, messages) && (
							<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
								<C.DateSeparator>{formatDate(msg.sentDate)}</C.DateSeparator>
							</div>
						)}
						{renderMessage(msg, index, user, me, opposite, messages)}
					</>
				))}
			</C.ChatContainer>

			<C.InputContainer>
				<C.SVGIcon src="/ChatRoom/add.svg" />
				<C.ChatForm onSubmit={onSubmitForm}>
					<C.ChatInput type="text" onChange={onChangeMessage} value={message} />
					<button type="submit" style={{ border: 'none', background: 'transparent' }}>
						<C.SVGIcon src="/ChatRoom/send.svg" />
					</button>
				</C.ChatForm>
			</C.InputContainer>
		</C.Wrapper>
	);
}
// yyyy년 mm월 dd일 @요일
function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	};
	return new Date(dateString).toLocaleDateString('ko-KR', options);
}

function isNewDay(index: number, messages: Message[]): boolean {
	return index === 0 || messages[index - 1].sentDate !== messages[index].sentDate;
}

function renderMessage(
	msg: Message,
	index: number,
	user: string,
	me: User,
	opposite: User,
	messages: Message[],
): JSX.Element {
	return msg.userId === (user === me.name ? me.userId : opposite.userId) ? (
		<MyFirstMessage
			key={index}
			message={msg.text}
			sentTime={msg.sentTime}
			isContinuous={isContinuous(index, messages)}
		/>
	) : (
		<YourFirstMessage
			key={index}
			message={msg.text}
			name={msg.name}
			sentTime={msg.sentTime}
			isContinuous={isContinuous(index, messages)}
		/>
	);
}

function isContinuous(index: number, messages: Message[]) {
	return (
		index > 0 &&
		messages[index - 1].userId === messages[index].userId &&
		messages[index - 1].sentTime === messages[index].sentTime
	);
}
