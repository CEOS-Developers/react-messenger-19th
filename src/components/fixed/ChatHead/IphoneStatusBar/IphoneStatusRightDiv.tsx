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
      <StyledMobileSignalImage
        src="/images/mobileSignal.svg
      "
      />
      <StyledWifiImage src="/images/Wifi.svg" />
      <StyledBatteryImage src="/images/_StatusBar-battery.svg" />
    </StyledIphoneStatusRightDiv>
  );
}
