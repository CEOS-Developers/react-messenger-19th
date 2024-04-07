import styled from 'styled-components';
import Footer from '../components/common/Footer';
import FooterMenu from '../components/common/FooterMenu';
import Header from '../components/common/Header';
import UserList from '../components/units/Main/UserList';

export default function Main(): JSX.Element {
	return (
		<div style={{ position: 'relative', height: '100%' }}>
			<Header color="white" />
			<UserList />
			<MainFooter>
				<FooterMenu />
				<Footer />
			</MainFooter>
		</div>
	);
}

const MainFooter = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
`;
