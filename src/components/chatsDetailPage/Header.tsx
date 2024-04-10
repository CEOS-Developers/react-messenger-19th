import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { BackArrowIcon, FindIcon, CallIcon, IndexIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import userData from '../../assets/data/userData.json';
import { useNavigate } from 'react-router-dom';
import { userIdState } from '../../recoil/atom';
import date from '../../utils/date';
import { InfoIcon } from '../../assets';

export default function Header() {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);

  function moveToChats() {
    navigate(`/chats`);
  }

  return (
    <>
      <Nav>
        <Time>{date().split(' ').slice(1)}</Time>
        <div>
          <InfoIcon />
        </div>
      </Nav>
      <SubTitle>
        <Left>
          <BackArrowIcon type="button" onClick={moveToChats} />
          <SentName>{userData.data.find((user) => user.id === userId)?.name}</SentName>
        </Left>
        <Right>
          <FindIcon />
          <CallIcon />
          <IndexIcon />
        </Right>
      </SubTitle>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0rem 1rem;

  background-color: ${({ theme }) => theme.colors.blue_bg};

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
