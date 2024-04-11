import {
  StyledChatHeadNavLeft,
  StyledChatHeavNavLeftBackImg,
  StyledChatHeadNavLeftDiscordImage,
  StyledUserNameSpan,
} from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavLeft';
import ChatHeadNavRight from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavRight';
import styled from 'styled-components';

const StyledEmptyChatHeadNav = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function EmptyChatHeadNav({
  username,
}: {
  username: string | undefined; // 공백이 올 수도 있다
}) {
  return (
    <StyledEmptyChatHeadNav>
      <StyledChatHeadNavLeft>
        <StyledChatHeavNavLeftBackImg src="/images/leftArrow.svg" />
        <StyledChatHeadNavLeftDiscordImage src="/images/dicord_2.svg" />
        <StyledUserNameSpan>{username}</StyledUserNameSpan>
      </StyledChatHeadNavLeft>
      <ChatHeadNavRight />
    </StyledEmptyChatHeadNav>
  );
}
