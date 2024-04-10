import styled from 'styled-components';
import CheckMark from '../../assets/img/checkmark.svg';
import BubbleGreen from '../../assets/img/bubble-green.svg';
import BubbleGray from '../../assets/img/bubble-gray.svg';

const ChatBubbleContainer = styled.div<ChatBubbleBaseProps>`
  width: 18.6rem;
  margin-bottom: 0.31rem;
  margin-left: ${(props) => (props.$isSentByMe ? 'auto' : '0.44rem')};
  margin-right: ${(props) => (props.$isSentByMe ? '0.44rem' : 'auto')};
  position: relative;
`;

const BubbleImg = styled.img<ChatBubbleBaseProps>`
  width: 0.5rem;
  height: 0.9375rem;
  position: absolute;
  left: ${(props) => (props.$isSentByMe ? '18.125rem' : '0')};
  right: ${(props) => (props.$isSentByMe ? '0' : '18.125rem')};
  bottom: 0;
`;

const BubbleRectangle = styled.div<ChatBubbleBaseProps>`
  display: flex;
  width: 17.125rem;
  padding: 0.5rem;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.375rem;
  background: ${(props) => (props.$isSentByMe ? '#E1F3D2' : '#eaeaea')};
  margin-left: ${(props) => (props.$isSentByMe ? '0' : 'auto')};
  margin-right: ${(props) => (props.$isSentByMe ? 'auto' : '0')};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

const ChatText = styled.div`
  width: 17.125rem;
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: -0.02563rem;
  margin-top: 0;
  margin-left: 0;
`;

const MessageInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.25rem;
`;

const TimeText = styled.div<ChatBubbleBaseProps>`
  color: rgba(0, 0, 0, 0.15);
  font-family: 'SF Pro Display';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0;
  margin-right: ${(props) => (props.$isSentByMe ? '0.25rem' : '0')};
`;

const CheckImg = styled.img<ChatBubbleBaseProps>`
  width: 0.9375rem;
  height: 0.875rem;
  position: relative;
  margin-bottom: 0;
  margin-right: 0;
  display: ${(props) =>
    props.$isRead && props.$isSentByMe ? 'inline' : 'none'};
`;

interface ChatBubbleBaseProps {
  $isSentByMe?: boolean;
  $isRead?: boolean;
}

interface ChatBubbleProps extends ChatBubbleBaseProps {
  content: string;
  time: string;
}

export default function ChatBubble(props: ChatBubbleProps) {
  const { $isSentByMe, content, time, $isRead } = props;

  return (
    <ChatBubbleContainer $isSentByMe={$isSentByMe}>
      <BubbleImg
        src={$isSentByMe ? BubbleGreen : BubbleGray}
        $isSentByMe={$isSentByMe}
        alt="채팅 버블 이미지"
      />
      <BubbleRectangle $isSentByMe={$isSentByMe}>
        <TextContainer>
          <ChatText>{content}</ChatText>
          <MessageInfoContainer>
            <TimeText $isSentByMe={$isSentByMe}>{time}</TimeText>
            <CheckImg
              src={CheckMark}
              alt="읽음 확인용 체크 이미지"
              $isRead={$isRead}
              $isSentByMe={$isSentByMe}
            />
          </MessageInfoContainer>
        </TextContainer>
      </BubbleRectangle>
    </ChatBubbleContainer>
  );
}
