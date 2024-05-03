import styled from "styled-components";
import { typography } from "../../style/typography";
import editprofile from "../../assets/editProfile.svg";
import SearchBar from "./SearchBar";

interface PageHeaderProps {
  title: string;
  search?: boolean;
  icon?: string | null;
}

const PageHeader = ({ title, search, icon }: PageHeaderProps) => {
  return (
    <Wrapper>
      <TopWrapper>
        <Title>{title}</Title>
        {icon && <img src={editprofile} alt="프로필 편집" />}
      </TopWrapper>
      {search && <SearchBar />}
    </Wrapper>
  );
};

export default PageHeader;

const Wrapper = styled.div`
  margin: 0 1rem 0.94rem 1rem;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  ${typography.title1}
`;
