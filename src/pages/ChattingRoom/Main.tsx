import styled from "styled-components";
import { useState } from "react";

// image
import smallAdd from "../../assets/smallAdd.svg";
import emoji from "../../assets/emoji.svg";
import voice from "../../assets/voice.svg";
import send from "../../assets/send.svg";
// data
import userData from "../../data/user.json";

import { colors } from "../../style/colors";
import { typography } from "../../style/typography";

const Main = () => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true); // input란에 텍스트 입력 여부

  const data = [
    {
      text: "모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국가는 사회보장·사회복지의 증진에 노력할 의무를 진다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.",
      sender: 2,
      timestamp: "3월 21일 (목) 9:38 AM",
    },
    {
      text: "법률안에 이의가 있을 때에는 대통령은 제1항의 기간내에 이의서를 붙여 국회로 환부하고, 그 재의를 요구할 수 있다. 국회의 폐회중에도 또한 같다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다.",
      sender: 0,
      timestamp: "3월 21일 (목) 9:38 AM",
    },
    {
      text: "행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이 임명한다. ",
      sender: 2,
      timestamp: "3월 22일 (금) 3:18 PM",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("전송");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    e.target.value == "" ? setIsEmpty(true) : setIsEmpty(false);
  };

  return (
    <Wrapper>
      <ChattingWrapper>
        {" "}
        <ChattingItemWrapper>
          <TimeStamp>{data[0].timestamp}</TimeStamp>
          <MsgBox align={data[0].sender !== 0 ? "start" : "end"}>
            {data[0].sender !== 0 && (
              <ProfileImg
                src={`img/userProfile/${
                  userData.users[data[0].sender].profileImg
                }`}
              />
            )}
            <Contents>
              {data[0].sender !== 0 && (
                <Name>{userData.users[data[0].sender].name}</Name>
              )}
              <MsgText
                maxWidth={data[0].sender !== 0 ? 17.125 : 12}
                bgColor={data[0].sender !== 0 ? colors.gray200 : colors.blurple}
                txtColor={data[0].sender !== 0 ? colors.black : colors.white}
              >
                {data[0].text}
              </MsgText>
              {data[0].sender == 0 && <Read>읽음</Read>}
            </Contents>
          </MsgBox>
        </ChattingItemWrapper>
        <ChattingItemWrapper>
          <TimeStamp>{data[1].timestamp}</TimeStamp>
          <MsgBox align={data[1].sender !== 0 ? "start" : "end"}>
            {data[1].sender !== 0 && (
              <ProfileImg
                src={`img/userProfile/${
                  userData.users[data[1].sender].profileImg
                }`}
              />
            )}
            <Contents>
              {data[1].sender !== 0 && (
                <Name>{userData.users[data[1].sender].name}</Name>
              )}
              <MsgText
                maxWidth={data[1].sender !== 0 ? 17.125 : 12}
                bgColor={data[1].sender !== 0 ? colors.gray200 : colors.blurple}
                txtColor={data[1].sender !== 0 ? colors.black : colors.white}
              >
                {data[1].text}
              </MsgText>
              {data[1].sender == 0 && <Read>읽음</Read>}
            </Contents>
          </MsgBox>
        </ChattingItemWrapper>
        <ChattingItemWrapper>
          <TimeStamp>{data[2].timestamp}</TimeStamp>
          <MsgBox align={data[2].sender !== 0 ? "start" : "end"}>
            {data[2].sender !== 0 && (
              <ProfileImg
                src={`img/userProfile/${
                  userData.users[data[2].sender].profileImg
                }`}
              />
            )}
            <Contents>
              {data[2].sender !== 0 && (
                <Name>{userData.users[data[2].sender].name}</Name>
              )}
              <MsgText
                maxWidth={data[2].sender !== 0 ? 17.125 : 12}
                bgColor={data[2].sender !== 0 ? colors.gray200 : colors.blurple}
                txtColor={data[2].sender !== 0 ? colors.black : colors.white}
              >
                {data[2].text}
              </MsgText>
              {data[2].sender == 0 && <Read>읽음</Read>}
            </Contents>
          </MsgBox>
        </ChattingItemWrapper>
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
