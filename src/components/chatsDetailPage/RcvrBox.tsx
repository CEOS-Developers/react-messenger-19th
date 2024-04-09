import styled from 'styled-components';
import { flexCenter } from '../../styles/GlobalStyle';

interface IconTypes {
  iconWidth?: number;
  iconHeight?: number;
}

interface RcvrBoxProps extends IconTypes {
  iconSrc?: string;
  name: string;
  text: string;
  time: string;
}

export default function RcvrBox(props: RcvrBoxProps) {
  const { iconSrc, iconWidth = 2.8, iconHeight = 2.8, name, text, time } = props;

  return (
    <ChatBox>
      <ProfileIcon src={iconSrc} iconHeight={iconHeight} iconWidth={iconWidth} />
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
`;

const ProfileIcon = styled.img<IconTypes>`
  width: ${({ iconWidth }) => `${iconWidth}rem`};
  height: ${({ iconHeight }) => `${iconHeight}rem`};
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 3.4rem;
`;

const Name = styled.p`
  ${flexCenter}
  width: 3.1rem;
  height: 1.7rem;
  margin-bottom: 0.8rem;

  color: var(--3, ${({ theme }) => theme.colors.black});
  ${({ theme }) => theme.fonts.sent_person_small};
`;

const Text = styled.span`
  max-width: 20.4rem;
  padding: 0.8rem 1.2rem;
  border-radius: 1.6rem;

  ${({ theme }) => theme.fonts.message};
  color: var(--3, ${({ theme }) => theme.colors.black});
  background-color: ${({ theme }) => theme.colors.white};
`;

const TimeNow = styled.span`
  display: flex;
  align-items: end;
  width: 4.5rem;

  ${({ theme }) => theme.fonts.sent_time};
  color: ${({ theme }) => theme.colors.blue_txt};
`;
