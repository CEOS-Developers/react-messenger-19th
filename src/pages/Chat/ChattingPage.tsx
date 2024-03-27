import { useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import TopBarIcons from "../../components/TopBarIcons"
import ChatInput from "./ChatInput"
import friendProfile from "../../assets/img/friendProfile.png"
import Footer from "../../components/Footer"
import dayjs from "dayjs"


function ChattingPage() {
  interface ChatEle {
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

  const [value,  setValue] = useState<string>(''); //텍스트 입력값을 넣어주기 위한 state
  const [sender, setSender] = useState<string>('김다희');
  const [receiver, setReceiver] = useState<string>('김유빈');
  const [chatData, setChatData] = useState<ChatEle>({
    r_id: 0,
    isGroup: false,
    r_name: '김유빈',
    r_profile: '',
    chat: [
      {
        c_id: null,
        sender: '',
        receiver: '',
        value: '',
        time: ''
      },
    ],
  })

  // 객체 생성
  const currentTime:string = dayjs().format('HH:mm'); // 시:분 형식으로 포맷팅
  const getChatData = (value : string) => {
    const newChatData = {
      chat : [{
        c_id: Date.now(),
        sender: sender,
        receiver: receiver,
        value: value,
        time: currentTime
      }]
    }
    setChatData(prevState => ({
      ...prevState,
      chat: [...prevState.chat, ...newChatData.chat]
    }));
    localStorage.setItem("chatData", JSON.stringify([...chatData.chat, ...newChatData.chat]))
  }

  //유저 전환
  const toggleUser = () =>{
    if(sender == '김다희'){
      setSender('김유빈');
      setReceiver('김다희');
    }
    else{
      setSender('김다희');
      setReceiver('김유빈');
    }
  }


  return (
    <Wrapper>
       <Header/> 
       <TopBarIcons/>
       <ProfileInfoWrapper>
          <FriendProfileImg src = {friendProfile} onClick={toggleUser}/>
          <FriendProfileName> {receiver} </FriendProfileName>
       </ProfileInfoWrapper>
       <ChatBody>
        <ChatBubble>가나다</ChatBubble>
       </ChatBody>
       <ChatInput
        getChatData={getChatData}
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
`
const ChatBubble = styled.div`
  
`

export default ChattingPage