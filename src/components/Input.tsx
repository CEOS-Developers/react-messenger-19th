import styled from 'styled-components';
import theme from '@styles/theme';
import { ReactComponent as SearchSvg } from '@assets/svg/search.svg';

export default function Input() {
  return <InputContainer>
    <SearchSvg />
    <InputStyle type="text" placeholder="검색" />
  </InputContainer>;
}

const InputContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  gap: 4px;
  background-color: ${theme.colors.gray_5};
  margin: 0 16px;
  border-radius: 5px;
  flex-shrink: 1;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: ${theme.textStyles.body1_1.font_size};
  line-height: ${theme.textStyles.body1_1.line_height};
  font-weight: ${theme.textStyles.body1_1.font_weight};
  color: ${theme.colors.black};
  background-color: ${theme.colors.gray_5};
  outline: none;
`;