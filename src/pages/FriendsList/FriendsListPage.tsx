import styled from "styled-components"
import TopBarIconsMain from "../../components/TopBarIconsMain"
import UserInfo from "../FriendsList/UserInfo"
import BottomTab from "../../components/BottomTab"
import ServiceTab from "./ServiceTab"
import AddGroup from "./AddGroup"
import FriendList from "../FriendsList/FriendList"
import { Link } from "react-router-dom"


function FriendsListPage() {

  return (
    <FriendsListPageContainer>
        <TopBarIconsMain/>
        <Link to = "/my-profile-page" style={{ textDecoration: 'none', color: 'inherit' }}><UserInfo/></Link>
        <ServiceTab/>
        <AddGroup/>
        <FriendsListsWrapper>
            <FriendsTitle>친구118</FriendsTitle>
            <ScrollWrapper>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
            </ScrollWrapper>
        </FriendsListsWrapper>
        <BottomTab/>
    </FriendsListPageContainer>
  )
}

const FriendsListPageContainer = styled.div`
    height: 749.54px;
`
const FriendsListsWrapper = styled.div`
    width: 375px;
    height: 385px;
    padding: 0 18.55px 20px 17.45px;
`
const ScrollWrapper = styled.div`
    width: 100%;
    height: 358px;
    overflow: scroll;
`

const FriendsTitle = styled.div`
    font-size: 9px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.grey2};
`

export default FriendsListPage