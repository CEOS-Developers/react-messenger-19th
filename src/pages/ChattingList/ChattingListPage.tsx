import styled from "styled-components"
import TopBarIcons from "../../components/TopBarIcons"
import BottomTab from "../../components/BottomTab"
import ChatRoomLIst from "./ChatRoomLIst"
import chatData from "../../data/dummyData.json"
import { useEffect, useState } from 'react';

interface ChatDataType {
  r_id : number
  r_name : string
  isGroup : boolean
  r_profile? : string
  chat: { c_id: number; sender: string; receiver: string; value: string; time: string }[];
}

function ChattingListPage() {

  return (
    <ChattingListContainer>
       <TopBarIcons/>
       <ChattingListsWrapper>
         {chatData.map((chatInfo : ChatDataType) =>( 
         <ChatRoomLIst
            key={chatInfo.r_id}
            r_name = {chatInfo.r_name}
            isGroup={chatInfo.isGroup}
            r_profile= {chatInfo.r_profile}
            lastMessage={chatInfo.chat.length > 0 ? chatInfo.chat[chatInfo.chat.length - 1].value : ''}
            lastTime = {chatInfo.chat.length > 0 ? chatInfo.chat[chatInfo.chat.length - 1].time : ''}
         />))}
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