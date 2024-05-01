import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <LayoutStyle>
      <Outlet />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  @media (min-width: 768px) {
    width: 375px;
  }
`;
