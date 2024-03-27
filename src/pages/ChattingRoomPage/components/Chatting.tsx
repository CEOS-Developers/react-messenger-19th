import { currentChatRoomIdState } from "@recoil/chatAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components"

//이번 과제는 한 명뿐이라 채팅방은 1개
const DUMMYID = '1';




export default function Chatting() {
  const chattingData = useRecoilValue(currentChatRoomIdState(DUMMYID));
  return (
    <div>Chatting</div>
  )
}
