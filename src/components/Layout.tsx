import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "components/Footer";

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  position: relative;
  width: 37.5rem;
  height: 81.2rem;
  margin: 0 auto;
  background-color: var(--gray02);
  border-radius: 2.4rem;
`;
