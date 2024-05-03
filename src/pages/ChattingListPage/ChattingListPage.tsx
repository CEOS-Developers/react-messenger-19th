import styled from 'styled-components';
import StatusBox from '@components/StatusBox';
import ChatCard from './components/ChatCard';
import MainHeader from '@components/MainHeader';
import Input from '@components/Input';
import MainFooter from '@components/MainFooter';
import { useRecoilValue } from 'recoil';
import { chatDataState } from '@recoil/chatAtom';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@util/calculateDate';

export default function ChattingListPage() {
  const chatList = useRecoilValue(chatDataState);
  const navigate = useNavigate();
  const handleClick = (clickedName: string) => {
    chatList.map((chat) => {
      if (chat.name === clickedName) {
        navigate(`/chattingroom/${chat.id}`);
      }
      return null;
    });
  };
  const today = formatDate(new Date());

  return (
    <ChattingListContainer>
      <StatusBox />
      <MainHeader title="채팅" />
      <Input />
      {chatList.map((chatCard, index) => (
        <ChatCard
          key={index}
          img={chatCard.img}
          name={chatCard.name}
          lastMessage={chatCard.chat[chatCard.chat.length - 1].content}
          date={
            chatCard.chat[chatCard.chat.length - 1].date === today
              ? chatCard.chat[chatCard.chat.length - 1].time
              : chatCard.chat[chatCard.chat.length - 1].date.slice(5)
          }
          unReadCount={chatCard.unReadCount}
          onClick={handleClick}
        />
      ))}
      <MainFooter />
    </ChattingListContainer>
  );
}

const ChattingListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
