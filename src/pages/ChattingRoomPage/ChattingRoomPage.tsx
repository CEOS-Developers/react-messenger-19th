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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.blue};
`;
