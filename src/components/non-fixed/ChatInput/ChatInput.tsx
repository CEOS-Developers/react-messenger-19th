import styled from 'styled-components';
import ChatInputForm from '@components/non-fixed/ChatInput/ChatInputForm';

const StyledChatInputContainer = styled.div`
  width: 375px;
  /* height: auto; */
  min-height: 90px;
  padding-bottom: 34px;
  background-color: ${(props) => props.theme.color.white};
  opacity: 0.95;
`;

export default function ChatInput() {
  return (
    <StyledChatInputContainer>
      <ChatInputForm />
    </StyledChatInputContainer>
  );
}
