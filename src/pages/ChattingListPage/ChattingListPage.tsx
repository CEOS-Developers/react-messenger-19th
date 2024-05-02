import styled from 'styled-components';
import { type ChatCardProps } from '@type/common';
import Pic from '@assets/img/pic.png';
import StatusBox from '@components/StatusBox';
import ChatCard from './components/ChatCard';
import MainHeader from '@components/MainHeader';
import Input from '@components/Input';
import MainFooter from '@components/MainFooter';

const DUMMYChatCards: ChatCardProps[] = [
  {
    img: Pic,
    name: 'name1',
    lastMessage: 'lastMessage',
    date: 'date',
    unReadCount: 1,
  },
  {
    img: Pic,
    name: 'name2',
    lastMessage: 'lastMessage',
    date: 'date',
    unReadCount: 3,
  },
];

export default function ChattingListPage() {
  return (
    <ChattingListContainer>
      <StatusBox />
      <MainHeader title="채팅" />
      <Input />
      {DUMMYChatCards.map((chatCard, index) => (
        <ChatCard key={index} {...chatCard} />
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