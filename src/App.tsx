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
	height: 100vh; // 화면의 전체 높이를 정확히 사용
	background-color: #cdcdcd;
	display: flex;
	justify-content: center;
	align-items: flex-start; // 세로 정렬을 위해 추가
	overflow: hidden; // 스크롤바가 전혀 나타나지 않도록 설정
`;

const MobileContainer = styled.div`
	width: 375px;
	height: 100vh; // 화면 높이와 동일하게 설정
	background-color: white;
	overflow-y: scroll; // 내용이 이 높이를 초과할 경우에만 스크롤바 활성화
	padding-top: 29px;

	@media (max-width: 768px) {
		width: 100%;
		padding-top: 0px;
	}
`;
