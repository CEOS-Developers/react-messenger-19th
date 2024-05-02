import styled from "styled-components"
import friendImg from "../../assets/img/friendProfile.png"

function FriendList() {
  return (
    <FriendListContainer>
        <FriendImg><img src ={friendImg}/></FriendImg>
        <span>이름</span>
    </FriendListContainer>
  )
}

const FriendListContainer = styled.div`
    margin-bottom: 20px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    span{
        font-size: 12px;
        font-weight: 500;
    }
`
const FriendImg = styled.div`
    width: 40px;
    height: 40px;
    img{
        width: 100%;
        height: 100%;
    }
`

export default FriendList