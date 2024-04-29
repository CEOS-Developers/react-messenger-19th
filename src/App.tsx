import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ChatRoom from './pages/ChatRoom';
import { RecoilRoot } from 'recoil';
import Main from './pages/Main';

import MergeFooter from './components/common/MergeFooter';
import ChatList from './pages/ChatList';
import Header from './components/common/Header';

function App(): JSX.Element {
	return (
		<>
			<RecoilRoot>
				<FullContainer>
					<MobileContainer>
						<BrowserRouter>
							<div style={{ position: 'relative', height: '100%' }}>
								<Header color="white" />
								<Routes>
									<Route path="/" element={<Main />} />
									<Route path="/ChatList" element={<ChatList />} />
									<Route path="/ChatRoom" element={<ChatRoom />} />
									{/* </Route> */}
									{/* <Route path="my-page" element={<MyPage />} /> */}
									{/* <Route path="menu1" element={<Menu1 />} /> */}
								</Routes>

								<MergeFooter />
							</div>
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

	background-color: white;

	@media (max-width: 768px) {
		width: 100%;
		/* height: calc(100vh - 60px); */
	}
`;
