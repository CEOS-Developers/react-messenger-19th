import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TitleBarProps } from '../../types/interface';
import { ChatProps } from '../../types/interface';
import FormatDateToDMY from '../Chatting/FormatDateToDMY';
import checkmark from '../../assets/img/checkmark.svg';

// 각각의 채팅
const ChatContainer = styled.div`
  width: 21.4375rem;
  height: 3.435rem;
  padding: 0.5rem 1rem 0.69rem 1rem;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 3.25rem;
  margin-top: 0.19rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
`;

// 유저 이름과 채팅 시간 컨테이너
const NameTimeContainer = styled.div`
  width: 17.4325rem;
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.div`
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem;
  letter-spacing: -0.02063rem;
`;

const TimeText = styled.div`
  margin-top: 0.13rem;
  color: #8e8e93;
  text-align: right;
  font-family: 'SF Pro Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.00938rem;
`;

const ContentContainer = styled.div`
  display: block;
  align-items: center;
`;

// 체크 이미지를 ChatText 컴포넌트 내부의 ::before 가상 요소로 삽입
// 체크 이미지가 텍스트의 일부로 취급되어 텍스트가 줄바꿈될 때 체크 이미지는 첫 번째 줄에 그대로 유지되고, 텍스트는 체크 이미지 아래부터 시작
const ChatText = styled.div<{ $isRead: boolean }>`
  color: #8e8e93;
  font-family: 'SF Pro Text';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0125rem;
  text-align: left;
  width: 16.25rem;

  ${({ $isRead }) =>
    $isRead &&
    `
    &::before {
      content: url(${checkmark});
      display: inline-block;
      width: 0.875rem;
      height: 0.875rem;
      margin-right: 0.28rem; // 이미지와 텍스트 사이 공간 
      vertical-align: middle; 
    }
  `}
`;

// 두 타입을 결합하여 새로운 타입 정의
type CombinedProps = TitleBarProps & ChatProps;

export default function Chat(props: CombinedProps) {
  const { name, profileImg, lastChatTime, lastChatContent, $isRead } = props;

  return (
    <ChatContainer>
      <ProfileImg src={profileImg} alt="유저 프로필" />
      <TextContainer>
        <NameTimeContainer>
          <UserName>{name}</UserName>
          <TimeText>{FormatDateToDMY(lastChatTime)}</TimeText>
        </NameTimeContainer>
        <ContentContainer>
          <ChatText $isRead={$isRead}>{lastChatContent}</ChatText>
        </ContentContainer>
      </TextContainer>
    </ChatContainer>
  );
}
