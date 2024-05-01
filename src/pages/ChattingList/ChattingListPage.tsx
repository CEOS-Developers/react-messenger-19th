import styled from "styled-components"
import TopBarIcons from "../../components/TopBarIcons"
import BottomTab from "../../components/BottomTab"

function ChattingListPage() {
  return (
    <ChattingListContainer>
       <TopBarIcons/>
       <ChattingListsWrapper>

       </ChattingListsWrapper>
       <BottomTab/>
    </ChattingListContainer>
  )
}

const ChattingListContainer = styled.div`
    height: 749.54px;
`
const ChattingListsWrapper = styled.div`
    height: 661px;
`

export default ChattingListPage