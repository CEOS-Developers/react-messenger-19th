import styled from 'styled-components';
import * as ST from '@styles/styledComponents';
import { useRecoilState } from 'recoil';
import { useRef } from 'react';
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

const StyledSubmitButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
`;

const StyledClearSendIcon = styled.img`
  ${ST.hoverCursor};
`;

export default function ChatInputForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputBoxFocused, setIsInputBoxFocused] = useRecoilState(
    isInputBoxFocusedState
  );

  function handleToggleIsInputBoxFocused() {
    // 포커스가 되었는데 값이 있는 상태에서 블러가 풀리는 것으로 가면 상태를 변경시키지 않음 => 내용이 없는 상태에서 메시지 전송도 막아줌
    if (isInputBoxFocused && inputRef.current?.value !== '') {
      return;
    }
    setIsInputBoxFocused((prev) => !prev);
  }

  function handleSubmitForm(ev: any) {
    if (isInputBoxFocused === false) {
      ev.preventDefault();
      console.log('hi');
    } else if (isInputBoxFocused === true) {
      ev.preventDefault();
      console.log('good');
    }
  }

  return (
    <StyledChatInputForm onSubmit={handleSubmitForm}>
      {isInputBoxFocused === false && (
        <StyledPlusButton src="/images/circlePlus.svg" />
      )}
      <StyledInputBoxContainer>
        <StyledInputBox
          onFocus={handleToggleIsInputBoxFocused}
          onBlur={handleToggleIsInputBoxFocused}
          placeholder="메시지 보내기"
          ref={inputRef}
        />
        <StyledSmilingIcon src="/images/smileEmoji.svg" />
      </StyledInputBoxContainer>
      <StyledSubmitButton type="submit">
        {isInputBoxFocused === false ? (
          <StyledStaleSendIcon src="/images/staleSend.svg" />
        ) : (
          <StyledClearSendIcon src="/images/clearSend.svg" />
        )}
      </StyledSubmitButton>
    </StyledChatInputForm>
  );
}
