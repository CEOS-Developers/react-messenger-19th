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
        <SentName onClick={handleUser}>{userData.data.find((user) => user.id === userId)?.name}</SentName>
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

const Left = styled.span`
  ${flexCenter}
  gap: 0.4rem;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const SentName = styled.p`
  ${({ theme }) => theme.fonts.sent_person_large};
  color: ${({ theme }) => theme.colors.black};
`;

const Right = styled.span`
  ${flexCenter}
  gap: 0.2rem;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
