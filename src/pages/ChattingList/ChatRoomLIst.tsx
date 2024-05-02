import styled from "styled-components"
import friendImg from "../../assets/img/friendProfile.png"

function ChatRoomLIst() {
  return (
    <ChatRoomLIstContainer>
        <FriendImg><img src={friendImg}/></FriendImg>
        <ChatRoomInfo>
            <Wrapper>
                <ReceiverName>김다희</ReceiverName>
                <CurrentChatTime>00:29</CurrentChatTime>
            </Wrapper>
            <LastChat>마지막 채팅 내용</LastChat>              
        </ChatRoomInfo>
    </ChatRoomLIstContainer>
  )
}

const ChatRoomLIstContainer = styled.div`
    width: 352px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 23px;
    margin-bottom: 20px;
`
const FriendImg = styled.div`
    width: 40px;
    height: 40px;
    img{
        width: 100%;
        height: 100%;
    }
`

const ChatRoomInfo = styled.div`
    display: flex;
    flex-direction: column;
    width:287px;
    height: 26px;
    justify-content: space-between;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ReceiverName = styled.h4`
    font-size: 12px;
    font-weight: 500;
`
const CurrentChatTime = styled.span`
    font-size: 8px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey1};
`
const LastChat = styled.div`
    font-size: 9px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey2};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export default ChatRoomLIst