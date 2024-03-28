import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ChatRoom from './pages/ChatRoom';
import { RecoilRoot } from 'recoil';

function App(): JSX.Element {
	return (
		<>
			<RecoilRoot>
				<FullContainer>
					<MobileContainer>
						<BrowserRouter>
							<Routes>
								{/* <Route path="/" element={<Main />} /> */}
								{/* <Route path="" element={<ChatList />}> */}
								<Route path="/" element={<ChatRoom />} />
								{/* </Route> */}
								{/* <Route path="my-page" element={<MyPage />} /> */}
								{/* <Route path="menu1" element={<Menu1 />} /> */}
							</Routes>
							{/* <Footer /> */}
						</BrowserRouter>
					</MobileContainer>
				</FullContainer>
			</RecoilRoot>
		</>
	);
}

export default App;

const FullContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #cdcdcd;
	display: flex;
	justify-content: center;
`;

const MobileContainer = styled.div`
	width: 375px;
	height: 100vh;
	background-color: white;

	@media (max-width: 768px) {
		width: 100%;
		height: 100vh;
	}
`;
