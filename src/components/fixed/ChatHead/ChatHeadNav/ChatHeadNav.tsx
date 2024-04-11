import styled from 'styled-components';
import ChatHeadNavLeft from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavLeft';
import ChatHeadNavRight from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavRight';

export const StyledChatHeadNav = styled.nav`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function ChatHeadNav() {
  return (
    <StyledChatHeadNav>
      <ChatHeadNavLeft />
      <ChatHeadNavRight />
    </StyledChatHeadNav>
  );
}
