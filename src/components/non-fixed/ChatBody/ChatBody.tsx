import { useRecoilState } from 'recoil';
import {
  messageDataState,
  messageDateArrayState,
  userNumberState,
} from '@context/state/atom';
import { useEffect } from 'react';
import styled from 'styled-components';
import OneDateContainer from '@components/non-fixed/ChatBody/OneDateContainer/OneDateContainer';
import { messageDataObject } from '@_type/type';
import sortByDate from '@utils/sortArrayByDate';

const StyledChatBodyContainer = styled.div`
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
`;

export default function ChatBody() {
  // 여기에서 json 데이터를 불러와서 날짜별로 쪼갠다. 그리고 구분선, 메시지,메시지, 다시 구분선 메시지 메시지 느낌으로 나눠준다
  const [messageData, setMessageData] = useRecoilState(messageDataState);
  const [messageDateArray, setMessageDateArray] = useRecoilState(
    messageDateArrayState
  );

  // 처음 chatBody 컴포넌트가 DOM에 마운트 되면 json 파일로부터 정보를 가져온다.
  useEffect(() => {
    async function loadMessageData() {
      try {
        const tmpDateArray: string[] = [];
        const tmpMessageDataObject: messageDataObject = {};
        const response = await fetch('/Dummy/Dummy.json');
        const messageJsonData = await response.json();
        for (const messageData of messageJsonData) {
          const { content, createdAt, from, like } = messageData;
          const slicedCreatedDate: string = createdAt.slice(0, 10);
          if (tmpMessageDataObject[slicedCreatedDate] === undefined) {
            tmpMessageDataObject[slicedCreatedDate] = [];
          }

          tmpMessageDataObject[slicedCreatedDate].push({
            content: content,
            createdAt: createdAt,
            createdDate: slicedCreatedDate,
            from: from,
            like: like,
          });

          if (!tmpDateArray.includes(slicedCreatedDate)) {
            tmpDateArray.push(slicedCreatedDate);
          }
        }
        // 기존의 날짜 배열을 오름차순으로 정렬
        tmpDateArray.sort(sortByDate);
        setMessageData(tmpMessageDataObject);
        setMessageDateArray(tmpDateArray);
      } catch (error) {
        console.log('error is : ', error);
      }
    }

    loadMessageData();
  }, []);

  return (
    <StyledChatBodyContainer>
      {messageDateArray.map((messageDate) => {
        return <OneDateContainer key={messageDate} messageDate={messageDate} />;
      })}
    </StyledChatBodyContainer>
  );
}
