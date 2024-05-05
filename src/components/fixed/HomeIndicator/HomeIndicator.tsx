import styled from 'styled-components';

const StyledHomeIndicator = styled.div`
  width: 100%;
  height: 34px;
  position: absolute;
  bottom: 0;
  background-color: transparent;
`;

const StyledHomeIndicatorImage = styled.img`
  position: absolute;
  top: 21px;
  right: 120px;
  bottom: 8px;
  left: 121px;
`;

export default function HomeIndicator() {
  return (
    <StyledHomeIndicator>
      <StyledHomeIndicatorImage src="/images/HomeIndicator.svg" />
    </StyledHomeIndicator>
  );
}
