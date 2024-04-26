import styled from 'styled-components';
import ProfileGroupUI from '@components/non-fixed/EmptyChatBody/ProfileGroupUI/ProfileGroupUI';
import { useEffect } from 'react';
import { messageDataObject } from 'types/type';
import { useRecoilState } from 'recoil';
import { messageDataState, messageDateArrayState } from '@context/state/atom';
import ldsh from 'lodash'; // 객체의 깊은 비교를 위한 라이브러리에 해당

const StyledEmptyChatBody = styled.div`
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
  width: 343px;
  overflow-y: scroll;
  display: flex;
  /* flex-direction: column; */
`;

const StyledProfileGroupUIContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 16px;
  display: flex;
  justify-content: center;
`;

export default function EmptyChatBody({
  username,
}: {
  username: string | undefined;
}) {
  const [messageData, setMessageData] = useRecoilState(messageDataState);
  const [messageDateArray, setMessageDateArray] = useRecoilState(
    messageDateArrayState
  );

  // 기존의 데이터가 없으면 로고를 보여주고, 아니면 이에 맞는 메시지 데이터들을 보여주면 된다

  useEffect(() => {
    if (
      localStorage.getItem(`chatMessageData${username}`) === null &&
      localStorage.getItem(`chatMessageDateArray${username}`) === null
    ) {
      setMessageData({});
      setMessageDateArray([]);
    } else if (
      // 데이터가 있는 경우 -> 상태를 변경시키고 이를 이용하여 리렌더링 진행
      localStorage.getItem(`chatMessageData${username}`) !== null &&
      localStorage.getItem(`chatMessageDateArray${username}`) !== null
    ) {
      const lstrgChatMessageData = JSON.parse(
        localStorage.getItem(`chatMessageData${username}`) as string
      );
      const lstrgChatMessageDateArray = JSON.parse(
        localStorage.getItem(`chatMessageDateArray${username}`) as string
      );

      setMessageData(lstrgChatMessageData);
      setMessageDateArray(lstrgChatMessageDateArray);
    }
  }, []);

  return (
    <StyledEmptyChatBody className="scroll-box">
      {ldsh.isEqual(messageData, {}) && messageDateArray.length === 0 && (
        <StyledProfileGroupUIContainer>
          <ProfileGroupUI username={username} />
        </StyledProfileGroupUIContainer>
      )}
    </StyledEmptyChatBody>
  );
}
