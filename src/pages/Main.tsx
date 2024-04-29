import styled from 'styled-components';
import Footer from '../components/common/Footer';
import FooterMenu from '../components/common/FooterMenu';
import Header from '../components/common/Header';
import UserList from '../components/units/Main/UserList';

export default function Main(): JSX.Element {
	return (
		<div>
			<Header color="white" />
			<UserList />
		</div>
	);
}
