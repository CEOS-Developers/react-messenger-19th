import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  messageDataState,
  userNumberState,
  isMessageLikeButtonClickedState,
} from '@context/state/atom';
import { useParams } from 'react-router-dom';

const StyledChatLogRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledNameAndMessageContainer = styled.div`
  display: flex;
  height: 20px;
  justify-content: flex-start;
  column-gap: 4px;
`;

const StyledNameSpan = styled.div`
  padding-top: 4px;
  padding-bottom: 1px;
  font-size: 13px;
  font-weight: 500;
  height: 100%;
  color: ${(props) => props.theme.color.grayDark};
`;

const StyledTimeSpan = styled.div`
  padding-top: 4px;
  padding-bottom: 1px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => props.theme.color.grayDark};
`;

const StyledMessageContentContainer = styled.div`
  height: fit-content;
  flex-grow: 1;
  font-size: ${(props) => props.theme.textStyle.fontSize.body2};
  font-weight: 400;
  color: ${(props) => props.theme.color.black};
  line-height: 22.5px;
`;

const StyledLikeHeartDiv = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: flex-start;
  padding-top: 2px;
`;

const StyledLikeHeartImage = styled.img``;
export default function EmptytChatLogRight({
  isEqual,
  from,
  createdAt,
  content,
  like,
}: {
  isEqual: boolean;
  from: number;
  createdAt: string;
  content: string;
  like: boolean;
}) {
  const [messageData, setMessageData] = useRecoilState(messageDataState);
  const [userNumber, setUserNumber] = useRecoilState(userNumberState);
  const [isMessageLikeButtonClicked, setIsMessageLikeButtonClicked] =
    useRecoilState(isMessageLikeButtonClickedState);
  const { username } = useParams();

  const createdHourMinute = createdAt.slice(11, 16);
  const createdDate = createdAt.slice(0, 10);
  const deepCopiedMessageData = JSON.parse(JSON.stringify(messageData));

  function handleDoubleClickMessage() {
    // 자신과 달라야 한다.
    if (from === userNumber) return;

    const prevSpecifiedDateArray = deepCopiedMessageData[createdDate];
    for (const data of prevSpecifiedDateArray) {
      if (data['createdAt'] === createdAt) {
        data['like'] = !data['like'];
      }
    }
    setMessageData(deepCopiedMessageData);
    localStorage.setItem(
      'chatMessageData',
      JSON.stringify(deepCopiedMessageData)
    );
    // 메시지 버튼이 눌렸는지에 관한 상태를 true로 만들어주고 chatBody에서 useEffect에서 조건부로 검사함
    setIsMessageLikeButtonClicked(true);
  }

  return (
    <StyledChatLogRightContainer onDoubleClick={handleDoubleClickMessage}>
      <StyledNameAndMessageContainer>
        <StyledNameSpan>{from !== 1 ? `${username}` : '김승완'}</StyledNameSpan>
        <StyledTimeSpan>{createdHourMinute}</StyledTimeSpan>
      </StyledNameAndMessageContainer>
      <StyledMessageContentContainer>{content}</StyledMessageContentContainer>
      {isEqual === false && like === true && (
        <StyledLikeHeartDiv>
          <StyledLikeHeartImage src="/images/likeHeart.svg" />
        </StyledLikeHeartDiv>
      )}
    </StyledChatLogRightContainer>
  );
}
