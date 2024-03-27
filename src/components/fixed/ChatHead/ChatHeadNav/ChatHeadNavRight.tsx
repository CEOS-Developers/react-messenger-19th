import styled from 'styled-components';

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
`;

const StyledChatHeadNavRightBalloonImg = styled.img``;

export default function ChatHeadNavRight() {
  return (
    <StyledChatHeadNavRight>
      <StyledChatHeadNavRightCallImg
        src="/icons/callCircle.png"
        alt="This is call png image"
      />
      <StyledChatHeadNavRightBalloonImg src="/icons/chatBalloon.png" />
    </StyledChatHeadNavRight>
  );
}
