import styled from 'styled-components';

const StyledHomeIndicator = styled.div`
  width: 100%;
  height: 34px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  z-index: 10;
  background-color: transparent;
  /* opacity: 0; */
`;

const StyledHomeIndicatorImage = styled.img``;

export default function HomeIndicator() {
  return (
    <StyledHomeIndicator>
      <StyledHomeIndicatorImage src="/images/iphoneHomeIndicator.svg" />
    </StyledHomeIndicator>
  );
}
