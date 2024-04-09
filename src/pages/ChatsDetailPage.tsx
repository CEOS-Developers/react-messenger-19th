import Header from '../components/chatsDetailPage/Header';
import Footer from '../components/chatsDetailPage/Footer';
import { Outlet } from 'react-router-dom';

export default function ChatsDetailPage() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
