import styled from "styled-components"
import theme from "@styles/theme"
import {ReactComponent as SettingSvg} from "@assets/svg/setting.svg"
import {ReactComponent as PlusSvg} from "@assets/svg/peoplePlus.svg"

interface MainHeaderProps {
  title: string;
}

export default function MainHeader({title}: MainHeaderProps) {
  return (
    <MainHeaderContainer>
      <MainTitle>{title}</MainTitle>
      <SettingSvg />
      <PlusSvg />
    </MainHeaderContainer>
  )
}

const MainTitle = styled.div`
  font-size: ${theme.textStyles.title.font_size};
  line-height: ${theme.textStyles.title.line_height};
  font-weight: ${theme.textStyles.title.font_weight};
  color: ${theme.colors.black};
  flex-grow: 1;
`;

const MainHeaderContainer = styled.article`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 8px;
  gap: 12px;
`;
