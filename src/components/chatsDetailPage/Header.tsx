import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { BackArrowIcon, FindIcon, CallIcon, IndexIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import userData from '../../assets/data/userData.json';
import { useNavigate } from 'react-router-dom';
import { userIdState, ifChatsDetailPageState } from '../../recoil/atom';

export default function Header() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);
  const setIfChatsDetailPage = useSetRecoilState(ifChatsDetailPageState);

  function moveToChats() {
    navigate(`/chats`);
    setIfChatsDetailPage(false);
  }

  return (
    <Wrapper>
      <Left>
        <BackArrowIcon type="button" onClick={moveToChats} />
        <SentName>{userData.data.find((user) => user.id === userId)?.name}</SentName>
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
