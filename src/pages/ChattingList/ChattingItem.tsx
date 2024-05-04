import styled from "styled-components";
import userData from "../../data/user.json";
import { typography } from "../../style/typography";
import { colors } from "../../style/colors";
import arrow from "../../assets/arrow.svg";
import { opponentActions, currOpponentActions } from "../../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// 여기선 opponent를 id로 업데이트 해주고 currOpponent도 id로 업데이트 해주면됨
interface ChatArrayItem {
  text: string;
  sender: number;
  timestamp: string;
}

interface ChattingItemProps {
  id: string;
  chatArray: ChatArrayItem[];
}

const ChattingItem = ({ id, chatArray }: ChattingItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const idNum = parseInt(id);

  const handleChattingItemClick = () => {
    dispatch(opponentActions.setOpponent(idNum));
    dispatch(currOpponentActions.setCurrOpponent(idNum));
    navigate("/room");
  };

  console.log(userData.users[idNum].profileImg);

  return (
    <Wrapper onClick={handleChattingItemClick}>
      <Profile
        src={`img/userProfile/${userData.users[idNum].profileImg}`}
      ></Profile>
      <ContentWrapper>
        <RoomInfoWrapper>
          <RoomInfoLeft>{userData.users[idNum].name}</RoomInfoLeft>
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

const Wrapper = styled.button`
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
  align-self: start;
`;
