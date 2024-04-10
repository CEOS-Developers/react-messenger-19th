import ChatsNavBar from '../components/Chats/ChatsNavBar';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';
import ChatsList from '../components/Chats/ChatsList';

export default function ChatsPage() {
  return (
    <>
      <ChatsNavBar />
      <ChatsList />
      <BottomTabBar />
    </>
  );
}
