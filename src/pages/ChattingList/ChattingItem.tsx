import styled from "styled-components";
import userData from "../../data/user.json";
import { typography } from "../../style/typography";
import { colors } from "../../style/colors";
import arrow from "../../assets/arrow.svg";

const ChattingItem = ({ id, chatArray }) => {
  console.log(chatArray);
  return (
    <Wrapper>
      <Profile
        src={`img/userProfile/${userData.users[id].profileImg}`}
      ></Profile>
      <ContentWrapper>
        <RoomInfoWrapper>
          <RoomInfoLeft>{userData.users[id].name}</RoomInfoLeft>
          <RoomInfoRight>
            <Time>{chatArray[chatArray.length - 1].timestamp}</Time>
            <Icon src={arrow}></Icon>
          </RoomInfoRight>
        </RoomInfoWrapper>
        <Chat>{chatArray[chatArray.length - 1].text}</Chat>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ChattingItem;

const Wrapper = styled.div`
  width: 23.4375rem;
  height: 5.3125rem;
  display: grid;
  grid-template-columns: 2.8125rem auto;
  gap: 0.75rem;
  padding: 0.62rem 0.75rem 0.75rem 1.25rem;
  align-items: center;
  border-bottom: 0.5px solid ${colors.gray300};
`;

const Profile = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const RoomInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoomInfoLeft = styled.div`
  ${typography.title2}
`;

const RoomInfoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.31rem;
`;

const Time = styled.span`
  ${typography.body2};
  color: ${colors.gray400};
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Chat = styled.span`
  ${typography.body2};
  color: ${colors.gray300};
  max-width: 17.875rem;
  max-height: 2.4375rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
