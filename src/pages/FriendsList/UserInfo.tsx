import styled from "styled-components"
import userImg from "../../assets/img/myProfile.png"

interface UserInfoType {
    u_name: string,
    u_profile: string,
    u_message: string
}

function UserInfo({u_name, u_profile, u_message}:UserInfoType) {
  return (
    <UserInfoContainer>
        <UserImgWrapper>{u_profile?( <img src={u_profile}/>):(<img src={userImg}/>)}</UserImgWrapper>
        <UserInfoWrapper>
            <h4>{u_name}</h4>
            <span>{u_message? u_message : "상태 메세지를 입력해보세요"}</span>
        </UserInfoWrapper>
    </UserInfoContainer>
  )
}

const UserInfoContainer = styled.div`
    width: 375px;
    height: 96.26px;
    display: flex;
    align-items: center;
    padding: 0 14.42px;
    gap: 15.20px;
`
const UserImgWrapper = styled.div`
    width: 54px;
    height: 54px;
    img{
        width: 100%;
        height: 100%;
    }
`
const UserInfoWrapper = styled.div`
    max-width: 276.96px;
    max-height: 54px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4{
        font-size: 10px;
        font-weight: 500px;
    }
    span{
        font-size: 9px;
        font-weight: 500px;
        color: ${({ theme }) => theme.colors.grey2};
        overflow: hidden;
    }
`
export default UserInfo