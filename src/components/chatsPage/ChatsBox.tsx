import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { userIdState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';
import { profileIcons } from '../../assets/data/profile';

interface ChatsBoxProps {
  id: number;
  name: string;
  text: string;
  time: string;
}

export default function ChatsBox(props: ChatsBoxProps) {
  const { id, name, text, time } = props;
  const setUserId = useSetRecoilState(userIdState);

  const navigate = useNavigate();

  const handleChatBoxClick = () => {
    setUserId(id);
    navigate(`/chatsDetail/${id}`);
    localStorage.setItem('userId', JSON.stringify(id));
  };
  const UserIcon = profileIcons[id];

  return (
    <Wrapper type="button" onClick={handleChatBoxClick}>
      {UserIcon && <UserIcon />}
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
  padding: 0.1rem 1rem 0.2rem 0;
  width: 24.8rem;
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
