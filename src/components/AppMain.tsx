import styled from 'styled-components';
import ChatHead from '@components/fixed/ChatHead/ChatHead';
import ChatBody from '@components/non-fixed/ChatBody/ChatBody';
import ChatInput from '@components/non-fixed/ChatInput/ChatInput';
import HomeIndicator from '@components/fixed/HomeIndicator/HomeIndicator';

const StyledAppMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 34px;
`;

export default function AppMain() {
  return (
    <StyledAppMain>
      <ChatHead />
      <ChatBody />
      <ChatInput />
      <HomeIndicator />
    </StyledAppMain>
  );
}
