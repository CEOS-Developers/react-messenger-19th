import styled from 'styled-components';
import { flexCenter } from '../../styles/GlobalStyle';
import userData from '../../assets/data/userData.json';
import chatData from '../../assets/data/chatData.json';
import { useRecoilValue } from 'recoil';
import { chatsState } from '../../recoil/atom';
import RcvrBox from './RcvrBox';
import SenderBox from './SenderBox';
import { ChatType } from '../../types/types';
import { useEffect, useRef } from 'react';
import formatDate from '../../utils/formatDate';

export default function BoxLayout() {
  const currentId = parseInt(localStorage.getItem('userId') || '');

  const chats = useRecoilValue(chatsState);
  const backupChats = JSON.parse(localStorage.getItem('bckup') || '[]');

  const scrollEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <Wrapper>
      <Date>오늘</Date>
      <Layout>
        {[...chatData.data, ...backupChats].map((chat: ChatType) => {
          const { id, details } = chat;
          const user = userData.data.find((user) => user.id === currentId);
          if (!user) return null; //user undefined 타입스크립트 에러 때문에
          if (chat.from === currentId) {
            return <RcvrBox key={id} name={user.name} text={details.text} time={formatDate(details.time)} />;
          } else if (chat.to === currentId) {
            return <SenderBox key={id} time={formatDate(details.time)} text={details.text} />;
          }
          return null; //chat undefined 타입스크립트 에러 때문에
        })}
        <div ref={scrollEndRef} />
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 63.6rem;
  padding: 1rem 0.8rem 0;

  background-color: ${({ theme }) => theme.colors.blue_bg};
  overflow-y: scroll;
`;

const Date = styled.p`
  ${flexCenter}
  position:absolute;
  left: 16rem;
  width: 3.8rem;
  height: 2.3rem;
  padding: 0.8rem 1rem;
  border-radius: 1.15rem;

  ${({ theme }) => theme.fonts.date};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.navy_bg};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.3rem;
  margin-bottom: 1rem;
  gap: 0.8rem;
`;
