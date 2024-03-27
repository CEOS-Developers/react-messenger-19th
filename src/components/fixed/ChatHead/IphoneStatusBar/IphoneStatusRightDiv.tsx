import styled from 'styled-components';
import {
  StyledBatteryImage,
  StyledMobileSignalImage,
  StyledWifiImage,
} from './IphoneStatusbarImage';

const StyledIphoneStatusRightDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 23.6px;
  display: center;
`;

export default function IphoneStatusRightDiv() {
  return (
    <StyledIphoneStatusRightDiv>
      <StyledMobileSignalImage src="/icons/MobileSignal.png" />
      <StyledWifiImage src="/icons/Wifi.png" />
      <StyledBatteryImage src="/icons/_StatusBar-battery.png" />
    </StyledIphoneStatusRightDiv>
  );
}
