import styled from 'styled-components';

interface SenderBoxProps {
  text: string;
  time: string;
}

export default function SenderBox(props: SenderBoxProps) {
  const { text, time } = props;
  return (
    <ChatBox>
      <Details>
        <TimeNow>{time}</TimeNow>
        <Text>{text}</Text>
      </Details>
    </ChatBox>
  );
}

const ChatBox = styled.span`
  display: flex;
  justify-content: end;

  gap: 0.6rem;
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
`;

const TimeNow = styled.span`
  display: flex;
  align-items: end;
  width: 4.5rem;

  ${({ theme }) => theme.fonts.sent_time};
  color: ${({ theme }) => theme.colors.blue_txt};
`;

const Text = styled.span`
  max-width: 20.4rem;
  padding: 0.8rem 1.2rem;
  border-radius: 1.6rem;

  ${({ theme }) => theme.fonts.message};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.theme.colors.green_bg};
`;
