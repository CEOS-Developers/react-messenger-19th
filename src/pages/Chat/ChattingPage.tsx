import styled from "styled-components"
import Header from "../../components/Header"
import TopBarIcons from "../../components/TopBarIcons"
import ChatInput from "./ChatInput"
import friendProfile from "../../assets/img/friendProfile.png"
import Footer from "../../components/Footer"


function ChattingPage() {
  return (
    <Wrapper>
       <Header/> 
       <TopBarIcons/>
       <ProfileInfoWrapper>
          <FriendProfileImg src = {friendProfile}/>
          <FriendProfileName>김유빈</FriendProfileName>
       </ProfileInfoWrapper>
       <ChatBody>

       </ChatBody>
       <ChatInput/>
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
  background-color: beige;
  width: 100%;
  height: 545.33px;
`

export default ChattingPage