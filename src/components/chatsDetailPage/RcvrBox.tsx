import styled from 'styled-components';
import { flexCenter } from '../../styles/GlobalStyle';
import { profileIcons } from '../../assets/data/profile';

interface RcvrBoxProps {
  name: string;
  text: string;
  time: string;
  id: number;
}

export default function RcvrBox(props: RcvrBoxProps) {
  const { name, text, time, id } = props;
  const UserIcon = profileIcons[id];

  return (
    <ChatBox>
      {UserIcon && <UserIcon />}
      <Details>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </Details>
      <TimeNow>{time}</TimeNow>
    </ChatBox>
  );
}

const ChatBox = styled.span`
  display: flex;

  gap: 0.6rem;

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
/* margin-left: ${({ $iconSrc }) => ($iconSrc ? 'none' : '3.4rem')}; */

const Name = styled.p`
  ${flexCenter}
  height: 1.7rem;
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.sent_person_small};
`;

const Text = styled.span`
  max-width: 20.4rem;
  padding: 0.8rem 1.2rem;
  border-radius: 1.6rem;

  ${({ theme }) => theme.fonts.message};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;

const TimeNow = styled.span`
  display: flex;
  align-items: end;
  width: 4.5rem;

  ${({ theme }) => theme.fonts.sent_time};
  color: ${({ theme }) => theme.colors.blue_txt};
`;
