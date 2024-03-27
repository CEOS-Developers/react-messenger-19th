import styled from "styled-components";
import ChattingPage from "./pages/Chat/ChattingPage";



function App() {
	return (
		<Container>
			<ChattingPage/>
		</Container>
	);
}

const Container = styled.div`
	margin: 0 auto;
    width: 375px;
    height: 812px;
	//background-color: aliceblue;
`

export default App;
