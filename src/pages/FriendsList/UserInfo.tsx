import styled from "styled-components"
import userImg from "../../assets/img/myProfile.png"


function UserInfo() {
  return (
    <UserInfoContainer>
        <UserImgWrapper><img src={userImg}/></UserImgWrapper>
        <UserInfoWrapper>
            <h4>김유빈</h4>
            <span>상태 메세지를 입력해보세요</span>
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