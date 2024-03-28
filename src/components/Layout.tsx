import styled from 'styled-components';
import theme from '../styles/Theme';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  width: 37.5rem;
  height: 81.2rem;
  margin: 0 auto;
  background-color: ${theme.gray02};
  border-radius: 2.4rem;
`;
