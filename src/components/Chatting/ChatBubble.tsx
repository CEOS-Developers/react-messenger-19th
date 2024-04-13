import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CheckMark from '../../assets/img/checkmark.svg';
import BubbleGreen from '../../assets/img/bubble-green.svg';
import BubbleGray from '../../assets/img/bubble-gray.svg';

const ChatBubbleContainer = styled.div<ChatBubbleBaseProps>`
  display: flex;
  justify-content: ${(props) =>
    props.$isSentByMe
      ? 'flex-end'
      : 'flex-start'}; // 나와 상대방의 채팅 버블을 각자 정렬
  margin-bottom: 0.31rem;
  margin-left: ${(props) => (props.$isSentByMe ? 'auto' : '0.44rem')};
  margin-right: ${(props) => (props.$isSentByMe ? '0.44rem' : 'auto')};
  position: relative;
`;

const BubbleWrapper = styled.div<ChatBubbleBaseProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.$isSentByMe ? 'row-reverse' : 'row'}; // 말풍선과 버블의 순서
  align-items: flex-end;
`;

const BubbleImg = styled.img`
  width: 0.5rem;
  height: 0.9375rem;
`;

const BubbleRectangle = styled.div<ChatBubbleBaseProps>`
  display: inline-flex;
  min-width: 5.5625rem;
  max-width: 17.125rem;
  padding: 0.5rem;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.375rem;
  background: ${(props) => (props.$isSentByMe ? '#E1F3D2' : '#eaeaea')};
`;

const TextContainer = styled.div<TextContainerProps>`
  display: inline-flex;
  flex-direction: ${(props) => props.direction};
  align-items: flex-end;
  position: relative;
`;

const ChatText = styled.div`
  width: 100%;
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

const MessageInfoContainer = styled.div<TextContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: ${(props) => (props.direction === 'row' ? '0.75rem' : '0')};
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

interface TextContainerProps {
  direction: string;
}

export default function ChatBubble(props: ChatBubbleProps) {
  const chatTextRef = useRef<HTMLDivElement>(null);
  const [flexDirection, setFlexDirection] = useState<string>('column');

  useEffect(() => {
    const checkTextWidth = () => {
      if (chatTextRef.current) {
        const width = chatTextRef.current.offsetWidth;
        const maxWidth = 17 * 16; // rem을 px로 변환 (가정: 1rem = 16px)
        if (width > maxWidth) {
          setFlexDirection('column');
        } else {
          setFlexDirection('row');
        }
      }
    };

    checkTextWidth();

    // 창 크기 변경에 따라 다시 검사
    window.addEventListener('resize', checkTextWidth);
    return () => window.removeEventListener('resize', checkTextWidth);
  }, []);

  const { $isSentByMe, content, time, $isRead } = props;

  return (
    <ChatBubbleContainer $isSentByMe={$isSentByMe}>
      <BubbleWrapper $isSentByMe={$isSentByMe}>
        <BubbleImg
          src={$isSentByMe ? BubbleGreen : BubbleGray}
          alt="채팅 버블 이미지"
        />
        <BubbleRectangle $isSentByMe={$isSentByMe}>
          <TextContainer direction={flexDirection}>
            <ChatText ref={chatTextRef}>{content}</ChatText>
            <MessageInfoContainer direction={flexDirection}>
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
      </BubbleWrapper>
    </ChatBubbleContainer>
  );
}
