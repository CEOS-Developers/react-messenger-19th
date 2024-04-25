import styled from 'styled-components';
import ProfileGroupUI from '@components/non-fixed/EmptyChatBody/ProfileGroupUI/ProfileGroupUI';
import { useEffect } from 'react';

const StyledEmptyChatBody = styled.div`
  flex-grow: 1;
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 16px;
  width: 343px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const StyledProfileGroupUIContainer = styled.div`
  width: 100%;
  height: fit-content;
  /* padding: 16px 94px 0px 94px; */
  padding-top: 16px;
  display: flex;
  justify-content: center;
`;

export default function EmptyChatBody({
  username,
}: {
  username: string | undefined;
}) {
  // 기존의 데이터가 없으면 로고를 보여주고, 아니면 이에 맞는 메시지 데이터들을 보여주면 된다

  return (
    <StyledEmptyChatBody className="scroll-box">
      <StyledProfileGroupUIContainer>
        <ProfileGroupUI username={username} />
      </StyledProfileGroupUIContainer>
    </StyledEmptyChatBody>
  );
}
