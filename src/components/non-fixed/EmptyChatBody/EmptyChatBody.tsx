import styled from 'styled-components';

const StyledEmptyChatBody = styled.div`
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
  width: 343px;
  overflow-y: scroll;
`;

export default function EmptyChatBody() {
  return <StyledEmptyChatBody className="scroll-box"></StyledEmptyChatBody>;
}
