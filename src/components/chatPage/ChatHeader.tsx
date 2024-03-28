import styled from 'styled-components';
import { BackArrowIcon, FindIcon, CallIcon, IndexIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';

export default function ChatHeader() {
  return (
    <Wrapper>
      <Left>
        <BackArrowIcon />
        <p>세오스</p>
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
