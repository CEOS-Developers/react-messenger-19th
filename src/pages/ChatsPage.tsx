import BottomTabBar from '../components/BottomTabBar/BottomTabBar';
import ChatsList from '../components/Chats/ChatsList';
import TopNavBar from '../components/TopNavBar/TopNavBar';
import Edit from '../assets/img/edit.svg';

export default function ChatsPage() {
  return (
    <>
      <TopNavBar leftText="Edit" rightImgSrc={Edit} title="Chats" />
      <ChatsList />
      <BottomTabBar />
    </>
  );
}
