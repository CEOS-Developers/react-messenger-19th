import styled from 'styled-components';

const StyledIphoneStatusLeftDiv = styled.div`
  width: 54px;
  height: 21px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 3px;
  font-size: 17px;
  font-weight: 700;
  margin-left: 25px;
`;

export default function IphoneStatusLeftDiv() {
  return <StyledIphoneStatusLeftDiv>9:41</StyledIphoneStatusLeftDiv>;
}
