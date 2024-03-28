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

const StyledInputBox = styled.input`
  outline: none;
  border: none;
  height: 40px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.grayMedium};
  text-indent: 16px;
  font-size: 15px;
  font-weight: 400;
  font-family: Pretendard;
`;

const StyledStaleSendIcon = styled.img`
  ${ST.hoverCursor};
`;

const StyledClearSendIcon = styled.img``;

export default function ChatInputForm() {
  return (
    <StyledChatInputForm>
      <StyledPlusButton src="/images/circlePlus.svg" />
      <StyledInputBox placeholder="메시지 보내기" />
      <StyledStaleSendIcon src="/images/staleSend.svg" />
    </StyledChatInputForm>
  );
}
