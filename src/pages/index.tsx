import { Outlet } from 'react-router-dom';
import Footer from '../components/@common/FooterIcon';

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
