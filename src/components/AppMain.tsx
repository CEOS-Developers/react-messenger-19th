import styled from 'styled-components';
import ChatHead from '@components/fixed/ChatHead/ChatHead';
import ChatInput from '@components/non-fixed/ChatInput/ChatInput';
import HomeIndicator from '@components/fixed/HomeIndicator/HomeIndicator';

const StyledAppMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function AppMain() {
  return (
    <StyledAppMain>
      <ChatHead />
      <ChatInput />
      <HomeIndicator />
    </StyledAppMain>
  );
}
