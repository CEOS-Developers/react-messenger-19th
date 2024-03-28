import styled from 'styled-components';
import * as ST from '@styles/styledComponents';

import { useRecoilState } from 'recoil';
import { isInputBoxFocusedState } from '@context/state/atom';

const StyledChatInputForm = styled.form`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 0 16px;
`;

const StyledPlusButton = styled.img`
  ${ST.hoverCursor};
`;

const StyledInputBoxContainer = styled.div`
  height: 40px;
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
`;

const StyledInputBox = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  text-indent: 16px;
  font-size: 15px;
  font-weight: 400;
  font-family: Pretendard;
  background-color: ${(props) => props.theme.color.grayMedium};
  border-radius: 20px;
  padding: 0;
  padding-right: 40px; // 텍스트가 스마일 표시를 넘어가지 않게
`;

const StyledSmilingIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 8px;
  bottom: 8px;
`;

const StyledStaleSendIcon = styled.img`
  /* ${ST.hoverCursor}; */
`;

const StyledClearSendIcon = styled.img``;

export default function ChatInputForm() {
  const [isInputBoxFocused, setIsInputBoxFocused] = useRecoilState(
    isInputBoxFocusedState
  );

  function handleToggleIsInputBoxFocused() {
    setIsInputBoxFocused((prev) => !prev);
  }

  return (
    <StyledChatInputForm>
      {isInputBoxFocused === false && (
        <StyledPlusButton src="/images/circlePlus.svg" />
      )}
      <StyledInputBoxContainer>
        <StyledInputBox
          onFocus={handleToggleIsInputBoxFocused}
          onBlur={handleToggleIsInputBoxFocused}
        />
        <StyledSmilingIcon src="/images/smileEmoji.svg" />
      </StyledInputBoxContainer>
      {isInputBoxFocused === false ? (
        <StyledStaleSendIcon src="/images/staleSend.svg" />
      ) : (
        <StyledStaleSendIcon src="/images/clearSend.svg" />
      )}
    </StyledChatInputForm>
  );
}
