import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userListState } from '../state/userState';
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
  const userList = useRecoilValue(userListState);
  const currentUser = userList.find((user) => user.id === userId);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem(`messages_${userId}`);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, [userId]);

  const sendMessage = (content: string, from: string, to: string) => {
    const newMessage = {
      id: Date.now(),
      from,
      to,
      content,
      date: new Date().toISOString(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

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
