import styled from "styled-components"
import { css } from "styled-components"
import addIcon from "../assets/icons/add.png"
import searchIcon from "../assets/icons/search.png"
import folderIcon from "../assets/icons/folder.png"
import vectorIcon from "../assets/icons/vector.png"


function TopBarIcons() {
  return (
    <TopBarIconsIconsWrapper>
        <SearchIcon> <img src = {searchIcon}/> </SearchIcon>
        <VectorIcon><img src = {vectorIcon}/></VectorIcon>
        <FolderIcon><img src = {folderIcon}/></FolderIcon>
        <AddIcon><img src = {addIcon}/></AddIcon>
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



export default TopBarIcons