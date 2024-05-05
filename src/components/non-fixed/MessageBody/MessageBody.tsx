import styled from 'styled-components';
import MessageSearchHead from '@components/non-fixed/MessageBody/MessageSearchHead/MessageSearchHead';
import MessageListContainer from '@components/non-fixed/MessageBody/MessageList/MessageListContainer';

const StyledMessageBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function MessageBody() {
  return (
    <StyledMessageBody className="scroll-box">
      <MessageSearchHead />
      <MessageListContainer />
    </StyledMessageBody>
  );
}
