import { atom } from 'recoil';

interface ChatType {
  //채팅 방 데이터
  r_id: number; //채팅방(room) 고유 id
  isGroup: boolean; //grop일 경우 group icon을 띄우기 위함
  r_name: string; //채팅방 이름
  r_profile?: string; //수신자 프로필 url
  //채팅 1개 당 데이터
  chat : {
    c_id: number | null; //채팅 1개당 id
    sender: string; //발신자
    receiver: string; //수신자
    value: string; //텍스트 입력값
    time: string //텍스트 보낸 시간
  }[]
}


export const chatDataState = atom<ChatType>({
  key: 'chatData', // 상태의 고유 키
  default: {
    r_id: 0, // 채팅방 고유 id
    isGroup: false, // 그룹 채팅 여부
    r_name: '', // 채팅방 이름
    r_profile: '', // 수신자 프로필 이미지
    chat: [
      {
        c_id: 0,
        sender: '',
        receiver: '',
        value: '',
        time: ''
      }
    ]
    }
  }
);
 