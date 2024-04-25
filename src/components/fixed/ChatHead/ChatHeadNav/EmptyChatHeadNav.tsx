import {
  StyledChatHeadNavLeft,
  StyledChatHeavNavLeftBackImg,
  StyledChatHeadNavLeftDiscordImage,
  StyledUserNameSpan,
} from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavLeft';
import ChatHeadNavRight from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavRight';
import styled from 'styled-components';
import { userNumberState } from '@context/state/atom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

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
  const navigate = useNavigate();
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);

  function handleClickArrowBackImage() {
    setUserNumber(1);
    navigate('/messages');
  }

  return (
    <StyledEmptyChatHeadNav>
      <StyledChatHeadNavLeft>
        <StyledChatHeavNavLeftBackImg
          src="/images/leftArrow.svg"
          onClick={handleClickArrowBackImage}
        />
        <StyledChatHeadNavLeftDiscordImage src="/images/dicord_2.svg" />
        <StyledUserNameSpan>{username}</StyledUserNameSpan>
      </StyledChatHeadNavLeft>
      <ChatHeadNavRight />
    </StyledEmptyChatHeadNav>
  );
}
