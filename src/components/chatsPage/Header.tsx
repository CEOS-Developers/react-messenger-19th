import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { FindIcon, AlbumsIcon, MoreIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import userData from '../../assets/data/userData.json';
import { useNavigate } from 'react-router-dom';
import { userIdState } from '../../recoil/atom';
import { InfoIcon } from '../../assets';
import date from '../../utils/date';

export default function Header() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);

  return (
    <>
      <Wrapper>
        <Time>{date().split(' ').slice(1)}</Time>
        <div>
          <InfoIcon />
        </div>
      </Wrapper>
      <SubTitle>
        <Title>대화</Title>
        <Right>
          <FindIcon />
          <AlbumsIcon />
          <MoreIcon />
        </Right>
      </SubTitle>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0rem 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    padding: 1.25rem 1.88rem;
  }
  & svg {
    width: 7.84rem;
    height: 1.3rem;
  }
`;

const Time = styled.p`
  padding: 0.7rem 3.05rem 1rem;
  ${({ theme }) => theme.fonts.time_now};
  color: ${({ theme }) => theme.colors.black};
`;

const SubTitle = styled.section`
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
