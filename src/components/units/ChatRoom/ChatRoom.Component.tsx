import { type ChangeEvent, useState, type MouseEvent, useRef, useEffect } from 'react';
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

	// 입력창에 대한 참조 생성
	const divRef = useRef<HTMLInputElement | null>(null);

	// chatContainer 스크롤 하단 고정
	const chatContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// messages 배열이 변경될 때마다 실행
		if (chatContainerRef.current !== null) {
			const { scrollHeight, clientHeight } = chatContainerRef.current;
			chatContainerRef.current.scrollTop = scrollHeight - clientHeight; // 스크롤을 맨 아래로 이동
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
		if (user === me.name) {
			setUser(opposite.name);
			setOppositeChat(me.name);
		} else {
			setUser(me.name);
			setOppositeChat(opposite.name);
		}
	};

	useEffect(() => {
		const handleVisualViewPortResize = (): void => {
			const currentVisualViewport = window.visualViewport?.height ?? window.innerHeight;
			if (chatContainerRef.current !== null) {
				// 입력창의 높이를 visualViewport의 높이에서 일정 값을 뺀 값으로 설정
				chatContainerRef.current.style.height = `${currentVisualViewport - 30}px`;
				// 화면을 입력창의 위치로 스크롤
				window.scrollTo(0, 40);
			}
		};

		// visualViewport의 resize 이벤트에 핸들러 등록
		window.visualViewport?.addEventListener('resize', handleVisualViewPortResize);

		// 컴포넌트 언마운트 시 이벤트 핸들러 제거
		return () => {
			window.visualViewport?.removeEventListener('resize', handleVisualViewPortResize);
		};
	}, []);

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

			<C.ChatContainer ref={chatContainerRef} className="ChatContainer">
				{messages.map((msg, index) => {
					// 연속성(sentTime, userId) 판단
					const isContinuous =
						index > 0 &&
						messages[index - 1].userId === msg.userId &&
						messages[index - 1].sentTime === msg.sentTime;
					const isNewDay = index === 0 || messages[index - 1].sentDate !== msg.sentDate;

					return (
						<>
							{isNewDay && (
								<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
									<C.DateSeparator>{formatDate(msg.sentDate)}</C.DateSeparator>
								</div>
							)}
							{msg.userId === (user === me.name ? me.userId : opposite.userId) ? (
								<MyFirstMessage
									key={index}
									message={msg.text}
									sentTime={msg.sentTime}
									isContinuous={isContinuous}
								/>
							) : (
								<YourFirstMessage
									key={index}
									message={msg.text}
									name={msg.name}
									sentTime={msg.sentTime}
									isContinuous={isContinuous}
								/>
							)}
						</>
					);
				})}
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

function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	};
	return new Date(dateString).toLocaleDateString('ko-KR', options);
}
