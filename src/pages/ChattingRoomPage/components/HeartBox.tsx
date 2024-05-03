import theme from '@styles/theme';
import styled from 'styled-components';
import { ReactComponent as HeartSvg } from '@assets/svg/heart.svg';

export default function HeartBox() {
  return (
    <HeartBoxContatiner>
      <HeartSvg />
      <span>1</span>
    </HeartBoxContatiner>
  );
}

const HeartBoxContatiner = styled.section`
  width: 32px;
  height: 22px;
  padding: 0 6px 0px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.yellow};
  font-size: 8px;
  background-color: ${theme.colors.darkblue};
  border-radius: 24px;
`;
