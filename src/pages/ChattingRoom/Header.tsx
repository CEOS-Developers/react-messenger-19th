import styled from "styled-components";
import StatusBar from "../../components/common/StatusBar";
import userData from "../../data/user.json";
// image
import back from "../../assets/back.svg";
import profileArrow from "../../assets/profileArrow.svg";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Header = () => {
  const userIdx = 1; // 임시
  return (
    <Wrapper>
      <StatusBar />
      <RoomInfoWrapper>
        <img src={back} />
        <RoomInfo>
          <img src={`img/userProfile/${userData.users[userIdx].profileImg}`} />
          <RoomNameWrapper>
            <RoomName>{userData.users[userIdx].name}</RoomName>
            <img src={profileArrow} />
          </RoomNameWrapper>
        </RoomInfo>
      </RoomInfoWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 23.4375rem;
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

const RoomNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomName = styled.span`
  ${typography.body3}
  padding-right:0.25rem;
  padding-top: 0.25rem;
`;
