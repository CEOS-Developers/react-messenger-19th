import styled from 'styled-components';
import IphoneStatusLeftDiv from '@components/fixed/IphoneStatusBar/IphoneStatusLeftDiv';
import IphoneStatusRightDiv from '@components/fixed/IphoneStatusBar/IphoneStatusRightDiv';

const StyledIphoneStatusBar = styled.div`
  position: absolute;
  top: 0;
  width: 375px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 195px;
`;

export default function IphoneStatusBar() {
  return (
    <StyledIphoneStatusBar>
      <IphoneStatusLeftDiv />
      <IphoneStatusRightDiv />
    </StyledIphoneStatusBar>
  );
}
