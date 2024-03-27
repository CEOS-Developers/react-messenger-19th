import styled from 'styled-components';

const StyledHomeIndicator = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-start;
`;

const StyledHomeIndicatorImage = styled.img``;

export default function HomeIndicator() {
  return (
    <StyledHomeIndicator>
      <StyledHomeIndicatorImage src="/icons/iphoneHomeIndicator.png" />
    </StyledHomeIndicator>
  );
}
