import styled from 'styled-components';
import * as ST from '@styles/styledComponents';

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
`;

const StyledSmilingIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 8px;
  bottom: 8px;
`;

const StyledStaleSendIcon = styled.img`
  ${ST.hoverCursor};
`;

const StyledClearSendIcon = styled.img``;

export default function ChatInputForm() {
  return (
    <StyledChatInputForm>
      <StyledPlusButton src="/images/circlePlus.svg" />
      <StyledInputBoxContainer>
        <StyledInputBox placeholder="메시지 보내기" />
        <StyledSmilingIcon src="/images/smileEmoji.svg" />
      </StyledInputBoxContainer>
      <StyledStaleSendIcon src="/images/staleSend.svg" />
    </StyledChatInputForm>
  );
}
