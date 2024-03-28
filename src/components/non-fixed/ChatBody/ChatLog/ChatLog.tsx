import styled from 'styled-components';
import ChatLogLeft from '@components/non-fixed/ChatBody/ChatLog/ChatLogLeft/ChatLogLeft';
import ChatLogRight from '@components/non-fixed/ChatBody/ChatLog/ChatLogRight/ChatLogRight';

const StyledChatLogContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  column-gap: 8px;
`;

export default function ChatLog() {
  return (
    <StyledChatLogContainer>
      <ChatLogLeft isEqual={true} />
      <ChatLogRight />
    </StyledChatLogContainer>
  );
}
