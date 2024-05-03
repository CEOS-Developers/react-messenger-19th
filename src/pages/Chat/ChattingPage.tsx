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

interface ChatType {
  //채팅 방 데이터
  r_id: number; //채팅방(room) 고유 id
  isGroup: boolean; //grop일 경우 group icon을 띄우기 위함
  r_name: string; //채팅방 이름
  r_profile: string; //수신자 프로필 url
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
  const { r_id } = useParams();
 
  const [value,  setValue] = useState<string>(''); //텍스트 입력값을 넣어주기 위한 state
  const [chatData, setChatData] = useRecoilState<ChatType>(chatDataState);
  

   //localStorage에서 가져오기
   useEffect(() => {
    const getChatData = localStorage.getItem('chatData')
    if (getChatData) {
      setChatData(JSON.parse(getChatData))
    }
  }, [])


  // 객체 생성
  const currentTime:string = dayjs().format('HH:mm'); // 시:분 형식으로 포맷팅
  const addChatData = (value: string): void => {
    setChatData((prevChatData: ChatType) => {
      const newChatData = {
        //localStorage 저장을 위해 분리
        ...prevChatData,
        chat : [...prevChatData.chat, {
          c_id: Date.now(),
          sender: sender,
          receiver: receiver,
          value: value,
          time: currentTime
        }]
      }
      localStorage.setItem('chatData', JSON.stringify(newChatData))

      return newChatData
    }) 
  }
  
  //스크롤 구현
  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);


 


  return (
    <Wrapper>
       <TopBarIcons/>
       <ProfileInfoWrapper>
          <FriendProfileImg src = {rImg} onClick={toggleUser}/>
          <FriendProfileName> {receiver} </FriendProfileName>
       </ProfileInfoWrapper>
       <ChatBody>
        {chatData.chat.slice(1).map((chat, key) => (
          chat.sender === sender?
         ( <ChatBubbleSender
            key={chat.c_id}
            value={chat.value}
            time={chat.time}
            profileImg={chat.r_img}
          /> ): (
            <ChatBubbleReceiver
            key={chat.c_id}
            value={chat.value}
            time={chat.time}
            profileImg={chat.r_img}
            //조건 추후 수정 예정
            isSameTime = {  key > 0 &&
              chatData.chat[key - 1].sender === chat.sender}
            />)
          ))}
        {/* 스크롤을 위한 빈 div */}
        <div ref={chatEndRef} style={{ width: "100%" }}/>
        </ChatBody>
       <ChatInput
        addChatData={addChatData}
        value={value}
        setValue={setValue}
       />


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