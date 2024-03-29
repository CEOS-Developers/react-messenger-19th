import styled from 'styled-components';
import * as ST from '@styles/styledComponents';
import { useRecoilState } from 'recoil';
import { useRef } from 'react';
import {
  isInputBoxFocusedState,
  messageDataState,
  messageDateArrayState,
  userNumberState,
} from '@context/state/atom';
import { adjustTimeForUserLocation } from '@utils/makeTimeString';
import sortByDate from '@utils/sortArrayByDate';

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
  const [messageData, setMessageData] = useRecoilState(messageDataState);
  const [messageDateArray, setMessageDateArray] = useRecoilState(
    messageDateArrayState
  );
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);

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
    } else if (isInputBoxFocused === true) {
      ev.preventDefault();

      const createdAt = adjustTimeForUserLocation();
      const createdDate = createdAt.slice(0, 10);
      const content = inputRef.current?.value as string;
      const from = userNumber;
      const like = false;

      const newMessageData = {
        content: content,
        createdAt: createdAt,
        createdDate: createdDate,
        from: from,
        like: like,
      };

      const tmpMessageData = Object.assign({}, messageData);

      const tmpMessageDateArray = [...messageDateArray];

      if (tmpMessageData[createdDate] === undefined) {
        tmpMessageData[createdDate] = [];
        tmpMessageData[createdDate].push(newMessageData);
      } else {
        console.log(tmpMessageData[createdDate]);
        // 기존의 배열을 구조분해하여 다른 메모리 값을 가진 배열로 받음
        const prevDateArray = [...tmpMessageData[createdDate]];
        prevDateArray.push(newMessageData);
        tmpMessageData[createdDate] = prevDateArray;
      }

      if (!tmpMessageDateArray.includes(createdDate)) {
        tmpMessageDateArray.push(createdDate);
        tmpMessageDateArray.sort(sortByDate);
      }
      setMessageData(tmpMessageData);
      setMessageDateArray(tmpMessageDateArray);
      localStorage.setItem('chatMessageData', JSON.stringify(tmpMessageData));
      localStorage.setItem(
        'chatMessageDateArray',
        JSON.stringify(tmpMessageDateArray)
      );
      if (inputRef.current !== null) {
        inputRef.current.value = '';
      }
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
