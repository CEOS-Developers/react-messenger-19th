import styled from "styled-components";

const Template = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Template;

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  margin: auto auto; // 가운데 정렬
  background-color: white;
  display: flex;
  flex-direction: column;
`;
