import styled from "styled-components"
import {css} from "styled-components"
import homeIcon from "../assets/icons/home.png"
import homeClicked from "../assets/icons/homeClick.png"
import chatIcon from "../assets/icons/chat.png"
import chatClicked from "../assets/icons/chatClick.png"
import callIcon from "../assets/icons/call.png"




function BottomTab() {
  return (
    <BottomTabContainer>
      <HomeIcon type="button"><img src={homeIcon}/></HomeIcon>
      <ChatIcon type="button"><img src={chatIcon}/></ChatIcon>
      <CallIcon type="button"><img src={callIcon}/></CallIcon>
    </BottomTabContainer>
  )
}

const BottomTabContainer = styled.div`
    width: 375px;
    height: 49px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
`
const BottomTabStyle = css`
  width: 24px;
  height: 39.5px;
  img{
    width: 100%;
    height: 100%;
  }
`

const HomeIcon = styled.button`
  ${BottomTabStyle}
`
const ChatIcon = styled.button`
  ${BottomTabStyle}
`
const CallIcon = styled.button`
  ${BottomTabStyle}
`
export default BottomTab