import styled from 'styled-components';
import * as ST from '@styles/styledComponents';

const StyledChatHeadNavRight = styled.div`
  height: 32px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 16px;
`;

const StyledChatHeadNavRightCallImg = styled.img`
  width: 32px;
  height: 32px;
  ${ST.hoverCursor}
`;

const StyledChatHeadNavRightBalloonImg = styled.img`
  width: 32px;
  height: 32px;
  ${ST.hoverCursor}
`;

export default function ChatHeadNavRight() {
  return (
    <StyledChatHeadNavRight>
      <StyledChatHeadNavRightCallImg src="/images/circleCall.svg" />
      <StyledChatHeadNavRightBalloonImg src="/images/circleMessage.svg" />
    </StyledChatHeadNavRight>
  );
}
