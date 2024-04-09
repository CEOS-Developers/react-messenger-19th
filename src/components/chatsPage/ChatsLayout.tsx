import styled from 'styled-components';
import userData from '../../assets/data/userData.json';
import ChatsBox from './ChatsBox';

export default function ChatsLayout() {
  return (
    <Wrapper>
      {userData.data
        .filter((user) => user.id >= 1)
        .map((user) => {
          const { id, name } = user;
          return <ChatsBox key={id} id={id} name={name} text={'안녕 못한다 이자식아'} time={'오전 10:06'} />;
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
