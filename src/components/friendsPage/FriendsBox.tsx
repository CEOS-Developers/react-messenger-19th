import styled from 'styled-components';
import { DownArrowIcon, MainProfileIcon, ProfileIcon } from '../../assets';
import userData from '../../assets/data/userData.json';
import { useNavigate } from 'react-router-dom';

export default function FriendsBox() {
  const navigate = useNavigate();

  function moveToProfile() {
    navigate(`/profile`);
  }

  return (
    <Wrapper>
      <Header type="button" onClick={moveToProfile}>
        <MainProfileIcon />
        <Name>백현우</Name>
      </Header>
      <BorderLine />
      <Title>
        친구 4
        <DownArrowIcon />
      </Title>
      <List>
        {userData.data
          .filter((user) => user.id >= 1)
          .map((user) => {
            const { id, name } = user;
            return (
              <Friends key={id}>
                <ProfileIcon />
                <FriendsName>{name}</FriendsName>
              </Friends>
            );
          })}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 62rem;
`;

const Header = styled.button`
  display: flex;
  align-items: center;

  margin-top: 1rem;
  padding: 1rem 1.4rem;
  gap: 1.2rem;
`;

const Name = styled.h2`
  ${({ theme }) => theme.fonts.mainUser};
`;

const BorderLine = styled.div`
  width: 34.7rem;
  margin: auto;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_bg};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1.4rem;

  ${({ theme }) => theme.fonts.message};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Friends = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8rem 1.4rem;
  gap: 1rem;

  & svg {
    width: 3.8rem;
    height: 3.8rem;
  }
`;

const FriendsName = styled.p`
  ${({ theme }) => theme.fonts.friendsName};
`;
