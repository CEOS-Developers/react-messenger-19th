import * as C from './ChatRoom.styles';
import YourAnswer from './YourAnswer';

export default function ChatRoomComponent(): JSX.Element {
	return (
		<C.Wrapper>
			<C.ChatHeader>
				<C.HeaderBox>
					<C.SVGIcon src="./ChatRoom/back.svg" />
					<C.Name>김수빈</C.Name>
				</C.HeaderBox>
				<C.HeaderBox>
					<C.SVGIcon src="./ChatRoom/search.svg" />
					<C.SVGIcon src="./ChatRoom/call.svg" />
					<C.SVGIcon src="./ChatRoom/more.svg" />
				</C.HeaderBox>
			</C.ChatHeader>

			<C.ChatContainer>
				<YourAnswer />
			</C.ChatContainer>

			<C.InputContainer>
				<C.SVGIcon src="./ChatRoom/add.svg" />
				<C.ChatInput type="text" />
				<C.SVGIcon src="./ChatRoom/send.svg" />
			</C.InputContainer>
		</C.Wrapper>
	);
}
