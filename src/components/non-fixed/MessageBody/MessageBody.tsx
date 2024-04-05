import styled from 'styled-components';

const StyledMessageBody = styled.section`
  flex-grow: 1;
  overflow-y: scroll;
`;

export default function MessageBody() {
  return (
    <StyledMessageBody className="scroll-box">
      This is Messages Body
    </StyledMessageBody>
  );
}
