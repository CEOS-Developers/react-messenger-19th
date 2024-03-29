import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import DateDivider from '@components/non-fixed/ChatBody/DateDivider/DateDivider';
import { userNumberState, messageDataState } from '@context/state/atom';
import ChatLog from '@components/non-fixed/ChatBody/ChatLog/ChatLog';

const StyledOneDateContainer = styled.div`
  width: 100%;
  height: auto;
`;

export default function OneDateContainer({
  messageDate,
}: {
  messageDate: string;
}) {
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);
  const [messageData, setMessageData] = useRecoilState(messageDataState);

  const oneDateMessagData = messageData[messageDate];

  return (
    <StyledOneDateContainer>
      <DateDivider dateString={messageDate} />
      {oneDateMessagData.map((data) => {
        console.log(data);
        return (
          <ChatLog
            isEqual={userNumber === data.from}
            from={data.from}
            createdAt={data.createdAt}
            content={data.content}
            key={data.createdAt}
            like={data.like}
          />
        );
      })}
    </StyledOneDateContainer>
  );
}
