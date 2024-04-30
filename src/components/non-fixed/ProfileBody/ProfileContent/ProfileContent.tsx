import styled from 'styled-components';

const StyledProfileContent = styled.div`
  flex-grow: 1;

  margin-top: 44px;
  background-color: ${(props) => props.theme.color.grayLight};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledProfileNameContainer = styled.div`
  width: 120px;
  height: 68px;
  margin-top: 47px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 4px;
`;

const StyledUsername = styled.p`
  width: 100%;
  height: 41px;
  font-size: ${(props) => props.theme.textStyle.fontSize.h1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.h1};
  font-weight: 600;
  color: ${(props) => props.theme.color.black};
  font-family: Pretendard;
  text-align: center;
`;

const StyledStudy = styled.div`
  width: 77px;
  height: 23px;
  font-size: ${(props) => props.theme.textStyle.fontSize.body1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body1};
  font-weight: 500;
  font-family: Prtendard;
  color: ${(props) => props.theme.color.grayDark};
  text-align: center;
`;

const StyledSnsContainer = styled.div`
  width: 343px;
  height: 64px;
  border-radius: 20px;
  padding: 16px;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
  > a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

const SnsImage = styled.img`
  width: 32px;
  height: 32px;
`;

const SnsName = styled.p`
  width: 231px;
  height: 100%;
  font-size: ${(props) => props.theme.textStyle.fontSize.body1};
  line-height: ${(props) => props.theme.textStyle.lineHeight.body1};
  font-family: Pretendard;
  font-weight: 500;
  color: ${(props) => props.theme.textStyle.lineHeight.body1};
  display: flex;
  align-items: center;
`;

export default function ProfileContent() {
  return (
    <StyledProfileContent>
      <StyledProfileNameContainer>
        <StyledUsername>김정민</StyledUsername>
        <StyledStudy>ceos_study</StyledStudy>
      </StyledProfileNameContainer>
      <StyledSnsContainer>
        <SnsImage src="/images/Instagram.svg" style={{ borderRadius: '50%' }} />
        <SnsName>Instagram</SnsName>
        <a
          href={
            'https://www.instagram.com/l0uise_my_day?igsh=bnN6dDhvYXFnM2Nz&utm_source=qr'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <SnsImage src="/images/rightarrow.svg" />
        </a>
      </StyledSnsContainer>
      <StyledSnsContainer>
        <SnsImage src="/images/GitHub.svg" />
        <SnsName>Github</SnsName>
        <a
          href={'https://github.com/Programming-Seungwan'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SnsImage src="/images/rightarrow.svg" />
        </a>
      </StyledSnsContainer>
    </StyledProfileContent>
  );
}
