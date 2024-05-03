import styled from 'styled-components';
import theme from '@styles/theme';
import { ReactComponent as IndicatorsGroupSvg } from '@assets/svg/indicatorsGroup.svg';
import { ReactComponent as ClockSvg } from '@assets/svg/clock.svg';
import { useLocation } from 'react-router-dom';

interface StatusBoxStyleProps {
  $path: string;
}

export default function StatusBox() {
  const path = useLocation().pathname.slice(0,13);
  return (
    <StatusboxStyle $path={path}>
      <ClockSvg />
      <IndicatorsGroupSvg />
    </StatusboxStyle>
  );
}

const StatusboxStyle = styled.div<StatusBoxStyleProps>`
  width: 375px;
  flex-shrink: 0;
  background-color: ${(props) =>
    props.$path === '/chattingroom' ? theme.colors.blue : theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 0 48px;
  height: 47px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
