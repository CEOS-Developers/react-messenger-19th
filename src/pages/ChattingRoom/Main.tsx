import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

// image
import smallAdd from "../../assets/smallAdd.svg";
import emoji from "../../assets/emoji.svg";
import voice from "../../assets/voice.svg";
import send from "../../assets/send.svg";
// data
import userData from "../../data/user.json";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Main = ({ chats, setChats }) => {
  const opponent = useSelector((state: RootState) => state.opponent.opponent);
  const currOpponent = useSelector(
    (state: RootState) => state.currOpponent.currOpponent
  );
  const currOpponentData = userData.users[currOpponent];

  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true); // input란에 텍스트 입력 여부

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
        sender: currOpponent === 0 ? opponent : 0,
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
        {chats.map((chat, index) => {
          const isMine = chat.sender !== currOpponent;
          return (
            <ChattingItemWrapper key={index}>
              <TimeStamp>{chat.timestamp}</TimeStamp>
              <MsgBox align={isMine ? "end" : "start"}>
                {isMine || (
                  <ProfileImg
                    src={`img/userProfile/${currOpponentData.profileImg}`}
                  />
                )}
                <Contents>
                  {isMine || <Name>{currOpponentData.name}</Name>}
                  <MsgText
                    maxwidth={isMine ? 12 : 17.125}
                    bgcolor={isMine ? colors.blurple : colors.gray200}
                    txtcolor={isMine ? colors.white : colors.black}
                  >
                    {chat.text}
                  </MsgText>
                  {isMine && <Read>읽음</Read>}
                </Contents>
              </MsgBox>
            </ChattingItemWrapper>
          );
        })}
      </ChattingWrapper>

      <InputWrapper onSubmit={handleSubmit}>
        <img src={smallAdd} />
        <Input>
          <InputText
            placeholder="메시지"
            value={value}
            onChange={handleChange}
          ></InputText>
          <IconsWrapper>
            <Emoji src={emoji} />
            {isEmpty ? (
              <VoiceImg src={voice} />
            ) : (
              <SendBtn type="submit">
                <img src={send} />
              </SendBtn>
            )}
          </IconsWrapper>
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
  width: 1.75rem;
  height: 1.75rem;
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
  bgcolor: string;
  txtcolor: string;
  maxwidth: number;
}>`
  max-width: ${(props) => props.maxwidth}rem;
  ${typography.body2};
  background-color: ${(props) => props.bgcolor};
  border-radius: 1.25rem;
  padding: 0.75rem;
  color: ${(props) => props.txtcolor};
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
  width: 18.875rem;
  padding: 0.625rem 0.75rem;
  align-items: center;
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

  padding-right: 0.5rem;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Emoji = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
const VoiceImg = styled.img`
  padding-left: 0.75rem;
`;
const SendBtn = styled.button`
  display: flex;
  align-items: center;
`;
