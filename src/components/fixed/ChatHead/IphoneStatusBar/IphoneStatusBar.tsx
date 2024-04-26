import styled from 'styled-components';
import IphoneStatusLeftDiv from '@components/fixed/ChatHead/IphoneStatusBar/IphoneStatusLeftDiv';
import IphoneStatusRightDiv from '@components/fixed/ChatHead/IphoneStatusBar/IphoneStatusRightDiv';

const StyledIphoneStatusBar = styled.div`
  width: 375px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 195px;
  flex-shrink: 0;
`;

export default function IphoneStatusBar() {
  return (
    <StyledIphoneStatusBar>
      <IphoneStatusLeftDiv />
      <IphoneStatusRightDiv />
    </StyledIphoneStatusBar>
  );
}
