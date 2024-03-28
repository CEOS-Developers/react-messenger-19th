import styled from 'styled-components';
import ChatInputForm from '@components/non-fixed/ChatInput/ChatInputForm';
// input 박스와 종이 비행기 UI 간의 간격 차이는 8px이고 종이비행기와 전체 박스는 16px로 어느 상황에서나 same
// 아이템 간의 간격은 8px이고 양 끝단 item과 박스 간의 간격은 16px임. 따라서 전체 상자의 padding을 그냥 16px로 고정하면 됨

const StyledChatInputContainer = styled.div`
  width: 375px;
  height: auto;
  min-height: 90px;
  position: absolute;
  bottom: 0;
  padding-bottom: 34px;
  background-color: ${(props) => props.theme.color.white};
`;

export default function ChatInput() {
  return (
    <StyledChatInputContainer>
      <ChatInputForm />
    </StyledChatInputContainer>
  );
}
