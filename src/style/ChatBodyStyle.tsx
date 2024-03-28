import styled, { css } from 'styled-components';

export const ChatMessageBox = styled.div<{ isCurrentUser: boolean }>`
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  background-color: lightgray;
  align-self: flex-start;

  ${(props) =>
    props.isCurrentUser &&
    css`
      background-color: lightblue;
      align-self: flex-end;
    `}
`;

export const ChatBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateSeparator = styled.div`
  width: 7.625rem;
  height: 1.3125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #D9D9D9;
  color: #000;
  text-align: center;
  margin: 10px auto; // 정중앙 정렬
`;

export const TimeDisplay = styled.span`
  display: block; // 메시지 박스 위에 표시
  text-align: center; // 정중앙 정렬
  margin-bottom: 5px;
`;