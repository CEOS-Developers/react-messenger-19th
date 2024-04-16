import styled from "styled-components"

interface Props {
    value : string,
    time: string,
    profileImg: string,
}

function ChatBubbleSender({value}: Props) {
  return (
    <ChatBubbleWrapper>
        <BubbleText>{value}</BubbleText>
    </ChatBubbleWrapper>
  )
}
const ChatBubbleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 243.76px;
    height: fit-content;
    margin-bottom: 14.88px;
    margin-left: 113.82px;
`
const BubbleText = styled.div`
    max-width: 213.76px;
    height: fit-content;
    background-color: ${({theme})=> theme.colors.green};
    border: none;
    border-radius: 20px;
    padding: 15px;
    font-size: 12px;
    font-weight: 500;
    word-wrap: break-word;
`
export default ChatBubbleSender