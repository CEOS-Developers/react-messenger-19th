import styled from 'styled-components';
import { isMessageOwnerEqualsWithModeProps } from 'type/type';

const StyledChatLogLeft = styled.div`
  width: auto;
  height: 100%;
`;

const StyledChatDiscordLogo = styled.img``;

export default function ChatLogLeft({
  isEqual,
}: isMessageOwnerEqualsWithModeProps) {
  return (
    <StyledChatLogLeft>
      {isEqual === true ? (
        <StyledChatDiscordLogo src="/images/discord40.svg" />
      ) : (
        <StyledChatDiscordLogo src="/images/discordGreen40.svg" />
      )}
    </StyledChatLogLeft>
  );
}
