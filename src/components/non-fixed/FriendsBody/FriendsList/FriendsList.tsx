import styled from 'styled-components';
import FriendsListItem from '@components/non-fixed/FriendsBody/FriendsList/FriendsListItem';

const StyledFriendsList = styled.div`
  margin: 0 16px;
  height: fit-content;
`;

const tmpFriendsList = [
  'discord_redesign1',
  '김정민',
  'discord_redesign2',
  '김승완',
  'discord_redesign3',
  'CEOS',
];

export default function FriendsList() {
  // 임시 UI를 위한 텍스트 집합

  return (
    <StyledFriendsList>
      {tmpFriendsList.map((friendsName, index) => (
        <FriendsListItem
          order={index}
          friendName={friendsName}
          key={friendsName}
        />
      ))}
    </StyledFriendsList>
  );
}
