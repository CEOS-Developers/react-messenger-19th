import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import TopBarIcons from "../../components/TopBarIcons"
import ChatInput from "./ChatInput"
import friendProfile from "../../assets/img/friendProfile.png"
import myProfile from "../../assets/img/myProfile.png"
import dayjs from "dayjs"
import ChatBubbleReceiver from "../Chat/ChatBubbleReceiver"
import ChatBubbleSender from "./ChatBubbleSender"
import { useRecoilState } from 'recoil';
import { chatDataState } from '../../atoms';
import { useParams } from 'react-router-dom';
import dummyData from "../../data/dummyData.json"

interface ChatType {
  //채팅 방 데이터
  r_id: number; //채팅방(room) 고유 id
  isGroup: boolean; //grop일 경우 group icon을 띄우기 위함
  r_name: string; //채팅방 이름
  r_profile?: string; //수신자 프로필 url
  //채팅 1개 당 데이터
  chat : {
    c_id: number | null; //채팅 1개당 id
    sender: string; //발신자
    receiver: string; //수신자
    value: string; //텍스트 입력값
    time: string //텍스트 보낸 시간
  }[]
}


function ChattingPage() {
  const { id } = useParams<{ id: string }>();
  const chatRoomJson = dummyData.find(chat => chat.r_id === Number(id));
  console.log(chatRoomJson);

  const [value,  setValue] = useState<string>(''); //텍스트 입력값을 넣어주기 위한 state


  {/*const [chatData, setChatData] = useRecoilState<ChatType>(chatDataState);

  useEffect(() => {
    if (chatRoomJson) {
      setChatData(chatRoomJson);
    }
  }, []);
  
  console.log(chatData);

  
  //스크롤 구현
  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);


*/}


  return (
    <Wrapper>
       <TopBarIcons/>
       <ProfileInfoWrapper>
          <FriendProfileImg src = {chatRoomJson?.r_profile ? chatRoomJson?.r_profile : friendProfile}/>
          <FriendProfileName> {chatRoomJson?.r_name} </FriendProfileName>
       </ProfileInfoWrapper>
       <ChatBody>
        {chatRoomJson?.chat.map((chat) => (
          chat.sender === "user"?
         ( <ChatBubbleSender
            key={chat.c_id}
            value={chat.value}
            time={chat.time}
          /> ): (
            <ChatBubbleReceiver
            key={chat.c_id}
            value={chat.value}
            time={chat.time}
            r_profile={chatRoomJson.r_profile? chatRoomJson.r_profile: friendProfile}
            />)
          ))}
       {/* <div ref={chatEndRef} style={{ width: "100%" }}/>*/}
        </ChatBody>
     {/*  <ChatInput
        addChatData={addChatData}
        value={value}
        setValue={setValue}
       />*/}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const ProfileInfoWrapper = styled.div`
  width: 100%;
  height: 115.67px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.grey3};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FriendProfileImg = styled.img`
  width: 81.67px;
  height: 81.67px;
  margin-bottom: 15px;
`

const FriendProfileName = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`

const ChatBody = styled.div`
  //background-color: beige;
  width: 100%;
  height: 545.33px;
  padding-top: 14.88px;
  overflow-y: auto;
  overflow-x: hidden;
`


export default ChattingPage