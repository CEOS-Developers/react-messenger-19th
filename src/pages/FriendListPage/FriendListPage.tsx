import Input from '@components/Input';
import MainFooter from '@components/MainFooter';
import MainHeader from '@components/MainHeader';
import StatusBox from '@components/StatusBox';
import styled from 'styled-components';

export default function FriendListPage() {
  return (
    <FriendListPageContainer>
      <StatusBox />
      <MainHeader title="친구" />
      <Input />
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
