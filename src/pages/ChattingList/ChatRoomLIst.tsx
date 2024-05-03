import styled from "styled-components"
import groupImg from "../../assets/img/groupProfile.png"
import friendImg from "../../assets/img/friendProfile.png"


interface ChatListProps {
    r_name : string
    isGroup : Boolean
    r_profile? : string
    lastMessage? : string
    lastTime ? : string
}

function ChatRoomLIst({r_name, isGroup, r_profile, lastMessage, lastTime}: ChatListProps) {


  return (
    <ChatRoomLIstContainer>
        <FriendImg>
        {isGroup ? 
        (<img src={groupImg}/>) : 
        (<img src={r_profile || friendImg}/>)
        }
        </FriendImg>
        <ChatRoomInfo>
            <Wrapper>
                <ReceiverName>{r_name}</ReceiverName>
                <CurrentChatTime>{lastTime}</CurrentChatTime>
            </Wrapper>
            <LastChat>{lastMessage}</LastChat>              
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