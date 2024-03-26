import styled from 'styled-components';
import IphoneStatusBar from '@components/fixed/IphoneStatusBar/IphoneStatusBar';

const StyledAppMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function AppMain() {
  return (
    <StyledAppMain>
      <IphoneStatusBar />
    </StyledAppMain>
  );
}
