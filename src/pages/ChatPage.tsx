import Header from '../components/@common/Header';
import ChatHeader from '../components/chatPage/ChatHeader';
import ChatFooter from '../components/chatPage/ChatFooter';
import Footer from '../components/@common/Footer';
import ChatContainer from '../components/chatPage/ChatContainer';

export default function ChatPage() {
  return (
    <>
      <Header />
      <ChatHeader />
      <ChatContainer />
      <ChatFooter />
      <Footer />
    </>
  );
}
