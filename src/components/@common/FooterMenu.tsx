import styled from 'styled-components';
import { ConversationIcon, HomeFilledIcon, MoreColumnIcon } from '../../assets';
import { flexCenter } from '../../styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';

export default function FooterMenu() {
  const navigate = useNavigate();

  function moveToChats() {
    navigate(`/chats`);
  }

  function moveToFriends() {
    navigate('/friends');
  }

  return (
    <Wrapper>
      <IconBox type="button" onClick={moveToFriends}>
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

  width: 100%;
  gap: 10.2rem;
  padding: 0.8rem 0 0 0;

  border-top: 1px solid ${({ theme }) => theme.colors.grey_bg};
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
