import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import EmptyDateDivider from '@components/non-fixed/EmptyChatBody/EmptyDateDIvider/EmptyDateDivider';
import { userNumberState, messageDataState } from '@context/state/atom';
import EmptyChatLog from '@components/non-fixed/EmptyChatBody/EmptyChatLog/EmptyChatLog';

const StyledOneDateContainer = styled.div`
  width: 100%;
  height: auto;
`;

export default function EmptyOneDateContainer({
  messageDate,
}: {
  messageDate: string;
}) {
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);
  const [messageData, setMessageData] = useRecoilState(messageDataState);

  const oneDateMessagData = messageData[messageDate];

  return (
    <StyledOneDateContainer>
      <EmptyDateDivider dateString={messageDate} />
      {oneDateMessagData.map((data) => {
        return (
          <EmptyChatLog
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
