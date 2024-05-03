import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../style/colors";

import friend_selected from "../../assets/footer/friend_selected.svg";
import friend_unSelected from "../../assets/footer/friend_unSelected.svg";
import chatting_unSelected from "../../assets/footer/chatting_unSelected.svg";
import chatting_selected from "../../assets/footer/chatting_selected.svg";
import you_selected from "../../assets/footer/you_selected.svg";
import you_unSelected from "../../assets/footer/you_unSelected.svg";

const buttonData = [
  {
    id: "friends",
    text: "친구",
    selectedIcon: friend_selected,
    unselectedIcon: friend_unSelected,
  },
  {
    id: "chats",
    text: "채팅",
    selectedIcon: chatting_selected,
    unselectedIcon: chatting_unSelected,
  },
  {
    id: "profile",
    text: "YOU",
    selectedIcon: you_selected,
    unselectedIcon: you_unSelected,
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("friends");

  const handleButtonClick = (id) => {
    setActiveButton(id);
    navigate(`/${id}`);
  };

  return (
    <Wrapper>
      {buttonData.map(({ id, text, selectedIcon, unselectedIcon }) => (
        <ButtonWrapper
          key={id}
          onClick={() => handleButtonClick(id)}
          isactive={activeButton === id}
        >
          <img src={activeButton === id ? selectedIcon : unselectedIcon} />
          <Category isactive={activeButton === id}>{text}</Category>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  width: 23.4375rem;
  height: 5rem;
  padding: 0.5rem 1.125rem 2rem 1.125rem;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  border-top: 0.5px solid ${colors.gray300};
  background: ${colors.gray100};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  cursor: pointer;
`;

const Category = styled.span<{ isactive: boolean }>`
  color: ${(props) => (props.isactive ? colors.black : colors.gray300)};
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
