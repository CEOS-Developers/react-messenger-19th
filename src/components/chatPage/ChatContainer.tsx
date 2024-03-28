import styled from 'styled-components';
import { flexCenter } from '../../styles/GlobalStyle';
import { ProfileIcon } from '../../assets';
import chatData from '../../assets/data/chatData.json';
import { MsgType } from '../../types/types';
import { useEffect, useRef } from 'react';
interface ChatContainerProps {
  list: MsgType[];
}

function renderChat(data: MsgType) {
  return (
    <ChatBox $rcvd={data.rcvd}>
      {data.rcvd && !data.sequential && <ProfileIcon />}
      <Details $sequential={data.rcvd && !data.sequential}>
        {data.rcvd && !data.sequential && <Name>세오스</Name>}
        <Text $rcvd={data.rcvd}>{data.text}</Text>
      </Details>
    </ChatBox>
  );
}

export default function ChatContainer(props: ChatContainerProps) {
  const { list } = props;
  const listEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [list]);

  return (
    <Wrapper>
      <Date>어제</Date>
      <Layout>
        {chatData.data.map((data) => renderChat(data))}
        {list.map((data) => renderChat(data))}
        <div ref={listEndRef} />
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

  background: var(--blue-2, ${({ theme }) => theme.colors.navy_bg});
  ${({ theme }) => theme.fonts.date};
  color: ${({ theme }) => theme.colors.white};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.3rem;
  margin-bottom: 1rem;
  gap: 0.8rem;
`;

const ChatBox = styled.div<{ $rcvd: boolean }>`
  display: flex;
  justify-content: ${({ $rcvd }) => ($rcvd ? 'none' : 'end')};
  gap: 0.6rem;
`;

const Details = styled.div<{ $sequential: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ $sequential }) => ($sequential ? 'none' : '3.4rem')};
`;

const Name = styled.p`
  ${flexCenter}
  width: 3.1rem;
  height: 1.7rem;
  margin-bottom: 0.8rem;

  color: var(--3, ${({ theme }) => theme.colors.black});
  ${({ theme }) => theme.fonts.sent_person_small};
`;

const Text = styled.div<{ $rcvd: boolean }>`
  max-width: 20.4rem;
  padding: 0.8rem 1.2rem;
  border-radius: 1.6rem;

  ${({ theme }) => theme.fonts.message};
  color: var(--3, ${({ theme }) => theme.colors.black});
  background-color: ${({ theme, $rcvd }) => ($rcvd ? theme.colors.white : theme.colors.green_bg)};
`;

// const Status = styled.p`
//   ${({ theme }) => theme.fonts.sent_time};
//   color: var(--blue-3, ${({ theme }) => theme.colors.blue_txt});
// `;

// const TimeNow = styled.p`
//   width: 4.5rem;
//   height: 1.4rem;

//   ${({ theme }) => theme.fonts.sent_time};
//   color: var(--blue-3, ${({ theme }) => theme.colors.blue_txt});
// `;
