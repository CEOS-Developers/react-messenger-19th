import styled from 'styled-components';
import { BackArrowIcon, InfoIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';
import date from '../../utils/date';

export default function Header() {
  const navigate = useNavigate();

  function moveToFriends() {
    navigate(`/friends`);
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
        <BackArrowIcon type="button" onClick={moveToFriends} />
        <SentName>프로필</SentName>
      </SubTitle>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0rem 1rem;
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
  align-items: center;

  width: 100%;
  padding: 0.8rem;
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
