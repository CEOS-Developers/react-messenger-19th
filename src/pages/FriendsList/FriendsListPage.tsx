import styled from "styled-components"
import TopBarIconsMain from "../../components/TopBarIconsMain"
import UserInfo from "../FriendsList/UserInfo"
import BottomTab from "../../components/BottomTab"
import ServiceTab from "./ServiceTab"
import AddGroup from "./AddGroup"
import FriendList from "../FriendsList/FriendList"
import { Link } from "react-router-dom"
import friendsData from "../../data/frinds.json"
import userInfo from "../../data/userData.json"


interface friendsDataType {
    f_id: number,
    f_name: string,
    f_profile: string
}


function FriendsListPage() {


  return (
    <FriendsListPageContainer>
        <TopBarIconsMain/>
        <Link to = "/my-profile-page" style={{ textDecoration: 'none', color: 'inherit' }}>
            <UserInfo
                u_profile={userInfo.u_profile}
                u_name = {userInfo.u_name}
                u_message={userInfo.u_message}
            />
        </Link>
        <ServiceTab/>
        <AddGroup/>
        <FriendsListsWrapper>
            <FriendsTitle>친구118</FriendsTitle>
            <ScrollWrapper>
                {friendsData.map((friend: friendsDataType) => (
                <FriendList
                    key={friend.f_id}
                    f_name={friend.f_name}
                    f_profile={friend.f_profile}
                />
               ))}
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