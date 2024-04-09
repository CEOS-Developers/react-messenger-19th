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
  cursor: pointer;
`;

const LeftImg = styled.img`
  width: 0.75rem;
  height: 1.25rem;
`;

const Text = styled.div<TextProps>`
  white-space: nowrap;
  color: #1bd742;
  font-family: 'SF Pro Text';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
  ${(props) =>
    !props.$hasLeftImg &&
    `
      margin-left: 0.44rem; // leftImgSrc가 없을 때 적용될 스타일
    `}
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

// Text 컴포넌트의 prop 타입 정의
interface TextProps {
  $hasLeftImg: boolean;
}

interface TopNavBarProps {
  leftImgSrc?: string;
  leftText?: string;
  rightImgSrc?: string;
  rightText?: string;
  children?: React.ReactNode;
  leftTextOnClick?: () => void;
}

// props 추가 (leftImgSrc, leftText, rightImgSrcs, rightText)
export default function TopNavBar({
  leftImgSrc,
  leftText,
  rightImgSrc,
  rightText,
  children,
  leftTextOnClick,
}: TopNavBarProps) {
  return (
    <NavBarContainer>
      <LeftContainer onClick={leftTextOnClick}>
        {leftImgSrc && <LeftImg src={leftImgSrc} alt="이전 버튼 이미지" />}
        <Text $hasLeftImg={!!leftImgSrc}>{leftText}</Text>
      </LeftContainer>
      {children} {/* 여기에 children을 렌더링 */}
      <RightContainer>
        {rightImgSrc && <IconImg src={rightImgSrc} alt="" />}
        {rightText && <Text $hasLeftImg={true}>{rightText}</Text>}
      </RightContainer>
    </NavBarContainer>
  );
}
