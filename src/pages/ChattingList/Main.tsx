import styled from "styled-components";
import ChattingItem from "./ChattingItem";

const Main = () => {
  const keys = Object.keys(localStorage);

  return (
    <Wrapper>
      {keys.map((key) => {
        const chatArray = JSON.parse(localStorage.getItem(key));
        return <ChattingItem key={key} id={key} chatArray={chatArray} />;
      })}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  margin-top: 0.25rem;
`;
