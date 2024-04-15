import styled from 'styled-components';
import { TitleBarProps } from '../../types/type';

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

const UserName = styled.div`
  color: #000;
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3125rem;
  letter-spacing: -0.02063rem;
`;

export default function Chat(props: TitleBarProps) {
  const { name, profileImg } = props;

  return (
    <ChatContainer>
      <ProfileImg src={profileImg} alt="유저 프로필" />
      <UserName>{name}</UserName>
    </ChatContainer>
  );
}
