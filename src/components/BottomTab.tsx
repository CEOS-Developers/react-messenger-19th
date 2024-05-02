import styled from "styled-components"
import {css} from "styled-components"
import homeIcon from "../assets/icons/home.png"
import homeClicked from "../assets/icons/homeClick.png"
import chatIcon from "../assets/icons/chat.png"
import chatClicked from "../assets/icons/chatClick.png"
import callIcon from "../assets/icons/call.png"
import { Link } from "react-router-dom"




function BottomTab() {
  return (
    <BottomTabContainer>
      <Link to = "/"><HomeIcon type="button"><img src={homeIcon}/></HomeIcon></Link>
      <Link to = "/chatting-list-page"><ChatIcon type="button"><img src={chatIcon}/></ChatIcon></Link>
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