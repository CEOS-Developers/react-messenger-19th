import styled from 'styled-components';
import userData from '../../assets/data/userData.json';
import chatData from '../../assets/data/chatData.json';
import ChatsBox from './ChatsBox';
import { chatsState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';

export default function ChatsLayout() {
  const chats = useRecoilValue(chatsState);

  return (
    <Wrapper>
      {userData.data
        .filter((user) => user.id >= 1)
        .map((user) => {
          const { id, name } = user;

          const filteredChats = [...chatData.data, ...chats].filter((chat) => {
            return (chat.from === 0 && chat.to === id) || (chat.to === 0 && chat.from === id);
          });

          const lastChat = filteredChats.length > 0 ? filteredChats[filteredChats.length - 1] : null;
          const text = lastChat ? lastChat.details.text : '';
          const time = lastChat ? lastChat.details.time : '';

          return <ChatsBox key={id} id={id} name={name} text={text} time={time} />;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 63.6rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: scroll;
`;
