import styled from 'styled-components';

const StyledProfilePageHead = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyldProfileHeadContainer = styled.div`
  width: 343px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
`;

const StyledProfileSpan = styled.span`
  font-size: ${(props) => props.theme.textStyle.fontSize.h2};
  font-weight: 600;
  line-height: ${(props) => props.theme.textStyle.lineHeight.h2};
  margin-left: 8px;
`;

const StyledProfileEditContainer = styled.div`
  width: 124px;
  height: 32px;
  background-color: ${(props) => props.theme.color.grayMedium};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledPencilImage = styled.img``;

const StyledEditSpan = styled.span`
  font-family: pretendard;
  font-size: ${(props) => props.theme.textStyle.fontSize.body1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body1};
  font-weight: 500;
  color: ${(props) => props.theme.color.grayDark};
`;

export default function ProfilePageHead() {
  return (
    <StyledProfilePageHead>
      <StyldProfileHeadContainer>
        <StyledProfileSpan>내 프로필</StyledProfileSpan>
        <StyledProfileEditContainer>
          <StyledPencilImage src="/images/edit.svg" />
          <StyledEditSpan>프로필 편집</StyledEditSpan>
        </StyledProfileEditContainer>
      </StyldProfileHeadContainer>
    </StyledProfilePageHead>
  );
}
