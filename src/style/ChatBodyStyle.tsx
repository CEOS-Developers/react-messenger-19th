import styled, { css } from 'styled-components';

export const ChatMessageBox = styled.div<{ isCurrentUser: boolean }>`
display:inline-block;
  padding: 5px;
  width:196px;
  margin: 5px;
  border-radius: 8px;
  background-color: #EDEDED;
  align-self: flex-start;
  font-size: 16px;
  border-radius: 20px 20px 5px 20px;



  ${(props) =>
    props.isCurrentUser &&
    css`
      background-color: #DCF7C5;
      align-self: flex-end;
    `}
`;

export const ChatBodyContainer = styled.div`

  display: flex;
  flex-direction: column;
  margin-top: 96px;
  margin-bottom:80px;



`;

export const UserProfileImage = styled.img<{ isCurrentUser: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 0px; /* 메시지 박스와의 간격 */
  display:inline-block;
 
  ${(props) =>
    props.isCurrentUser &&
    css`
     display:none;
    `}
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
  font-size: 12px;

`;