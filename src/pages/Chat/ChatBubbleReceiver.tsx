import styled from "styled-components"

interface Props {
    value : string,
    time: string,
    profileImg: string
}

function ChatBubbleReceiver({value, time ,profileImg}: Props) {
  return (
    <ChatBubbleWrapper>
        <ProfileWrapper>
          <ProfileImg src = {profileImg}/>
          <Time>{time}</Time>
        </ProfileWrapper>
        
        <BubbleText>{value}</BubbleText>
    </ChatBubbleWrapper>
  )
}

const ChatBubbleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 297.76px;
    height: fit-content;
    margin-top: 14.88px;
    margin-left: 22.39px;
`

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 39px;
    height: 56px;
    gap: 10px;
    align-items: center;
    margin-right: 15px;
`
const Time = styled.div`
    font-size: 9px;
    font-weight: 500;
    color: ${({theme})=> theme.colors.grey2}
`

const ProfileImg = styled.img`
    width: 39px;
    height: 39px;
`
const BubbleText = styled.div`
    width: 243.76px;
    height: fit-content;
    background-color: beige;
    border: none;
    border-radius: 20px;
    padding: 15px;
    font-size: 12px;
    font-weight: 500;
    word-wrap: break-word;
`

export default ChatBubbleReceiver