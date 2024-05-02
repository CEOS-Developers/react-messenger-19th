import styled from "styled-components"
import groupProfile from "../../assets/img/groupProfile.png"

function AddGroup() {
  return (
    <AddGroupContainer>
        <Title>그룹</Title>
        <GroupWrapper>
            <GroupImgWrapper><img src={groupProfile}/></GroupImgWrapper>
            <GroupInfoWrapper>
                <h4>그룹만들기</h4>
                <span>그룹대화에 친구를 초대해보세요</span>
            </GroupInfoWrapper>
        </GroupWrapper>
    </AddGroupContainer>
  )
}

const AddGroupContainer = styled.div`
    width: 375px;
    height: 87px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 18.55px 20px 17.45px;
`
const Title = styled.div`
    font-size: 9px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey2};
`
const GroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`
const GroupImgWrapper = styled.div`
    width: 40px;
    height: 40px;
    img{
        width: 100%;
        height: 100%;
    }
`
const GroupInfoWrapper = styled.div`
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

export default AddGroup