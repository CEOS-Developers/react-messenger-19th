import ChatHeader from '../components/chatPage/ChatHeader';
import ChatFooter from '../components/chatPage/ChatFooter';
import ChatContainer from '../components/chatPage/ChatContainer';
import { useState } from 'react';
import { MsgType } from '../types/types';

export default function ChatsDetailPage() {
  const [list, setList] = useState<MsgType[]>([]);
  const [userId, setUserId] = useState(0);

  return (
    <>
      <ChatHeader userId={userId} setUserId={setUserId} />
      <ChatContainer list={list} userId={userId} />
      <ChatFooter list={list} setList={setList} />
    </>
  );
}
