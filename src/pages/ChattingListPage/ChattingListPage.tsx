import styled from 'styled-components';
import { type ChatCardProps } from '@type/common';
import Pic from '@assets/img/pic.png';
import StatusBox from '@components/StatusBox';
import ChatCard from './components/ChatCard';
import MainHeader from '@components/MainHeader';
import Input from '@components/Input';
import MainFooter from '@components/MainFooter';
import { useRecoilValue } from 'recoil';
import { chatDataState } from '@recoil/chatAtom';
import { useNavigate } from 'react-router-dom';

const DUMMYChatCards: ChatCardProps[] = [
  {
    img: Pic,
    name: '플래시',
    lastMessage: 'lastMessage',
    date: 'date',
    unReadCount: 1,
  },
  {
    img: Pic,
    name: '이그나이트',
    lastMessage: 'lastMessage',
    date: 'date',
    unReadCount: 3,
  },
];

export default function ChattingListPage() {
  const chatList = useRecoilValue(chatDataState);
  const navigate = useNavigate();
  const handleClick = (clickedName:string) => {
    chatList.map((chat) => {
      if(chat.name === clickedName) {
        navigate(`/chattingroom/${chat.id}`);
      }
      return null;
    });
  }

  return (
    <ChattingListContainer>
      <StatusBox />
      <MainHeader title="채팅" />
      <Input />
      {DUMMYChatCards.map((chatCard, index) => (
        <ChatCard key={index} {...chatCard} onClick={handleClick}/>
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