import { css } from 'styled-components';

export const hoverCursor = css`
  &:hover {
    cursor: pointer;
  }
`;

export const dateBeforeAfter = css`
  content: '';
  position: absolute;
  top: 50%;
  width: 117px;
  height: 1px;
  background-color: ${(props) => props.theme.color.grayMedium};
`;

export const chatBodyDivElementGap = css`
  margin-bottom: 24px;
`;
