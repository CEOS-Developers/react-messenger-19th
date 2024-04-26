import {
  StyledChatHeadNavLeft,
  StyledChatHeavNavLeftBackImg,
  StyledChatHeadNavLeftDiscordImage,
  StyledUserNameSpan,
} from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavLeft';
import ChatHeadNavRight from '@components/fixed/ChatHead/ChatHeadNav/ChatHeadNavRight';
import styled from 'styled-components';
import { userNumberState } from '@context/state/atom';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { makeUserIdNumber } from '@utils/makeUserIdNumber';

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
  // 상단 이름 부분을 누르면 벌어져야 하는일 --> userNumber가 바뀌어야 한다. 그에 따라서 이름도 바뀌어야 한다
  function handleClickHeadName() {
    if (userNumber === 1) {
      setUserNumber(makeUserIdNumber(username));
    } else {
      setUserNumber(1);
    }
  }

  return (
    <StyledEmptyChatHeadNav>
      <StyledChatHeadNavLeft>
        <StyledChatHeavNavLeftBackImg
          src="/images/leftArrow.svg"
          onClick={handleClickArrowBackImage}
        />
        <StyledChatHeadNavLeftDiscordImage
          src="/images/dicord_2.svg"
          onClick={handleClickHeadName}
        />
        <StyledUserNameSpan onClick={handleClickHeadName}>
          {userNumber !== 1 ? '김승완' : username}
        </StyledUserNameSpan>
      </StyledChatHeadNavLeft>
      <ChatHeadNavRight />
    </StyledEmptyChatHeadNav>
  );
}
