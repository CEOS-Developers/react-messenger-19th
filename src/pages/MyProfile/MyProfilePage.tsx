import styled from "styled-components"
import backButton from "../../assets/icons/back.png"
import profileUpload from "../../assets/img/profileUpload.png"
import showIcon from "../../assets/icons/show.png"
import linkIcon from "../../assets/icons/link.png"
import { Link } from "react-router-dom"
import userData from "../../data/userData.json"

interface UserInfoDataType {
    u_name: string,
    u_profile: string,
    u_message : string,
    u_phoneNum: string,
    u_insta: string,
    u_github: string
}

function MyProfilePage() {
const { u_name, u_profile, u_message, u_phoneNum, u_insta, u_github }: UserInfoDataType = userData;

  return (
    <MyProfileConatainer>
        <BackButton>
            <Link to = "/"><img src = {backButton}/></Link>
        </BackButton>
        <MyProfileImgWrapper>{u_profile? <img src={u_profile}/> : <img src={profileUpload}/>}</MyProfileImgWrapper>
        <MyProfileInfoWrapper>
            <UserInfoWrapper>
                <div>
                    <h4>이름</h4>
                    <span>{u_name}</span>
                </div>
                <img src={showIcon}/>
            </UserInfoWrapper>
            <UserInfoWrapper>
                <div>
                    <h4>상태메세지</h4>
                    <span>{u_message? u_message : "상태메세지를 입력해보세요"}</span>
                </div>
                <img src={showIcon}/>
            </UserInfoWrapper>
            <UserInfoWrapper>
                <div>
                    <h4>전화번호</h4>
                    <span>{"+82 "+ u_phoneNum}</span>
                </div>
                <img src={showIcon}/>
            </UserInfoWrapper>
            <UserInfoWrapper>
                 <div>
                    <h4>인스타그램</h4>
                    <span>{u_insta}</span>
                </div>
                <a href={"https://www." + u_insta}><img src={linkIcon}/></a>
            </UserInfoWrapper>
            <UserInfoWrapper>
                <div>
                    <h4>GIT HUB</h4>
                    <span>{u_github}</span>
                </div>
                <a href={"https://www." + u_github}><img src={linkIcon}/></a>
            </UserInfoWrapper>
        </MyProfileInfoWrapper>
    </MyProfileConatainer>
  )
}

const MyProfileConatainer = styled.div`
    height: 749.54px;
`
const BackButton = styled.div`
    height: 60.54px;
    display: flex;
    align-items: center;
    img{
        width: 18px;
        height: 18px;
        margin-left: 10px;
    }
`
const MyProfileImgWrapper = styled.div`
    height: fit-content;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    img{
        width: 343px;
        height: 144px;
    }
`
const MyProfileInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const UserInfoWrapper = styled.div`
    width: 343px;
    height: 26px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h4{
        font-size: 8px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.grey2};
    }

    span{
        font-size: 14px;
        font-weight: 500;
    }

    img{
        width: 18px;
        height: 18px;
        margin-top: 8px;
    }
`
export default MyProfilePage