import styled from "styled-components"
import friendImg from "../../assets/img/friendProfile.png"

interface FriendListProps {
    f_name: string;
    f_profile: string;
    }
function FriendList({ f_name, f_profile }: FriendListProps) {

  return (
    <FriendListContainer>
        {f_profile ? (
        <FriendImg><img src={f_profile} alt={f_name} /></FriendImg>
      ) : (
        <FriendImg><img src={friendImg} alt="Profile" /></FriendImg>
      )}
        <span>{f_name}</span>
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