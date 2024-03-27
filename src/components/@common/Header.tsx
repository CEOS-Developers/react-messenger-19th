import styled from 'styled-components';
import { ReactComponent as InfoIcon } from '../../assets/icon/info.svg';

export default function Header() {
  return (
    <>
      <Wrapper>
        <Time>9:41</Time>
        <div>
          <InfoIcon />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
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
