import styled from "styled-components";
import StatusBar from "../../components/common/StatusBar";
import { useSenderContext } from "../../assets/SenderContext";

import userData from "../../data/user.json";

// image
import back from "../../assets/back.svg";
import profileArrow from "../../assets/profileArrow.svg";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Header = () => {
  const { currentUser, setCurrentUser } = useSenderContext();
  const currentOpponent = currentUser === 0 ? 2 : 0;
  const currentOpponentData = userData.users[currentOpponent];

  const toggleSender = () => {
    const newSender = currentOpponent;
    setCurrentUser(newSender);
  };

  return (
    <Wrapper>
      <StatusBar />
      <RoomInfoWrapper>
        <img src={back} />
        <RoomInfo onClick={toggleSender}>
          <RoomProfile
            src={`img/userProfile/${currentOpponentData.profileImg}`}
          />
          <RoomNameWrapper>
            <RoomName>{currentOpponentData.name}</RoomName>
            <img src={profileArrow} />
          </RoomNameWrapper>
        </RoomInfo>
      </RoomInfoWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 8.3rem;
  flex-shrink: 0;
  border-bottom: 0.5px solid ${colors.gray300};
  background-color: ${colors.gray100};
`;

const RoomInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const RoomInfo = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RoomProfile = styled.img`
  height: 3.25rem;
  width: auto;
  justify-content: center;
  align-items: center;
`;

const RoomNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomName = styled.span`
  ${typography.body3};
  padding-right: 0.25rem;
  padding-top: 0.25rem;
`;
