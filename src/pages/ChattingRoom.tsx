import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';
import { messagesState } from '../state/messageState';
import ChatHead from '../components/ChatHead';
import ChatBody from '../components/ChatBody';
import ChatBottom from '../components/ChatBottom';

interface Message {
  id: number;
  from: string;
  to: string;
  content: string;
  date: string;
}

const ChattingRoom = () => {
  const { userId } = useParams<{ userId: string }>();
  const messagesStateValue = useRecoilValue(messagesState);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // 로컬 스토리지에서 이전 메시지 가져오기
    const storedMessages = localStorage.getItem(`messages_${userId}`);
    if (storedMessages) {
      // 이전 메시지가 있으면 파싱하여 상태에 설정
      setMessages(JSON.parse(storedMessages));
    }
  }, [userId]); // userId가 변경될 때마다 이펙트 재실행
  

  const userList = useRecoilValue(userListState);
  const currentUser = userList.find(user => user.id === userId);

  const sendMessage = (content: string, from: string, to: string) => {
    const newMessage: Message = {
      id: Date.now(),
      from,
      to,
      content,
      date: new Date().toISOString(),
    };
  
    // 이전 메시지 배열과 새로운 메시지를 합침
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
  
    // localStorage에 업데이트된 메시지 저장
    localStorage.setItem(`messages_${userId}`, JSON.stringify(updatedMessages));
  };
  

  return (
    <div>
      <ChatHead user={currentUser || { name: '', image: '' }} />
      <ChatBody
        messages={messages}
        userImage={currentUser?.image ?? ''}
        currentUser={currentUser?.name ?? ''}
      />
      <ChatBottom
        onSendMessage={(content) =>
          sendMessage(content, currentUser?.name ?? '', userId ?? '')
        }
      />
    </div>
  );
};

export default ChattingRoom;
