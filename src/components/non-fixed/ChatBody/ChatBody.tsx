import styled from 'styled-components';
import DateDivider from '@components/non-fixed/ChatBody/DateDivider/DateDivider';

const StyledChatBodyContainer = styled.div`
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
`;

export default function ChatBody() {
  return (
    <StyledChatBodyContainer>
      <DateDivider dateString="2024-03-19T20:45:00.000Z" />
    </StyledChatBodyContainer>
  );
}
