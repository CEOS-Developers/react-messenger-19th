import styled from 'styled-components';

const StyledChatHeadNavLeft = styled.div`
  width: 122px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
`;

const StyledChatHeavNavLeftBackImg = styled.img``;

const StyledChatHeadNavLeftDiscordImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const StyledUserNameSpan = styled.span`
  font-size: ${(props) => props.theme.textStyle.fontSize.h3};
  font-weight: 600;
`;

export default function ChatHeadNavLeft() {
  return (
    <StyledChatHeadNavLeft>
      <StyledChatHeavNavLeftBackImg
        src="/icons/Type=Back.png"
        alt="This is back arrow png"
      />
      <StyledChatHeadNavLeftDiscordImage
        src="/icons/dicord_2.png"
        alt="This is discord green image"
      />
      <StyledUserNameSpan>김정민</StyledUserNameSpan>
    </StyledChatHeadNavLeft>
  );
}
