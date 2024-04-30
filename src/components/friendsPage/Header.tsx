import styled from 'styled-components';
import { FriendsPageIcon } from '../../assets';
import { InfoIcon } from '../../assets';
import date from '../../utils/date';
import formatDate from '../../utils/formatDate';

export default function Header() {
  return (
    <>
      <Nav>
        <Time>{formatDate(date()).split(' ').slice(1)}</Time>
        <div>
          <InfoIcon />
        </div>
      </Nav>
      <SubTitle>
        <FriendsPageIcon />
      </SubTitle>
    </>
  );
}

const Nav = styled.nav`
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
  justify-content: end;

  width: 100%;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;
