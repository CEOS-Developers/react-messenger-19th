import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { FindIcon, AlbumsIcon, MoreIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import userData from '../../assets/data/userData.json';
import { useNavigate } from 'react-router-dom';
import { userIdState } from '../../recoil/atom';

export default function Header() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);

  return (
    <Wrapper>
      <Title>대화</Title>
      <Right>
        <FindIcon />
        <AlbumsIcon />
        <MoreIcon />
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  /* padding: 0.8rem; */

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.p`
  ${flexCenter}
  padding: 0.7rem 1.4rem;

  ${({ theme }) => theme.fonts.chats};
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
