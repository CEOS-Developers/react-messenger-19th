import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ChatRoomComponent from '../components/units/ChatRoom/ChatRoom.Component';

export default function ChatRoomPage(): JSX.Element {
	return (
		<>
			<Header color="#617898" />
			<ChatRoomComponent />
			<Footer />
		</>
	);
}
