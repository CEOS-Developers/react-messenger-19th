import styled from 'styled-components';
import theme from '@styles/theme';

interface FooterCardProps {
  TitleComponent: React.FC;
  title: string;
  currentURL: boolean;
}

interface FooterCardStyleProps {
  $currentURL: boolean;
}

export default function FooterCard({
  TitleComponent,
  title,
  currentURL,
}: FooterCardProps) {
  return (
    <FooterCardContainter>
      <FooterSVGStyle $currentURL={currentURL}>
        <TitleComponent />
      </FooterSVGStyle>
      <FooterTitleStyle $currentURL={currentURL}>{title}</FooterTitleStyle>
    </FooterCardContainter>
  );
}

const FooterSVGStyle = styled.div<FooterCardStyleProps>`
  color: ${(props) =>
    props.$currentURL ? theme.colors.black : theme.colors.gray_3};
`;

const FooterTitleStyle = styled.div<FooterCardStyleProps>`
  font-size: ${theme.textStyles.caption1.font_size};
  line-height: ${theme.textStyles.caption1.line_height};
  font-weight: ${theme.textStyles.caption1.font_weight};
  color: ${(props) =>
    props.$currentURL ? theme.colors.black : theme.colors.gray_3};
`;

const FooterCardContainter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  flex-grow: 1;
  &:hover {
    background-color: ${theme.colors.gray_5};
  }
`;
