import styled from "styled-components"
import backButton from "../../assets/icons/back.png"
import profileUpload from "../../assets/img/profileUpload.png"
import showIcon from "../../assets/icons/show.png"
import linkIcon from "../../assets/icons/link.png"
import { Link } from "react-router-dom"

function MyProfilePage() {
  return (
    <MyProfileConatainer>
        <BackButton>
            <Link to = "/"><img src = {backButton}/></Link>
        </BackButton>
        <MyProfileImgWrapper><img src={profileUpload}/></MyProfileImgWrapper>
        <MyProfileInfoWrapper>
            <UserInfo>
                <div>
                    <h4>이름</h4>
                    <span>김유빈</span>
                </div>
                <img src={showIcon}/>
            </UserInfo>
            <UserInfo>
                <div>
                    <h4>상태메세지</h4>
                    <span>상태메세지를 입력해보세요</span>
                </div>
                <img src={showIcon}/>
            </UserInfo>
            <UserInfo>
                <div>
                    <h4>전화번호</h4>
                    <span>+82 10-3613-6160 </span>
                </div>
                <img src={showIcon}/>
            </UserInfo>
            <UserInfo>
                 <div>
                    <h4>인스타그램</h4>
                    <span>instagram.com</span>
                </div>
                <a href="https://www.instagram.com"><img src={linkIcon}/></a>
            </UserInfo>
            <UserInfo>
                <div>
                    <h4>GIT HUB</h4>
                    <span>github.com</span>
                </div>
                <a href="https://www.github.com"><img src={linkIcon}/></a>
            </UserInfo>
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
const UserInfo = styled.div`
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