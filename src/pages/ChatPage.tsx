import Header from '../components/@common/Header';
import ChatHeader from '../components/chatPage/ChatHeader';
import ChatFooter from '../components/chatPage/ChatFooter';
import Footer from '../components/@common/Footer';
import ChatContainer from '../components/chatPage/ChatContainer';
import { useState } from 'react';
import { MessageTypes } from '../components/chatPage/ChatFooter';

export default function ChatPage() {
  const [list, setList] = useState<MessageTypes[]>([]);

  return (
    <>
      <Header />
      <ChatHeader />
      <ChatContainer list={list} setList={setList} />
      <ChatFooter list={list} setList={setList} />
      <Footer />
    </>
  );
}
