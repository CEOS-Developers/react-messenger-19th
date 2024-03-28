import styled from 'styled-components';
import { dateStringProps } from 'types/type';
import { dateBeforeAfter } from '@styles/styledComponents';

const StyledDateDividerContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledDateDivider = styled.div`
  &::before {
    ${dateBeforeAfter}
    left: -8px;
  }

  &::after {
    ${dateBeforeAfter}
    right: -8px;
  }
  font-size: 13px;
  font-weight: 500;
  line-height: 19.5px;
`;

export default function DateDivider({ dateString }: dateStringProps) {
  const [year, month, day] = dateString.slice(0, 10).split('-');

  return (
    <StyledDateDividerContainer>
      <StyledDateDivider>{`${year}년 ${month}월 ${day}일`}</StyledDateDivider>
    </StyledDateDividerContainer>
  );
}
