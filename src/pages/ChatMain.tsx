import styled from 'styled-components';
import ChatHead from '@components/fixed/ChatHead/ChatHead';
import ChatBody from '@components/non-fixed/ChatBody/ChatBody';
import ChatInput from '@components/non-fixed/ChatInput/ChatInput';
import HomeIndicator from '@components/fixed/HomeIndicator/HomeIndicator';

const StyledChatMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function ChatMain() {
  return (
    <StyledChatMain>
      <ChatHead />
      <ChatBody />
      <ChatInput />
      <HomeIndicator />
    </StyledChatMain>
  );
}
