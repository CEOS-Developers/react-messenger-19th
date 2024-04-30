import styled from 'styled-components';
import { GithubIcon, InstaIcon, BhwProfileIcon } from '../../assets';

export default function ProfileBox() {
  return (
    <Wrapper>
      <Header>
        <BhwProfileIcon />
        <Name>백현우</Name>
      </Header>
      <BorderLine />
      <Contact>
        <Text>전화번호</Text>
        <Number>+82 10-1234-5678</Number>
      </Contact>
      <BorderLine />
      <LinkContainer>
        <Text>바로가기</Text>
        <BoxLink href="https://www.instagram.com/soohyun_k216/" target="_blank">
          <InstaIcon />
          <Details>Instagram</Details>
        </BoxLink>
        <BoxLink href="https://github.com/Rose-my" target="_blank">
          <GithubIcon />
          <Details>Github</Details>
        </BoxLink>
      </LinkContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 67.4rem;
`;

const Header = styled.section`
  display: flex;
  align-items: center;

  padding: 1rem 1.4rem;
  gap: 1.2rem;

  & svg {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const BorderLine = styled.div`
  width: 34.7rem;
  margin: auto;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_bg};
`;

const Name = styled.h2`
  ${({ theme }) => theme.fonts.mainUser};
`;

const Contact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1.4rem;
  gap: 1rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.sent_person_small};

  letter-spacing: -0.24px;
`;

const Number = styled.p`
  width: 13.5rem;
  height: 2.2rem;

  ${({ theme }) => theme.fonts.friendsName};
`;

const LinkContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.4rem;
`;

const BoxLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  gap: 1.2rem;

  & svg {
    width: 4.2rem;
    height: 4.2rem;
  }
`;

const Details = styled.p`
  ${({ theme }) => theme.fonts.friendsName};
`;
