import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import IphoneStatusBar from '@components/fixed/ChatHead/IphoneStatusBar/IphoneStatusBar';
import HomeIndicator from '@components/fixed/HomeIndicator/HomeIndicator';

const StyledCommonLayout = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function CommonLayout() {
  return (
    <StyledCommonLayout>
      <IphoneStatusBar />
      <Outlet />
      <HomeIndicator />
    </StyledCommonLayout>
  );
}
