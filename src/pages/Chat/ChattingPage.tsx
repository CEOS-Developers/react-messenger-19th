import styled from "styled-components"
import Header from "../../components/Header"
import ChatProfile from "../../components/ChatProfile"

function ChattingPage() {
  return (
    <Wrapper>
       <Header/> 
       <ChatProfile/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default ChattingPage