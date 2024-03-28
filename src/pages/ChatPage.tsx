import Header from '../components/@common/Header';
import ChatHeader from '../components/chatPage/ChatHeader';
import ChatFooter from '../components/chatPage/ChatFooter';
import Footer from '../components/@common/Footer';
import ChatContainer from '../components/chatPage/ChatContainer';
import { useState } from 'react';
import { MsgType } from '../types/types';

// import { useSetRecoilState } from 'recoil';
// import { useRecoilValue } from 'recoil';

export default function ChatPage() {
  const [list, setList] = useState<MsgType[]>([]);
  const [userId, setUserId] = useState(0);

  return (
    <>
      <Header />
      <ChatHeader userId={userId} setUserId={setUserId} />
      <ChatContainer list={list} userId={userId}/>
      <ChatFooter list={list} setList={setList}/>
      <Footer />
    </>
  );
}
