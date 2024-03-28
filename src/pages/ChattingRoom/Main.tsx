import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

// image
import smallAdd from "../../assets/smallAdd.svg";
import emoji from "../../assets/emoji.svg";
import voice from "../../assets/voice.svg";
import send from "../../assets/send.svg";
// data
import userData from "../../data/user.json";
import chattingData from "../../data/chatting.json";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Main = () => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true); // input란에 텍스트 입력 여부

  // 데이터 관리
  const storedChats = localStorage.getItem("chats");
  const initialData = storedChats ? JSON.parse(storedChats) : chattingData;
  const [chats, setChats] = useState(initialData);
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  // 스크롤 이동
  const chatWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  }, [chats]);

  const getDayOfWeek = (date: Date) => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
  };

  const getDate = () => {
    const currentDate = new Date();
    const formattedTimeStamp = `${
      currentDate.getMonth() + 1
    }월 ${currentDate.getDate()}일 (${getDayOfWeek(
      currentDate
    )}) ${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(
      2,
      "0"
    )} ${currentDate.getHours() >= 12 ? "PM" : "AM"}`;

    return formattedTimeStamp;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmpty) {
      const newChat = {
        text: value,
        sender: 0,
        timestamp: getDate(),
      };
      setChats([...chats, newChat]);
      setValue("");
      setIsEmpty(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    e.target.value == "" ? setIsEmpty(true) : setIsEmpty(false);
  };

  return (
    <Wrapper>
      <ChattingWrapper ref={chatWrapperRef}>
        {chats.map((chat, index) => (
          <ChattingItemWrapper key={index}>
            <TimeStamp>{chat.timestamp}</TimeStamp>
            <MsgBox align={chat.sender !== 0 ? "start" : "end"}>
              {chat.sender !== 0 && (
                <ProfileImg
                  src={`img/userProfile/${
                    userData.users[chat.sender].profileImg
                  }`}
                />
              )}
              <Contents>
                {chat.sender !== 0 && (
                  <Name>{userData.users[chat.sender].name}</Name>
                )}
                <MsgText
                  maxWidth={chat.sender !== 0 ? 17.125 : 12}
                  bgColor={chat.sender !== 0 ? colors.gray200 : colors.blurple}
                  txtColor={chat.sender !== 0 ? colors.black : colors.white}
                >
                  {chat.text}
                </MsgText>
                {chat.sender === 0 && <Read>읽음</Read>}
              </Contents>
            </MsgBox>
          </ChattingItemWrapper>
        ))}
      </ChattingWrapper>

      <InputWrapper onSubmit={handleSubmit}>
        <img src={smallAdd} />
        <Input>
          <InputText
            placeholder="메시지"
            value={value}
            onChange={handleChange}
          ></InputText>
          <img src={emoji} />
          {isEmpty ? (
            <VoiceImg src={voice} />
          ) : (
            <SendBtn type="submit">
              <img src={send} />
            </SendBtn>
          )}
        </Input>
      </InputWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 42.45rem;
  display: flex;
  flex-direction: column;
`;

const ChattingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChattingItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeStamp = styled.span`
  color: ${colors.gray400};
  ${typography.caption};
  align-self: center;
  margin-bottom: 0.75rem;
`;

const MsgBox = styled.div<{ align: string }>`
  display: flex;
  align-self: ${(props) => props.align};
`;
const ProfileImg = styled.img`
  margin-right: 0.38rem;
  align-self: end;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const Name = styled.span`
  color: ${colors.gray400};
  ${typography.body3}
`;
const MsgText = styled.span<{
  bgColor: string;
  txtColor: string;
  maxWidth: number;
}>`
  max-width: ${(props) => props.maxWidth}rem;
  ${typography.body2};
  background-color: ${(props) => props.bgColor};
  border-radius: 1.25rem;
  padding: 0.75rem;
  color: ${(props) => props.txtColor};
  text-align: start;
`;
const Read = styled.span`
  color: ${colors.gray400};
  ${typography.body3};
  align-self: end;
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: auto;
  margin-bottom: 2.125rem;
  height: 3rem;
  align-items: center;
`;

const Input = styled.span`
  display: flex;
  height: 2.25rem;
  padding: 0.625rem 0;
  padding-left: 0.75rem;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  border-radius: 5rem;
  border: 1px solid ${colors.gray300};
`;

const InputText = styled.input`
  display: -webkit-box;
  width: 14.3125rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex-shrink: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  ${colors.black}

  ${typography.body2}
  &::placeholder {
    ${colors.gray300}
  }
`;

const VoiceImg = styled.img`
  padding-right: 0.75rem;
`;
const SendBtn = styled.button`
  padding-right: 0.37rem;
  display: flex;
  align-items: center;
`;
