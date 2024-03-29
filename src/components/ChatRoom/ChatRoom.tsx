import styled from "styled-components";
import { flexCenter, flexColumn } from "styles/CommonStyle";
import { ReactComponent as LeftArrowIcon } from "asset/icons/LeftArrowIcon.svg";
import { ReactComponent as EmogiIcon } from "asset/icons/EmogiIcon.svg";
import { ReactComponent as FileInputIcon } from "asset/icons/FileInputIcon.svg";
import { ReactComponent as AudioIcon } from "asset/icons/AudioIcon.svg";
import UserImg from "asset/images/User.png";
import { ChangeEvent, FormEvent, useState } from "react";
function ChatRoom() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <ChatRoomContainer>
        <ChatRoomHeader>
          <button>
            <LeftArrowIcon className="arrow_icon" alt="뒤로 가기 아이콘" />
          </button>
          <UserDetailInfo>
            <p className="user_name">연우</p>
            <p className="last_access">마지막 접속 5분 전</p>
          </UserDetailInfo>
          <UserProfileImg src={UserImg} />
        </ChatRoomHeader>
      </ChatRoomContainer>

      <ChatInputWrapper onSubmit={handleInputSubmit}>
        <button type="button">
          <FileInputIcon alt="파일 첨부 아이콘" />
        </button>
        <button type="button">
          <AudioIcon alt="음성 텍스트 입력 아이콘" />
        </button>
        <input
          placeholder="메시지"
          onChange={handleChangeInputValue}
          value={inputValue}
        />
        <button>
          <EmogiIcon className="emogi_icon" alt="이모지 아이콘" />
        </button>
      </ChatInputWrapper>
    </>
  );
}

export default ChatRoom;

const ChatRoomContainer = styled.div`
  ${flexColumn}
  padding: 0 1.6rem;
`;

const ChatRoomHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const UserProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;

const UserDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .arrow_icon {
    display: flex;
    align-items: flex-start;
  }
  .user_name {
    color: var(--black);
    text-align: center;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  .last_access {
    color: var(--gray04);
    font-size: 1.3rem;
  }
`;

const ChatInputWrapper = styled.form`
  background: var(--gray01);
  box-shadow: 0px -0.33px 0px 0px #a6a6aa;
  ${flexCenter}
  gap : 0.5rem;
  height: 4.5rem;
  position: relative;

  input {
    width: 28.3rem;
    height: 3.3rem;
    border-radius: 1.65rem;
    border: 0.1rem solid var(--gray03);
    background: var(--white);
    padding: 0.5rem 1.3rem;
    font-size: 1.7rem;
  }

  .emogi_icon {
    position: absolute;
    right: 2.3rem;
    top: 0.6rem;
  }
`;
