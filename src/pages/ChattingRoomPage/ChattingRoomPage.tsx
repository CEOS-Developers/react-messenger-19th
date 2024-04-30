import theme from '@styles/theme';
import styled from 'styled-components';
import ChatBottom from './components/ChatBottom';
import ChatHead from './components/ChatHead';
import Chatting from './components/Chatting';

export default function ChattingRoomPage() {
  return (
    <ContainerLayout>
      <ChatHead />
      <Chatting />
      <ChatBottom />
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: ${theme.colors.blue};
  @media (min-width: 768px) {
    width: 375px;
  }
`;
