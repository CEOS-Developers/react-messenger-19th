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

export default function FriendListPage() {
  const chatData = useRecoilValue(chatDataState);
  const updatedChatData = useRecoilValue(currentChatUpdateState);
  console.log(updatedChatData);
  return (
    <FriendListPageContainer>
      <StatusBox />
      <MainHeader title="친구" />
      <Input />
      <ProfileCard />
      <Hr />
      <FriendListTextStyle>업데이트</FriendListTextStyle>
      <Hr />
      <FriendListTextStyle>친구</FriendListTextStyle>
      <MainFooter />
    </FriendListPageContainer>
  );
}

const FriendListTextStyle =  styled.div`
  font-size: ${theme.textStyles.caption3.font_size};
  line-height: ${theme.textStyles.caption3.line_height};
  font-weight: ${theme.textStyles.caption3.font_weight};
  color: ${theme.colors.gray_2};
  padding-left: 16px;
`;

const FriendListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
`;
