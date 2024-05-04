import styled from "styled-components";
import ChattingItem from "./ChattingItem";

const Main = () => {
  const keys = Object.keys(localStorage);

  return (
    <Wrapper>
      {keys.map((key) => {
        if (typeof key === "string" && key !== "") {
          const chatArray = JSON.parse(localStorage.getItem(key)!);
          return <ChattingItem key={key} id={key} chatArray={chatArray} />;
        } else {
          return null;
        }
      })}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  margin-top: 0.25rem;
`;
