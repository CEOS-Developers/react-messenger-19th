import styled from 'styled-components';
import IphoneStatusBar from '@components/fixed/ChatHead/IphoneStatusBar/IphoneStatusBar';
import ChatHeadNav from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNav';

const StyledChatHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 111px;
`;

export default function ChatHead() {
  return (
    <StyledChatHead>
      <IphoneStatusBar />
      <ChatHeadNav />
    </StyledChatHead>
  );
}
