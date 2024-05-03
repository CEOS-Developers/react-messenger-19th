import styled from 'styled-components';
import theme from '@styles/theme';

interface SNSBoxProps {
  img: string;
  title: string;
}

export default function SNSBox({ img, title }: SNSBoxProps) {
  return (
    <SNSBoxContainer>
      <SNSBoxImg src={img}></SNSBoxImg>
      <SNSBoxTitle>{title}</SNSBoxTitle>
    </SNSBoxContainer>
  );
}

const SNSBoxImg = styled.img`
  width: 22px;
  height: 22px;
  background-color: ${theme.colors.gray_3};
`;

const SNSBoxTitle = styled.p`
  font-size: ${theme.textStyles.caption5.font_size};
  font-weight: ${theme.textStyles.caption5.font_weight};
  line-height: ${theme.textStyles.caption5.line_height};
  color: ${theme.colors.white};
`;

const SNSBoxContainer = styled.div`
  width: 52px;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
