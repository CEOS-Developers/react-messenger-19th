import styled from 'styled-components'
import theme from '@styles/theme';
import { ReactComponent as IndicatorsGroupSvg } from '@assets/svg/indicatorsGroup.svg';
import { ReactComponent as ClockSvg } from '@assets/svg/clock.svg';

export default function StatusBox() {
  return (
    <Statusbox>
        <ClockSvg />
        <IndicatorsGroupSvg />
      </Statusbox>
  )
}

const Statusbox = styled.div`
  width: 375px;
  flex-shrink: 0;
  background-color: ${theme.colors.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 0 48px;
  height: 47px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;