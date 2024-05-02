import styled from "styled-components"
import TopBarIcons from "../../components/TopBarIcons"
import BottomTab from "../../components/BottomTab"
import ChatRoomLIst from "./ChatRoomLIst"

function ChattingListPage() {
  return (
    <ChattingListContainer>
       <TopBarIcons/>
       <ChattingListsWrapper>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
          <ChatRoomLIst/>
       </ChattingListsWrapper>
       <BottomTab/>
    </ChattingListContainer>
  )
}

const ChattingListContainer = styled.div`
    height: 749.54px;
    display: flex;
    flex-direction: column;
    gap: 21.54px;
`
const ChattingListsWrapper = styled.div`
    height: 617.92px;
    padding: 0 11.74px 0 11.26px;
    overflow: scroll;
`

export default ChattingListPage