import styled from 'styled-components';
import * as ST from '@styles/styledComponents';
import { useRecoilState } from 'recoil';
import { userNumberState } from '@context/state/atom';
import { useNavigate } from 'react-router-dom';

export const StyledChatHeadNavLeft = styled.div`
  width: 122px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
`;

export const StyledChatHeavNavLeftBackImg = styled.img`
  width: 24px;
  height: 24px;
  ${ST.hoverCursor}
  margin-right: 8px;
`;

export const StyledChatHeadNavLeftDiscordImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${ST.hoverCursor}
  margin-left: 8px;
  margin-right: 4px;
`;

export const StyledUserNameSpan = styled.span`
  font-size: ${(props) => props.theme.textStyle.fontSize.h3};
  line-height: ${(props) => props.theme.textStyle.lineHeight.h3};
  font-weight: 600;
  ${ST.hoverCursor}
  margin-left: 4px;
  white-space: nowrap;
`;

export default function ChatHeadNavLeft() {
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);
  const navigate = useNavigate();

  function handleClickChangeUserMode() {
    if (userNumber === 1) {
      setUserNumber(2);
    } else if (userNumber === 2) {
      setUserNumber(1);
    }
  }

  function handleClickArrowBackImage() {
    setUserNumber(1); // 뒤로 가면 userNumeber는 원상태로 초기화
    navigate('/messages');
  }

  return (
    <StyledChatHeadNavLeft>
      <StyledChatHeavNavLeftBackImg
        src="/images/leftArrow.svg"
        onClick={handleClickArrowBackImage}
      />
      <StyledChatHeadNavLeftDiscordImage
        src="/images/dicord_2.svg"
        onClick={handleClickChangeUserMode}
      />
      {userNumber === 1 ? (
        <StyledUserNameSpan onClick={handleClickChangeUserMode}>
          김정민
        </StyledUserNameSpan>
      ) : (
        <StyledUserNameSpan onClick={handleClickChangeUserMode}>
          김승완
        </StyledUserNameSpan>
      )}
    </StyledChatHeadNavLeft>
  );
}
