import styled from 'styled-components';

const NavBarContainer = styled.div`
  width: 23.4375rem;
  height: 2.75rem;
  border-bottom: 0.03125rem solid #a4a39e;
  position: relative;
`;

const LeftContainer = styled.div`
  display: inline-flex;
  padding: 0.625rem 0.5625rem;
  align-items: flex-start;
  gap: 0.3125rem;
  position: absolute;
  bottom: 0.13rem;
  right: 20.1rem;
`;

const LeftImg = styled.img`
  width: 0.75rem;
  height: 1.25rem;
`;

const Text = styled.div`
  color: #1bd742;
  font-family: 'SF Pro Text';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
`;

const RightContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.375rem;
  position: absolute;
  top: 0.63rem;
  right: 0.94rem;
`;

const IconImg = styled.img`
  height: 1.5rem;
`;

interface TopNavBarProps {
  leftImgSrc?: string;
  leftText?: string;
  rightImgSrc?: string;
  rightText?: string;
  children?: React.ReactNode;
}

// props 추가 (leftImgSrc, leftText, rightImgSrcs, rightText)
export default function TopNavBar({
  leftImgSrc,
  leftText,
  rightImgSrc,
  rightText,
  children,
}: TopNavBarProps) {
  return (
    <NavBarContainer>
      <LeftContainer>
        {leftImgSrc && <LeftImg src={leftImgSrc} alt="" />}
        <Text>{leftText}</Text>
      </LeftContainer>
      {children} {/* 여기에 children을 렌더링 */}
      <RightContainer>
        {rightImgSrc && <IconImg src={rightImgSrc} alt="" />}
        {rightText && <Text>{rightText}</Text>}
      </RightContainer>
    </NavBarContainer>
  );
}
