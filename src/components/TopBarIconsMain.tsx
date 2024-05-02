import styled from "styled-components"
import { css } from "styled-components"
import searchIcon from "../assets/icons/search.png"
import alarmIcon from "../assets/icons/alarm.png"
import addPersonIcon from "../assets/icons/addPerson.png"
import settingsIcon from "../assets/icons/settings.png"


function TopBarIconsMain() {
  return (
    <TopBarIconsIconsWrapper>
        <SearchIcon> <img src = {searchIcon}/> </SearchIcon>
        <VectorIcon><img src = {alarmIcon}/></VectorIcon>
        <FolderIcon><img src = {addPersonIcon}/></FolderIcon>
        <AddIcon><img src = {settingsIcon}/></AddIcon>
    </TopBarIconsIconsWrapper>
  )
}


const TopBarIconsIconsWrapper = styled.div`
    width: 100%;
    height: 39.54px;
    display: flex;
    flex-direction: row;
    align-items: end;
`

const TopBarIconsStyle = css`
    width: 18px;
    height: 18px;
    border: none;
    background-color: white;

    img{
        width: 18px;
        height: 18px;
    }
    cursor: pointer;
`


const SearchIcon = styled.button`
  ${TopBarIconsStyle}
  margin-left: 20.5px;
`

const VectorIcon = styled.button`
  ${TopBarIconsStyle}
  margin-left: 222px;
`
const FolderIcon = styled.button`
  ${TopBarIconsStyle}
  margin-left: 20px;
`
const AddIcon = styled.button`
  ${TopBarIconsStyle}
  margin-left: 20px;
`



export default TopBarIconsMain