import styled from 'styled-components';

const NavBarContainer = styled.div<{ $noBorderBottom?: boolean }>`
  width: 23.4375rem;
  height: 2.75rem;
  border-bottom: ${(props) =>
    props.$noBorderBottom ? 'none' : '0.03125rem solid #a4a39e'};
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

interface TextProps {
  $hasLeftImg: boolean;
}

interface TopNavBarProps {
  leftImgSrc?: string;
  leftText?: string;
  rightImgSrc?: string;
  rightText?: string;
  children?: React.ReactNode;
  leftTextOnClick?: () => void; // 클릭을 통해 이전 페이지로 돌아가기 위함
  $noBorderBottom?: boolean; // edit-contact page에서는 테두리 없애기 위함
}

export default function TopNavBar({
  leftImgSrc,
  leftText,
  rightImgSrc,
  rightText,
  children,
  leftTextOnClick,
  $noBorderBottom,
}: TopNavBarProps) {
  return (
    <NavBarContainer $noBorderBottom={$noBorderBottom}>
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
