import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { ifChatsDetailPageState, userIdState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';
import { ProfileIcon } from '../../assets';
import chatData from '../../assets/data/chatData.json';

interface ChatsBoxProps {
  id: number;
  name: string;
  text: string;
  time: string;
}

export default function ChatsBox(props: ChatsBoxProps) {
  const { id, name, text, time } = props;
  const setUserId = useSetRecoilState(userIdState);
  const setIfChatsDetailPage = useSetRecoilState(ifChatsDetailPageState);
  const navigate = useNavigate();

  const handleChatBoxClick = () => {
    setUserId(id);
    setIfChatsDetailPage(true);
    navigate(`/chatsDetail/${id}`);
    localStorage.setItem('chats', JSON.stringify(chatData));
  };

  return (
    <Wrapper type="button" onClick={handleChatBoxClick}>
      <ProfileIcon />
      <TextBox>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </TextBox>
      <Date>{time}</Date>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  padding: 1.2rem 1.4rem;

  & svg {
    width: 4.2rem;
    height: 4.2rem;

    margin-right: 1.2rem;
  }
`;

const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.2rem;
  padding: 0.1rem 0 0.2rem;
  width: 24.8rem;
  height: 4.2rem;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.message};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.sent_person_small};
`;

const Date = styled.span`
  margin-left: 0;
  ${({ theme }) => theme.fonts.sent_time};
  color: ${({ theme }) => theme.colors.blue_txt};
`;
