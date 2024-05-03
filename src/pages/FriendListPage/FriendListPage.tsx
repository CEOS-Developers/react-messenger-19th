import Hr from '@components/Hr';
import Input from '@components/Input';
import MainFooter from '@components/MainFooter';
import MainHeader from '@components/MainHeader';
import StatusBox from '@components/StatusBox';
import styled from 'styled-components';
import theme from '@styles/theme';
import ProfileCard from './components/ProfileCard';
import { useRecoilValue } from 'recoil';
import { chatDataState, currentChatUpdateState } from '@recoil/chatAtom';
import UpdatedProfileCard from './components/UpdateProfileCard';
import FriendCard from './components/FriendCard';

export default function FriendListPage() {
  const chatData = useRecoilValue(chatDataState);
  const updatedChatData = useRecoilValue(currentChatUpdateState);
  return (
    <FriendListPageContainer>
      <StatusBox />
      <MainHeader title="친구" />
      <Input />
      <ProfileCard />
      <Hr />
      <FriendListTextStyle>
        업데이트 {updatedChatData.length}
      </FriendListTextStyle>
      <FriendListUpdatedFriendContainer>
        {updatedChatData.map((data) => (
          <UpdatedProfileCard
            key={data.id}
            img={data.img}
            user={data.name}
            id={data.id}
          />
        ))}
      </FriendListUpdatedFriendContainer>
      <Hr />
      <FriendListTextStyle>친구 {chatData.length}</FriendListTextStyle>
      {chatData.map((data) => (
        <FriendCard
          key={data.id}
          img={data.img}
          name={data.name}
          stateMessage={data.stateMessage}
          id={data.id}
        />
      ))}
      <MainFooter />
    </FriendListPageContainer>
  );
}

const FriendListUpdatedFriendContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 78px;
  padding: 0 16px;
  cursor: pointer;
`;

const FriendListTextStyle = styled.div`
  font-size: ${theme.textStyles.caption3.font_size};
  line-height: ${theme.textStyles.caption3.line_height};
  font-weight: ${theme.textStyles.caption3.font_weight};
  color: ${theme.colors.gray_2};
  padding-left: 16px;
`;

const FriendListPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
`;
