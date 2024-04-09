import styled from 'styled-components';
import { ConversationIcon, HomeFilledIcon, MoreColumnIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  function moveToChats() {
    navigate(`/chats`);
  }

  return (
    <Wrapper>
      <IconBox type="button">
        <HomeFilledIcon />
        <Text>홈</Text>
      </IconBox>
      <IconBox type="button" onClick={moveToChats}>
        <ConversationIcon />
        <Text>대화</Text>
      </IconBox>
      <IconBox type="button">
        <MoreColumnIcon />
        <Text>더보기</Text>
      </IconBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 10.2rem;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
`;

const IconBox = styled.button`
  ${flexCenter}
  flex-direction: column;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.iconDetails};
`;
