import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import TopBarIcons from "../../components/TopBarIcons"
import ChatInput from "./ChatInput"
import friendProfile from "../../assets/img/friendProfile.png"
import myProfile from "../../assets/img/myProfile.png"
import Footer from "../../components/Footer"
import dayjs from "dayjs"
import ChatBubbleReceiver from "../Chat/ChatBubbleReceiver"
import ChatBubbleSender from "./ChatBubbleSender"

function ChattingPage() {
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
      r_img : string; //receiver_img 
      value: string; //텍스트 입력값
      time: string //텍스트 보낸 시간
    }[]
  }

  const [value,  setValue] = useState<string>(''); //텍스트 입력값을 넣어주기 위한 state
  const [sender, setSender] = useState<string>('김다희');
  const [receiver, setReceiver] = useState<string>('김유빈');
  const [rImg, setRImg] = useState<string>(friendProfile);
  const [chatData, setChatData] = useState<ChatType>({
    r_id: 0,
    isGroup: false,
    r_name: '김유빈',
    r_profile: friendProfile, // 추후 데이터는 url 형태
    chat: [
      {
        c_id: null,
        sender: '',
        receiver: '',
        r_img: '',
        value: '',
        time: ''
      }
    ],
  })

   //localStorage에서 가져오기
   useEffect(() => {
    const getChatData = localStorage.getItem('chatData')
    if (getChatData) {
      setChatData(JSON.parse(getChatData))
    }
  }, [])

   //유저 전환
   const toggleUser = () =>{
    if(sender == '김다희'){
      setSender('김유빈');
      setReceiver('김다희');
      setRImg(myProfile);
    }
    else{
      setSender('김다희');
      setReceiver('김유빈');
      setRImg(friendProfile);
    }
  }


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
          r_img: sender === '김다희' ? myProfile : friendProfile,
          value: value,
          time: currentTime
        }]
      }
      localStorage.setItem('chatData', JSON.stringify(newChatData))

      return newChatData
    }) 
  }
  

 


  return (
    <Wrapper>
       <Header/> 
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
          /> ): (<ChatBubbleReceiver
            key={chat.c_id}
            value={chat.value}
            time={chat.time}
            profileImg={chat.r_img}
          />)
          ))}
        </ChatBody>
       <ChatInput
        addChatData={addChatData}
        value={value}
        setValue={setValue}
       />
       <Footer/>
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
  overflow: hidden;
`


export default ChattingPage