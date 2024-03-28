import styled from "styled-components";
import ChattingRoom from "../pages/ChattingRoom/ChattingRoom";

const Messenger = () => {
  return (
    <Wrapper>
      <ChattingRoom />
    </Wrapper>
  );
};

export default Messenger;

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  margin: auto auto; // 가운데 정렬
  background-color: white;
`;
