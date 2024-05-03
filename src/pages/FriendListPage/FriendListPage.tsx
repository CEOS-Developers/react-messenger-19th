import Hr from '@components/Hr';
import Input from '@components/Input';
import MainFooter from '@components/MainFooter';
import MainHeader from '@components/MainHeader';
import StatusBox from '@components/StatusBox';
import styled from 'styled-components';
import ProfileCard from './components/ProfileCard';

export default function FriendListPage() {
  return (
    <FriendListPageContainer>
      <StatusBox />
      <MainHeader title="친구" />
      <Input />
      <ProfileCard />
      <Hr />
      <MainFooter />
    </FriendListPageContainer>
  );
}

const FriendListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
`;
