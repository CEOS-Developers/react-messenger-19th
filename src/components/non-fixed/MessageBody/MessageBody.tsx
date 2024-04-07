import styled from 'styled-components';
import MessageSearchHead from '@components/non-fixed/MessageBody/MessageSearchHead/MessageSearchHead';

const StyledMessageBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function MessageBody() {
  return (
    <StyledMessageBody className="scroll-box">
      <MessageSearchHead />
    </StyledMessageBody>
  );
}
