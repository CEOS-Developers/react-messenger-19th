import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ChattingPage from "./pages/Chat/ChattingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
	return (
		<Container>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<ChattingPage/>}></Route>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</Container>
	);
}

const Container = styled.div`
	margin: 0 auto;
    width: 375px;
    height: 812px;
	display: flex;
	flex-direction: column;
	//background-color: aliceblue;
`
export default App;
