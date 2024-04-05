import styled from 'styled-components';
// 이미지는 friend.svg, messageLarge.svg, discord24.svg를 사용

const StyledTabIconContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 32px;
`;

const StyledIconContainer = styled.div`
  width: 56px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 6px;
`;

const StyledTabSpan = styled.span`
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 10px;
`;

export default function TabIconContainer() {
  return (
    <StyledTabIconContainer>
      <StyledIconContainer>
        <StyledImage src="/images/friend.svg" />
        <StyledTabSpan>친구</StyledTabSpan>
      </StyledIconContainer>
      <StyledIconContainer>
        <StyledImage src="/images/messageLarge.svg" />
        <StyledTabSpan>메시지</StyledTabSpan>
      </StyledIconContainer>
      <StyledIconContainer>
        <StyledImage src="/images/discord24.svg" />
        <StyledTabSpan>나</StyledTabSpan>
      </StyledIconContainer>
    </StyledTabIconContainer>
  );
}
