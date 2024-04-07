import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import UserList from '../components/units/Main/UserList';

export default function Main(): JSX.Element {
	return (
		<div>
			<Header color="white" />
			<UserList />
			<Footer />
		</div>
	);
}
