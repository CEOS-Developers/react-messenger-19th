import styled from 'styled-components';
import { BackArrowIcon, FindIcon, CallIcon, IndexIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import userData from '../../assets/data/userData.json';

interface ChatHeaderProps {
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChatHeader(props: ChatHeaderProps) {
  const { userId, setUserId } = props;

  function handleUser() {
    const newUserId = userId === 0 ? 1 : 0;
    setUserId(newUserId);
  }

  return (
    <Wrapper>
      <Left>
        <BackArrowIcon />
        <p onClick={handleUser}>{userData.data.find((user) => user.id === userId)?.name}</p>
      </Left>
      <Right>
        <FindIcon />
        <CallIcon />
        <IndexIcon />
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.blue_bg};
`;

const Left = styled.div`
  ${flexCenter}
  gap: 0.4rem;

  ${({ theme }) => theme.fonts.sent_person_large};
  color: ${({ theme }) => theme.colors.black};

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const Right = styled.div`
  ${flexCenter}
  gap: 0.2rem;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
