import styled from "styled-components";
import searchBar from "../../assets/searchBar.svg";

const SearchBar = () => {
  return (
    // TODO: 현재는 임의로 이미지로 넣음.. 이후 실제 검색 기능 개발 예정
    <Wrapper>
      <img src={searchBar} />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  margin-top: 0.5rem;
`;
