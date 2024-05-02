import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { currOpponentActions } from "../../store";
import StatusBar from "../../components/common/StatusBar";

import userData from "../../data/user.json";

// image
import back from "../../assets/back.svg";
import profileArrow from "../../assets/profileArrow.svg";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Header = ({ chats, setChats }) => {
  const dispatch = useDispatch();
  const opponent = useSelector((state: RootState) => state.opponent.opponent);
  const currOpponent = useSelector(
    (state: RootState) => state.currOpponent.currOpponent
  );
  const currOpponentData = userData.users[currOpponent];

  const toggleCurrOpponent = () => {
    const index = currOpponent === 0 ? opponent : 0;
    dispatch(currOpponentActions.setCurrOpponent(index));
  };

  return (
    <Wrapper>
      <StatusBar />
      <RoomInfoWrapper>
        <img src={back} />
        <RoomInfo onClick={toggleCurrOpponent}>
          <RoomProfile src={`img/userProfile/${currOpponentData.profileImg}`} />
          <RoomNameWrapper>
            <RoomName>{currOpponentData.name}</RoomName>
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
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 0;
  padding-top: 0.25rem;
`;

const RoomName = styled.span`
  ${typography.body3};
  padding-right: 0.25rem;
`;
