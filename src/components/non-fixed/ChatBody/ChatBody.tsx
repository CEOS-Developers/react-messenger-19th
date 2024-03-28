import { useEffect } from 'react';
import styled from 'styled-components';
import DateDivider from '@components/non-fixed/ChatBody/DateDivider/DateDivider';
import ChatLog from '@components/non-fixed/ChatBody/ChatLog/ChatLog';

const StyledChatBodyContainer = styled.div`
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
`;

export default function ChatBody() {
  // 여기에서 json 데이터를 불러와서 날짜별로 쪼갠다. 그리고 구분선, 메시지,메시지, 다시 구분선 메시지 메시지 느낌으로 나눠준다
  return (
    <StyledChatBodyContainer>
      <DateDivider dateString="2024-03-19T20:45:00.000Z" />
      <ChatLog />
    </StyledChatBodyContainer>
  );
}
