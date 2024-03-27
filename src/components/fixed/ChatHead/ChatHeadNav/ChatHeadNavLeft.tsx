import styled from 'styled-components';
import * as ST from '@styles/styledComponents';

const StyledChatHeadNavLeft = styled.div`
  width: 122px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
`;

const StyledChatHeavNavLeftBackImg = styled.img`
  width: 24px;
  height: 24px;
  ${ST.hoverCursor}
  margin-right: 8px;
`;

const StyledChatHeadNavLeftDiscordImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${ST.hoverCursor}
  margin-left: 8px;
  margin-right: 4px;
`;

const StyledUserNameSpan = styled.span`
  font-size: ${(props) => props.theme.textStyle.fontSize.h3};
  line-height: ${(props) => props.theme.textStyle.lineHeight.h3};
  font-weight: 600;
  ${ST.hoverCursor}
  margin-left: 4px;
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
