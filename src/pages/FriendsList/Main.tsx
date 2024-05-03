import styled from "styled-components";
import friendsProfile from "../../assets/friendsProfile.svg";
import table1 from "../../assets/temp/table1.svg";
import table2 from "../../assets/temp/table2.svg";
import table3 from "../../assets/temp/table3.svg";
import table4 from "../../assets/temp/table4.svg";

const Main = () => {
  return (
    <Wrapper>
      <FriendsProfile src={friendsProfile} />
      <ServerWrapper>
        <img src={table1} />
        <img src={table2} />
        <img src={table3} />
        <img src={table4} />
      </ServerWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FriendsProfile = styled.img`
  margin-bottom: 1.5rem;
`;

const ServerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
